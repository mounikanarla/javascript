var readline=require('readline');/*Including the readline module from package to program*/
var utility=require('../utilities/utility.js');/* Including the folder address for calling the functions to main*/
var read=readline.createInterface({/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
    input:process.stdin,/*Every instance of readline consists of one readble input and writable input*/  
    output:process.stdout
});

function name()/*Declaring  a function*/
{
    read.question("Enter the name: ",function(userinput){/*Reading input from the user from local function*/
        utility.displayname(userinput);
        read.close();
    });
}
name();