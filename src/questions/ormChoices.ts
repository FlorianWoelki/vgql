import * as fs from 'fs';
import { Answers } from 'inquirer';

const ormChoices = fs.readdirSync(
  `${__dirname}/../../templates/TypeScript/orm`,
);

export default {
  name: 'orm-choice',
  type: 'list',
  message: 'Do you want an extra ORM?',
  choices: ormChoices,
  when: (answers: Answers): boolean => (
    (answers['language-choice'] as string).toLowerCase() === 'typescript'
  ),
};
