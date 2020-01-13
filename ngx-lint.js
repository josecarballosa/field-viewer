const { exec } = require('child_process');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  transports: [new winston.transports.File({ filename: 'ngx-lint.log' })],
});

const cwd = process.cwd();
const script = process.argv[2];
const files = process.argv
  .slice(3)
  .map(f => `--files="${f.replace(cwd, '').slice(1)}"`)
  .join(' ');

logger.debug({ cwd });
logger.debug({ script });
logger.debug({ fixOption });
logger.debug({ files });

exec(`npm run ngx-lint ${script} --fix=true ${files}`, (error, stdout) => {
  if (error) {
		logger.error(error);
    console.log(stdout);
    process.exit(1);
  }
});
