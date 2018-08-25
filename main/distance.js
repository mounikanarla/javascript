var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function point()
{
    read.question("Enter the value of x ",function(x){
          read.question("Enter the value of y ",function(y){
            utility.distance(x,y);
           });
    });
}
point();