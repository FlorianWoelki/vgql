import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { runTasks } from './tasks';
import projectNameQuestion from './questions/projectName';

const frontendChoices = fs.readdirSync(`${__dirname}/../templates/front-end`);

const QUESTIONS = [
  {
    name: 'frontend-choice',
    type: 'list',
    message: 'What frontend would you like?',
    choices: frontendChoices,
  },
  projectNameQuestion,
];

const CURR_DIR = process.cwd();

function mainProcess(useDefaultAnswers: boolean, projectName?: string): void {
  if (useDefaultAnswers) {
    const templatePath = `${__dirname}/../templates/front-end/nuxtjs`;

    if (!projectName) {
      inquirer.prompt([projectNameQuestion]).then((value: any) => {
        const inputProjectName = value['project-name'] as string;
        const destination = `${CURR_DIR}/${inputProjectName}`;
        fs.mkdirSync(destination);
        runTasks(templatePath, destination, inputProjectName);
      });
      return;
    }

    const destination = `${CURR_DIR}/${projectName}`;
    fs.mkdirSync(destination);
    runTasks(templatePath, destination, projectName);
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
