import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { projectInstall } from 'pkg-install';
import Listr from 'listr';
import { ncp } from 'ncp';

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

const frontendChoices = fs.readdirSync(`${__dirname}/../templates/front-end`);

const QUESTIONS = [
  {
    name: 'frontend-choice',
    type: 'list',
    message: 'What frontend would you like?',
    choices: frontendChoices,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) => {
      if (/^([a-z\-_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores and characters';
    },
  },
];

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(async (answers: Record<string, unknown>) => {
  const projectChoice = answers['frontend-choice'] as string;
  const projectName = answers['project-name'] as string;
  const templatePath = `${__dirname}/../templates/front-end/${projectChoice}`;

  const destination = `${CURR_DIR}/${projectName}`;
  fs.mkdirSync(destination);

  const tasks = new Listr([
    {
      title: 'Generating project',
      task: async () => {
        await copy(templatePath, destination);
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
});
