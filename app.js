
//To include the File System module, use the require() method
var fs = require('fs');

//The key-value pair data 
var mydata = {
    name: 'Rohini',
    bike: 'R15',
    car: 'Audi',
    snacks: 'cake',
    flavour : 'chocolate'
};

//To add a single key-value pair to json file
mydata.message = 'hii';
mydata.age = '20';

//To check whether the key is present or not.
if(mydata.hasOwnProperty('key'))
{
  console.log('present');
}
else
{
  console.log('not present');
}

//To display all the key-value pair separately from json file
for(var Key in mydata) {
  console.log("key: "+Key+", value: "+mydata[Key]);
} 

//to delete a key
delete mydata.age;

//Use the JavaScript function JSON.stringify() to convert it into a string.
var data = JSON.stringify(mydata);

//To create a file and add contents to it.
//If we don't want to rewrite the contents of the file, we can use "fs.appendFile"
fs.writeFile('db.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your data.');
    console.log(err.message);
    return;
  }
  console.log('File saved successfully.')
});

fs.writeFile('student.json', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//To read a file and displays all the contents of it
fs.readFile('db.json', (err, data) => {
  if (err) throw err;
  //Use the JavaScript function JSON.parse() to convert text into a JavaScript object.
  var student = JSON.parse(data);
  console.log(student); // to display all contents
  console.log(student.name); // to display required field
});

//To delete a particular file present in the same directory
fs.unlink('student.json', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
