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
  templatePath: string,
  destination: string,
  projectName: string,
) {
  const tasks = new Listr([
    {
      title: 'Generating project',
      task: async () => {
        await copy(templatePath, destination);
        renameFileContent(destination, 'package.json', {
          name: projectName,
        });
      },
    },
    {
      title: 'Install dependencies',
      task: async () => {
        await projectInstall({
          cwd: destination,
        });
      },
    },
  ]);

  await tasks.run();
}
