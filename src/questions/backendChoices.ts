import * as fs from 'fs';

const backendChoices = fs.readdirSync(`${__dirname}/../../templates/back-end`);

export default {
  name: 'backend-choice',
  type: 'list',
  message: 'What back end do you want to use?',
  choices: backendChoices,
};
