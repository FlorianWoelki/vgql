import * as inquirer from 'inquirer';
import * as fs from 'fs';
// import execa from 'execa';
import runTasks from './tasks';
import questions from './questions';

const CURR_DIR = process.cwd();

function createProjectDirectories(destination: string): void {
  fs.mkdirSync(destination);
  fs.mkdirSync(`${destination}/web`);
  fs.mkdirSync(`${destination}/server`);
}

async function mainProcess(useDefaultAnswers: boolean, projectName?: string): Promise<any> {
  if (useDefaultAnswers) {
    // Default project paths
    const frontendTemplatePath = `${__dirname}/../templates/JavaScript/front-end/vuejs`;
    const backendTemplatePath = `${__dirname}/../templates/JavaScript/back-end/graphql`;
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
      undefined,
      destination,
      [],
      inputProjectName,
      'javascript',
    );
  } else {
    inquirer.prompt(questions.allQuestions).then(async (answers: inquirer.Answers) => {
      const languageChoice = answers['language-choice'] as string;
      const frontendProjectChoice = answers['frontend-choice'] as string;
      const backendProjectChoice = answers['backend-choice'] as string;
      const projectNameAnswer = answers['project-name'] as string;
      const extraChoices = answers['extra-choices'] as string[];
      const frontendTemplatePath = `${__dirname}/../templates/${languageChoice}/front-end/${frontendProjectChoice}`;
      const backendTemplatePath = `${__dirname}/../templates/${languageChoice}/back-end/${backendProjectChoice}`;

      const destination = `${CURR_DIR}/${projectNameAnswer}`;

      let typeormPath: string | undefined;
      if (answers['typeorm-db-choice']) {
        typeormPath = `${__dirname}/../templates/${languageChoice}/typeorm-db/${answers['typeorm-db-choice']}`;
      }

      createProjectDirectories(destination);

      runTasks(
        frontendTemplatePath,
        backendTemplatePath,
        typeormPath,
        destination,
        extraChoices,
        projectNameAnswer,
        languageChoice.toLowerCase(),
      );
    });
  }
}

export default mainProcess;
