
var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function arr()
{
    read.question("Enter the size of array",function(n){
        utility.addzero(read,n);
    });
}
arr();
