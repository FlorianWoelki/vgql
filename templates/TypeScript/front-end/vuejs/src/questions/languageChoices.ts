import * as fs from 'fs';

const languageChoices = fs.readdirSync(`${__dirname}/../../templates`);

export default {
  name: 'language-choice',
  type: 'list',
  message: 'What language would you prefer',
  choices: languageChoices,
};
