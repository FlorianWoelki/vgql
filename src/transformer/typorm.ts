import { appendToFile, appendLineToFile, readFromFile } from '../util';

export default (destination: string, typeormPath: string) => {
  appendToFile(
    `${destination}/server`,
    'package.json',
    'dependencies',
    readFromFile(typeormPath, 'package.json', 'dependencies'),
  );
  appendLineToFile(
    `${destination}/server/src/index.ts`,
    "import 'reflect-metadata'",
    "import { createConnection } from 'typeorm';",
  );
  appendLineToFile(
    `${destination}/server/src/index.ts`,
    'const app = express()',
    '\n\tawait createConnection();',
  );
};
