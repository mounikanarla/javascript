var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function number()
{
    read.question("Enter the num for harmonic value: ",function(userinput){
        utility.harmonic(userinput);
    });
}
number();