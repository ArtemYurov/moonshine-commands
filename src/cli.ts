#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from './commands/init.js';
import { packageJson } from './utils/package.js';

const program = new Command();

program
  .name('moonshine-skills')
  .description('MoonShine Skills — AI-powered development toolkit for MoonShine')
  .version(packageJson.version);

program
  .command('init')
  .description('Initialize MoonShine Skills in your MoonShine project')
  .action(initCommand);

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
