var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function root()
{
    read.question("Enter the value of a ",function(a){
          read.question("Enter the value of b ",function(b){
              read.question("Enter the value of c ",function(c){
                    utility.quadratic(a,b,c);
        
                });
           });
    });
}
root();