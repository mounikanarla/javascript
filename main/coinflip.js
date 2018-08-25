var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function flip()
{
    read.question("Enter the flips",function(userinput){
        utility.coinflip(userinput);
    })
}
flip();