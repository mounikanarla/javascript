var readline=require('readline');
var utility=require('../utilities/utility.js')
var starttime=0;
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function watch()
{
    read.question("Enter num 1 to start the stopwatch",function(starttime){
        if(starttime=="1")
        {
            start=utility.getcurrenttime();
        read.question("Enter num 0 to end the stopwatch",function(stoptime){
            var stop=utility.getcurrenttime();
            var res=utility.elapsedtime(start,stop);
            console.log("elapsed time="+res+"seconds");
            read.close();
        });
    }
    else{
        console.log("invalid input");
    }
    });
}
watch();
