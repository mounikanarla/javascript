var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function words()
{
    read.question("Enter the string : ",function(stringvalue){
     var strArray=stringvalue.split('');
     utility.permutation(strArray,0,strArray.length-1);
     read.close();
    });
}
words();