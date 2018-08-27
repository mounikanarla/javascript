var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function temp()
{
    read.question("Enter the value of t ",function(t){
          read.question("Enter the value of v ",function(v){
                    utility.windchill(t,v);
        
                });
            });
}
temp();