const fs = require('fs'); 

// //READ A FILE
// let fileContent = fs.readFileSync('file1.txt');
// console.log('data of file 1 -->>  ' + fileContent );

// // WRITING A FILE

// // if a file dpes not exists then it will creaate new file and will write data there.

// fs.writeFileSync('file2.txt', 'I am file 2 written by method')
// console.log('file has been written'); // it will overrideen previous data

// //APPEND A FILE

// fs.appendFileSync('file2.txt', 'I am written by append method')
// console.log('updated')

// //DELETE FILE

// fs.unlinkSync('file3.txt')
// console.log('file deleted')


// /* WORK WITH DIRECTORIES */

// //CREATE A DIRECTORY

// fs.mkdirSync('myDirectory')

//Check the content inside directory

let folderPath = 'C:\\Users\\mpant\\Desktop\\NodeCourse\\1_NodeModule\\myDirectory';
let folderContent = fs.readdirSync(folderPath);

console.log(folderContent);

// Directory Exist or Not
let exists = fs.existsSync('myDirectory');
console.log(exists)

// delete directory

fs.rmdirSync('myDirectory')