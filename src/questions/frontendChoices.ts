import * as fs from 'fs';

const frontendChoices = fs.readdirSync(
  `${__dirname}/../../templates/front-end`,
);

export default {
  name: 'frontend-choice',
  type: 'list',
  message: 'What frontend would you like?',
  choices: frontendChoices,
};
