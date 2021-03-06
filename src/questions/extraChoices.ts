import * as fs from 'fs';

const extraChoices = fs.readdirSync(
  `${__dirname}/../../templates/Extras`,
);

export default {
  name: 'extra-choices',
  type: 'checkbox',
  message: 'Do you want some sweet Extras?',
  choices: extraChoices,
};
