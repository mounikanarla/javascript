var readline=require('readline');
var utility=require('../utilities/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function rand()
{
    read.question("Enter the min value of distinct coupon number",function(min){
        read.question("Enter the max value of distinct coupon number",function(max){
        utility.coupon(min,max);
    });
});
}
rand();