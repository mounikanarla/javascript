var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function array()
{
    read.question("Enter the value of row ",function(row){
          read.question("Enter the value of coloumn ",function(coloumn){
            utility.array2d(read,row,coloumn);
           });
    });
}
array();