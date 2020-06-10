import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { projectInstall } from 'pkg-install';
import Listr from 'listr';

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
      if (/^([a-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and characters'
    }
  }
];

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(async (answers: any) => {
  const projectChoice = answers['frontend-choice'];
  const projectName = answers['project-name'];
  const templatePath = `${__dirname}/../templates/front-end/${projectChoice}`;

  const destination = `${CURR_DIR}/${projectName}`;
  fs.mkdirSync(destination);

  createDirectoryContents(templatePath, projectName);

  const tasks = new Listr([
    {
      title: 'Install dependencies',
      task: async () => {
        await projectInstall({
          cwd: destination,
        });
      },
    }
  ]);

  await tasks.run();
});

function createDirectoryContents(templatePath: string, newProjectPath: string) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originalFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(originalFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(originalFilePath, 'utf8');
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}
