const fs = require('fs');
const buffer =fs.readFileSynce(process.argv[2]);
const result = buffer.toString().split('\n').length - 1;
console.log(buffer.toString());