import { appendToFile, readFromFile, appendLineToFile } from '../util';

export default (destination: string, extraChoicePath: string): void => {
  appendToFile(
    `${destination}/web`,
    'package.json',
    'dependencies',
    readFromFile(extraChoicePath, 'package.json', 'dependencies'),
  );
  appendLineToFile(
    `${destination}/web/src/main.js`,
    "import apolloProvider from './apollo-setup'",
    "import './assets/styles/tailwind.css';",
  );
};
