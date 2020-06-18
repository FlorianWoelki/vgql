import projectNameQuestion from './projectName';
import frontendChoicesQuestion from './frontendChoices';
import backendChoicesQuestion from './backendChoices';
import languageChoicesQuestion from './languageChoices';

export default {
  projectNameQuestion,
  allQuestions: [
    languageChoicesQuestion,
    frontendChoicesQuestion,
    backendChoicesQuestion,
    projectNameQuestion,
  ],
};
