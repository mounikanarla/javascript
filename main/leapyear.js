var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function year()
{
    read.question("Enter the year : ",function(userinput){
        utility.leapyear(userinput);
        read.close();
    });
}
year();