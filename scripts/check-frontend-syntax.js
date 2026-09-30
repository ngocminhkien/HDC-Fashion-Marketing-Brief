import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

function getFiles(dir, ext = '.js') {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (fullPath.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

const targetDirs = ['src'];
let count = 0;

for (const dir of targetDirs) {
  const files = getFiles(path.resolve(process.cwd(), dir));
  for (const file of files) {
    try {
      execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
      count++;
    } catch (err) {
      console.error(`Syntax error in frontend file: ${file}`);
      process.exit(1);
    }
  }
}

console.log(`✅ Checked ${count} frontend JavaScript files for syntax errors. All passed.`);
