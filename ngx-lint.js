const { exec } = require('child_process');
const winston = require('winston');

const logger = winston.createLogger({
	level: 'debug',
	format: winston.format.simple(),
  transports: [new winston.transports.File({ filename: 'ngx-lint.log' })],
});

const cwd = process.cwd();
const project = process.argv[2];
const files = process.argv
  .slice(3)
  .map(f => `--files="${f}"`)
  .join(' ');

logger.debug(`cwd: ${cwd}`);
logger.debug(`script: ${project}`);
logger.debug(`files: ${files}`);

exec(`npx ng lint ${project} --fix=true ${files}`, (error, stdout) => {
  if (error) {
    // logger.error(error);
    console.log(stdout);
    process.exit(1);
  }
});
