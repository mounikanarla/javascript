var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function factor()
{
    read.question("Enter the num : ",function(userinput){
        utility.factprime(userinput);
    });
}
factor();