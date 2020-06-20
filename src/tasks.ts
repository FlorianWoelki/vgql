import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import ncpTypes, { ncp } from 'ncp';
import { renameFileContent, appendToFile, readFromFile } from './util';

const copy = (
  source: string,
  destination: string,
  disablePackageFile: boolean = false,
) =>
  new Promise((res, rej) => {
    let options: ncpTypes.Options = {};
    if (disablePackageFile) {
      options.filter = (file) => {
        return !file.includes('package.json');
      };
    }

    ncp(source, destination, options, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });

export async function runTasks(
  frontendTemplatePath: string,
  backendTemplatePath: string,
  typeormPath: string | undefined,
  destination: string,
  projectName: string,
) {
  const tasks = new Listr([
    {
      title: 'Generating projects',
      task: async () => {
        await copy(backendTemplatePath, `${destination}/server`);
        if (typeormPath) {
          await copy(typeormPath, `${destination}/server`, true);
          appendToFile(
            `${destination}/server`,
            'package.json',
            'dependencies',
            readFromFile(typeormPath, 'package.json', 'dependencies'),
          );
        }
        await copy(frontendTemplatePath, `${destination}/web`);
        renameFileContent(`${destination}/server`, 'package.json', {
          name: projectName,
        });
        renameFileContent(`${destination}/web`, 'package.json', {
          name: projectName,
        });
      },
    },
    {
      title: 'Install dependencies',
      task: async () => {
        await projectInstall({
          cwd: `${destination}/server`,
        });
        await projectInstall({
          cwd: `${destination}/web`,
        });
      },
    },
  ]);

  await tasks.run();
}
