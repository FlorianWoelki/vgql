import projectNameQuestion from './projectName';
import frontendChoicesQuestion from './frontendChoices';
import backendChoicesQuestion from './backendChoices';
import languageChoicesQuestion from './languageChoices';
import extraChoices from './extraChoices';

export default {
  projectNameQuestion,
  allQuestions: [
    languageChoicesQuestion,
    frontendChoicesQuestion,
    backendChoicesQuestion,
    extraChoices,
    projectNameQuestion,
  ],
};
