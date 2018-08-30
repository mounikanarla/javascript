/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node coinflip.js 
 *  Purpose         : By using random function flip the coin no of times from user input
 *                    and print the percentage of head vs tails
 *  @overview       : Flip the coins and displaying the percentages of head and tail
 *  @module         : coinflip- This is optional if expeclictly its an npm or local package
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 24-08-2018
 *
 ***********************************************************************************************/

/* @description : Including the readline module from package to program*/
var readline=require('readline');
/* @description : Including the folder address for calling the functions to main*/
var utility=require('../utilities/utility.js');
/* 
 *  @description : Instance of readline.Interface class is constructed from a method 
 *                 readline.createInterface
 */
var read=readline.createInterface({
    /*Every instance of readline consists of one readble input and writable input*/
    input:process.stdin,
    output:process.stdout
});

function flip()/*Declaring  a function to flip coin no of times*/
{
    /*Reading input from the user from local function*/
    read.question("Enter no of times to flip the coin: ",function(flipcoin){
        utility.coinflip(flipcoin);
        read.close();
    });
}
flip();