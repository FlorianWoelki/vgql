import * as fs from 'fs';
import { Answers } from 'inquirer';

const typeormDbChoices = fs.readdirSync(
  `${__dirname}/../../templates/TypeScript/typeorm-db`,
);

export default {
  name: 'typeorm-db-choice',
  type: 'list',
  message: 'What DB do you want to use with TypeORM?',
  choices: typeormDbChoices,
  when: (answers: Answers): boolean => (
    (answers['language-choice'] as string).toLowerCase() === 'typescript'
  ),
};
