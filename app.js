const os = require('os');
const fs = require('fs');

// 1

console.log('Architecture ' +os.arch());
console.log('CPUs ' +os.cpus().length);
console.log('OS ' +os.platform());

//2
const fileName = __dirname +'/test.txt';

fs.readFile(fileName, (err, data)=>{

    if(err){
        console.error(err);
    }
    console.log(data.toString());
});


//3 File reading Synchronously
const data = fs.readFileSync(fileName);
console.log(data.toString());


//4 Copy content of a file to another file
const copiedFile = __dirname +'/test_copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFile);

readStream.pipe(writeStream);

readStream.on('data', data =>{
    console.log(data.toString());
});




