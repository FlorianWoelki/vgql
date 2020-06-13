import yargs from 'yargs';
import mainProcess from './cli';

/* eslint-disable no-unused-expressions */
yargs
  .usage('Usage: $0 <command> [options]')
  .command('$0', 'Generate project', (args) => {
    const { yes: useDefaultAnswers } = args.argv;
    mainProcess(useDefaultAnswers as boolean);
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .parse();
