import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { runTasks } from './tasks';
import questions from './questions';

const CURR_DIR = process.cwd();

async function mainProcess(useDefaultAnswers: boolean, projectName?: string) {
  if (useDefaultAnswers) {
    const templatePath = `${__dirname}/../templates/front-end/nuxtjs`;
    let inputProjectName = projectName;

    if (!inputProjectName) {
      const inputValue = await inquirer.prompt([questions.projectNameQuestion]);
      const newProjectName = inputValue['project-name'] as string;
      inputProjectName = newProjectName;
    }

    const destination = `${CURR_DIR}/${inputProjectName}`;
    fs.mkdirSync(destination);
    runTasks(templatePath, destination, inputProjectName!);
  } else {
    inquirer.prompt(questions.allQuestions).then(async (answers: any) => {
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
