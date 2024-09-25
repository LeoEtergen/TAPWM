const fs = require('fs');
const data = fs.readFileSync('File.txt');
// a execução é bloqueada aqui até o arquivo a ser lido
console.log(data.toString());