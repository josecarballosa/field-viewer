const { exec } = require('child_process');

const project = process.argv[2];
const files = process.argv
  .slice(3)
  .map(f => `--files="${f}"`)
  .join(' ');

exec(`npx ng lint ${project} --fix=true ${files}`, (error, stdout) => {
  if (error) {
    console.log(stdout);
    process.exit(1);
  }
});
