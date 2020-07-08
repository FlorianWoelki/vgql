import { appendToFile, appendLineToFile, readFromFile } from '../util';

export default (destination: string, typeormPath: string): void => {
  // Setup Typeorm in package.json and index file
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

  // Modify User with TypeORM columns
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'import { ObjectType, Field, ID }',
    "import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';",
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    '@ObjectType()',
    "@Entity('users')",
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'id: number',
    '\t@PrimaryGeneratedColumn()',
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'username: string',
    '\t@Column()',
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'name: string',
    '\t@Column()',
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'email: string',
    '\t@Column()',
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'phone: string',
    '\t@Column()',
    true,
  );
  appendLineToFile(
    `${destination}/server/src/entity/User.ts`,
    'website: string',
    '\t@Column()',
    true,
  );
};
