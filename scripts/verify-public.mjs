import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
const manifest=JSON.parse(readFileSync('publication-manifest.json','utf8'));
const tracked=execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0').filter(Boolean);
const unexpected=tracked.filter(file=>!manifest.files.includes(file));
if(unexpected.length)throw Error('Files not approved for public publication: '+unexpected.join(', '));
console.log('Verified '+tracked.length+' allowlisted public files');
