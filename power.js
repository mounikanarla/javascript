var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function poweryear()
{
    read.question("Enter the power value : ",function(userinput){
        utility.power(userinput);
        read.close();
    });
}
poweryear();