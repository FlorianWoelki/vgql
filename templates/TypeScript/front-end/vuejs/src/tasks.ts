import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import { ncp } from 'ncp';
import renameFileContent from './util';

const copy = (source: string, destination: string) =>
  new Promise((res, rej) =>
    ncp(source, destination, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    }),
  );

export async function runTasks(
  frontendTemplatePath: string,
  backendTemplatePath: string,
  destination: string,
  projectName: string,
) {
  const tasks = new Listr([
    {
      title: 'Generating projects',
      task: async () => {
        await copy(frontendTemplatePath, `${destination}/web`);
        await copy(backendTemplatePath, `${destination}/server`);
        renameFileContent(`${destination}/web`, 'package.json', {
          name: projectName,
        });
        renameFileContent(`${destination}/server`, 'package.json', {
          name: projectName,
        });
      },
    },
    {
      title: 'Install dependencies',
      task: async () => {
        await projectInstall({
          cwd: `${destination}/web`,
        });
        await projectInstall({
          cwd: `${destination}/server`,
        });
      },
    },
  ]);

  await tasks.run();
}
