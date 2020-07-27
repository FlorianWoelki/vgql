import { appendToFile, readFromFile, appendLineToFile } from '../util';

export default (
  programmingLanguage: string,
  destination: string,
  extraChoicePath: string,
): void => {
  const fileEnding = programmingLanguage === 'typescript' ? 'ts' : 'js';
  appendToFile(
    `${destination}/web`,
    'package.json',
    'dependencies',
    readFromFile(extraChoicePath, 'package.json', 'dependencies'),
  );
  appendLineToFile(
    `${destination}/web/src/main.${fileEnding}`,
    "import apolloProvider from './apollo-setup'",
    "import './assets/styles/tailwind.css';",
  );
};
