import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { runTasks } from './tasks';

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

function mainProcess(useDefaultAnswers: boolean): void {
  if (useDefaultAnswers) {
    // TODO: Project name specified
    const destination = `${CURR_DIR}/replace-me`;
    const templatePath = `${__dirname}/../templates/front-end/nuxtjs`;
    fs.mkdirSync(destination);

    runTasks(templatePath, destination, 'replace-me');
  } else {
    inquirer
      .prompt(QUESTIONS)
      .then(async (answers: Record<string, unknown>) => {
        const projectChoice = answers['frontend-choice'] as string;
        const projectName = answers['project-name'] as string;
        const templatePath = `${__dirname}/../templates/front-end/${projectChoice}`;

        const destination = `${CURR_DIR}/${projectName}`;
        fs.mkdirSync(destination);

        runTasks(templatePath, destination, projectName);
      });
  }
}

export default mainProcess;
