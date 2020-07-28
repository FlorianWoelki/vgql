import projectNameQuestion from './projectName';
import frontendChoicesQuestion from './frontendChoices';
import backendChoicesQuestion from './backendChoices';
import languageChoicesQuestion from './languageChoices';
import typeormDbChoices from './typeormDbChoices';
import extraChoices from './extraChoices';

export default {
  projectNameQuestion,
  allQuestions: [
    languageChoicesQuestion,
    frontendChoicesQuestion,
    backendChoicesQuestion,
    typeormDbChoices,
    extraChoices,
    projectNameQuestion,
  ],
};
