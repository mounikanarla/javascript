var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function name()
{
    read.question("Enter the name",function(userinput){
        utility.displayname(userinput);
        read.close();
    });
}
name();