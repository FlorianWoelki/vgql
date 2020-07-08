import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import ncpTypes, { ncp } from 'ncp';
import { renameFileContent } from './util';
import typormTransformer from './transformer/typorm';

const copy = (
  source: string,
  destination: string,
  disablePackageFile = false,
) =>
  new Promise((res, rej) => {
    const options: ncpTypes.Options = {};
    if (disablePackageFile) {
      options.filter = (file) => !file.includes('package.json');
    }

    ncp(source, destination, options, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });

export default async function runTasks(
  frontendTemplatePath: string,
  backendTemplatePath: string,
  typeormPath: string | undefined,
  destination: string,
  projectName: string,
): Promise<any> {
  const tasks = new Listr([
    {
      title: 'Generating projects',
      task: async () => {
        // Append back end stuff
        await copy(backendTemplatePath, `${destination}/server`);
        if (typeormPath) {
          await copy(typeormPath, `${destination}/server`, true);
          typormTransformer(destination, typeormPath);
        }

        // Append front end stuff
        await copy(frontendTemplatePath, `${destination}/web`);
        renameFileContent(`${destination}/server`, 'package.json', {
          name: `${projectName}-server`,
        });
        renameFileContent(`${destination}/web`, 'package.json', {
          name: `${projectName}-web`,
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
