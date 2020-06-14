import yargs from 'yargs';
import mainProcess from './cli';

/* eslint-disable no-unused-expressions */
yargs
  .usage('Usage: $0 <command> [options]')
  .command('$0', 'Generate project', (args) => {
    const { default: useDefaultAnswers } = args.argv;
    mainProcess(useDefaultAnswers as boolean);
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .alias('d', 'default')
  .describe('default', 'Use default project setup for Vue.js and GraphQL')
  .parse();
