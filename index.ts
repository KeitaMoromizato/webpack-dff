import { exec } from 'child_process';
import webpack from 'webpack';

const prevCommit = '^HEAD';
const targetCommit = 'HEAD';

const getDiffFiles = (targetCommit, prevCommit) => new Promise((resolve, reject) => {
  exec(`git diff --name-only ${targetCommit} ${prevCommit}`, (error, stdout, stderr) => {
    if (error) return reject(new Error(stderr));

    resolve(stdout.split('\n'));
  });
});

const getAffectedFiles = (files: Array<string>) => new Promise((resolve, reject) => {
  webpack({}, (error, stats) => {
    if (error) return reject(error);

    resolve(stats);
  })
});

export function fromFiles(files: Array<string>): Promise<any> {
  return getAffectedFiles(files);
}
