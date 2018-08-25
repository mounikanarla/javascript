var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function data()
{
    read.question("Enter the amount",function(stake){
          read.question("Enter your goal",function(goal){
              read.question("no of trails",function(trails){
                    utility.gambler(stake,goal,trails);
        
                });
           });
    });
}
data();