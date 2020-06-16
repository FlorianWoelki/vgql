import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import { runTasks } from './tasks';
import questions from './questions';

const CURR_DIR = process.cwd();

function createProjectDirectories(destination: string): void {
  fs.mkdirSync(destination);
  fs.mkdirSync(`${destination}/web`);
  fs.mkdirSync(`${destination}/server`);
}

async function mainProcess(useDefaultAnswers: boolean, projectName?: string) {
  if (useDefaultAnswers) {
    // Default project paths
    const frontendTemplatePath = `${__dirname}/../templates/front-end/nuxtjs`;
    const backendTemplatePath = `${__dirname}/../templates/back-end/graphql`;
    let inputProjectName = projectName;

    if (!inputProjectName) {
      const inputValue = await inquirer.prompt([questions.projectNameQuestion]);
      const newProjectName = inputValue['project-name'] as string;
      inputProjectName = newProjectName;
    }

    const destination = `${CURR_DIR}/${inputProjectName}`;
    createProjectDirectories(destination);
    runTasks(
      frontendTemplatePath,
      backendTemplatePath,
      destination,
      inputProjectName!,
    );
  } else {
    inquirer.prompt(questions.allQuestions).then(async (answers: any) => {
      const frontendProjectChoice = answers['frontend-choice'] as string;
      const backendProjectChoice = answers['backend-choice'] as string;
      const projectName = answers['project-name'] as string;
      const frontendTemplatePath = `${__dirname}/../templates/front-end/${frontendProjectChoice}`;
      const backendTemplatePath = `${__dirname}/../templates/back-end/${backendProjectChoice}`;

      const destination = `${CURR_DIR}/${projectName}`;

      createProjectDirectories(destination);

      runTasks(
        frontendTemplatePath,
        backendTemplatePath,
        destination,
        projectName,
      );
    });
  }
}

export default mainProcess;
