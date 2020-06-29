#!/usr/bin/env node

import yargs from 'yargs';
import mainProcess from './cli';

/* eslint-disable no-unused-expressions */
yargs
  .usage('Usage: $0 <command> [options]')
  .command('$0', 'Generate project', (args) => {
    const { default: useDefaultAnswers, name: projectName } = args.argv;
    mainProcess(useDefaultAnswers as boolean, projectName as string);
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .alias('d', 'default')
  .describe('default', 'Use default project setup for Vue.js and GraphQL')
  .alias('n', 'name')
  .nargs('n', 1)
  .describe('name', 'Specify the name for the project generation')
  .parse();
