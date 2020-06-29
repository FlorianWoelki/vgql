import * as fs from 'fs';

const extraChoices = fs.readdirSync(
  `${__dirname}/../../templates/TypeScript/extras`,
);

export default {
  name: 'extra-choice',
  type: 'checkbox',
  message: 'You want some sweet extras?',
  choices: extraChoices,
  when: (answers: any) => {
    return (
      (answers['language-choice'] as string).toLowerCase() === 'typescript'
    );
  },
};
