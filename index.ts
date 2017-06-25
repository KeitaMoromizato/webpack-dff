import { exec } from 'child_process';

const prevCommit = '^HEAD';
const targetCommit = 'HEAD';

const getDiffFiles = (targetCommit, prevCommit) => new Promise((resolve, reject) => {
  exec(`git diff --name-only ${targetCommit} ${prevCommit}`, (error, stdout, stderr) => {
    if (error) return reject(new Error(stderr));

    resolve(stdout.split('\n'));
  });
})
