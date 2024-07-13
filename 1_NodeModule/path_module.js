const path = require('path');

let ext = path.extname('C:\\Users\\mpant\\Desktop\\NodeCourse\\1_NodeModule\\file1.txt');
let baseName = path.basename('C:\\Users\\mpant\Desktop\\NodeCourse\\1_NodeModule\\file1.txt'); // make double shlashes

console.log(baseName);
console.log(ext);

console.log(__filename);
console.log(__dirname);