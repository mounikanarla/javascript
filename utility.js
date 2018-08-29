const _=require("lodash")
module.exports={

/*
 * @purpose : By using random function flip the coin no of times from user input
 *            and print the percentage of head vs tails
 */

/*
 * @description : Declaring a function and passing the userinput for fliping the coin
 *                no of times
 * @function: coinflip takes the no of times to flip coin and print the percentage of
 *            head and tail
 */

coinflip: function(fliptimes)
{
/*
 * @description : Declaring the variables to store the random values of heads and tails.
 */
var head=0,tail=0;
/*
 * @description : initializing for loop to repeat according to no of times 
 *                to flip from user and comparing with one variable from one to 
 *                to no of times given.
 */
for(var i=1;i<=fliptimes;i++)
{   
    /*
     * @description : Declaring a random function to generate a random values from 0 to 1 and storing 
     *                in a variable random
     */
    var random=Math.random();
    /*
     * @description : In if statement condition is used to compare random value lessthan half
     *                to increase the count value of tail
     */
    if(random<0.5)
    {
        tail++;
    }
    /*
     * @description : else statement is used to increase the count value of head greaterthan half
     */
    else
    {
        head++;
    }
}/*End of the for loop*/
/*
 * @description : declaring the variables and to print the percentage of head and tail. 
 */
var perofhead=(head/fliptimes)*100;
var peroftail=(tail/fliptimes)*100;
var perofheadvstail=(head/tail)*100;
console.log("percentage of head is "+perofhead+"%");
console.log("percentage of tail is "+peroftail+"%");
console.log("percentage of headvstail is "+perofheadvstail+"%");
},

/*
 * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
 *             and print the string.
 */

/*
 *  @descriptipn: Declaring the function and passing the userinput as argument.
 *  @function: diplayname takes the userinput and print it with some sentence.
 */
 displayname : function(userinput)
 {
/*
 *@decription: if condition is used to check the length of the input is greater than 3
 */
 if(userinput.length >=3){
    console.log('hii ' + userinput +' how r u ');
 }
/*
 * @descrption: else statement is printed whether the input is lesser
 */
 else
 {
     console.log("invalid username");
 }
},/* End of the funtion */


/*
 * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
 *            or not. 
 */

/*
 * @description : Declaring the function and passing a four digit number from userinput
 * @function:  Function compares the length of given number and prints the number 
 *             is a leap year or not 
 */
leapyear : function(year)
{
    /*
     * @description : if statement checks the given number ,if the number is not equals to
     *                fourdigit it prints invalid input and stops the program. 
     */
    if(year.length!=4)
    { 
         console.log("not a valid year");
    }
    /*
     * @description : else statement is printed if length of number is equals to four and it 
     *                compares that if the year is completely divisible by 4 and not divisible 
     *                by 100 or the year is divisible by 400. 
     */
    else
    {
        /* 
         * @description : inner if condition compares that the year is completely divisible by 4 
         *                and not divisible by 100 or the year is divisible by 400. 
         */
        if(year%4==0 && year%100!==0 || year%400==0)
        {
            console.log(year+" is a leap year");
        }
        else
        /*
         * @description : excecuted when the given four digit number is not a leap year
         */
        {
          console.log(year+" is  not a leap year");
        }
      }

    },

/* 
 * @purpose : By taking power values as input and display the given power value 
 *            is a leapyear or not , the given power value doesnt exceed 31
 */ 

 /*
  * @description : Declaring a function and giving power value N as argument  
  * @function : power function takes the value N,checks the given number is less than 31 
  *             and prints the given value is a leap year or not
  */
power : function(N)
{
    /*
     * @description : Declaring the variable with power value as one
     */
    var  pow=1;
    /*
     * @description : In if statements conditions are taken that it doesnt exceed 0 and 31 
     */ 
    if(N>0)
    {
        if(N<31)
        {
            /* 
             * @description : Initializing a variable i from one to check the condition 
             * and in order to run the loop upto N times
             */ 
            for(i=1;i<=N;i++)
            {
                /*
                 * @description : multiplying each and every value of pow to 2, assigning 
                 *                the value to power1 and printing the power values
                 */
                power1=pow*2;
                console.log("the power value of 2 power "+i+" is "+res);
            }/* End of foe loop*/
                 /*
                  * @description : checking the last power1 value with leap year condition
                  */
                if(power1%4==0 && power1%100==0 || power1%400==0)
                  {
                    console.log(power1+" is a leap year");
                  }
                  else
                  {
                   console.log(power1+" is not a leap year");
                  }
        }
    }

},/* End of power function */



/* 

*/

harmonic: function(num)
{
    var sum=0;
    var r;
    if(num>0)
    {
        for(var i=1;i<=num;i++)
        {
           r=1/i;
           sum=sum+r;
        }
           console.log("The harmonic value is "+sum);
        
    }


},

/*PRIMEFACTORIZARION*/

factprime : function(value)
{
  for(var f=2;f*f<value;f++)
  {
      while(value%f==0)
      {
          value=value/f;
          console.log("the primefactor values are"+f );
      }
      if (value>1)
      {
          console.log(value);
      }
  }
},

/*GAMBLER*/

gambler : function(stake,goal,trails)
{
    var loss=0,wins=0;
    for(var i=1;i<=trails;i++)
    {
        if(stake>0 && stake<goal)
        {
          if(Math.random()>0.5)
          {
            stake++;
            wins=wins+1;
          }
          else
          {
              stake--;
            loss=loss+1;
          }
        }
    }
        if(stake==goal)
        {
            wins++;
        }
        console.log("no of bets is"+trails);
        console.log("the no of games you win is "+wins);
        console.log("the no of games you loss is "+loss);
        console.log("avg of the game is"+(wins+loss)/2);
        console.log("Percentage of of the wins is"+(wins/trails)*100);
        console.log("Percentage of of the loss is"+(loss/trails)*100);
    },

    /*DISTANCE*/

    distance : function(x,y)
    {
        var len;
        len=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        console.log("Eucledian Distance from the origin is "+len);
    },

    /*QUADRATIC*/

    quadratic : function(a,b,c)
    {
       var root1;
       var root2;
       var  delta=(b*b)-(4*a*c);
        if (delta>0)
        {
             root1= (-b+Math.sqrt(delta))/(2*a);
             root2 = (-b-Math.sqrt(delta))/(2*a);
             console.log("Root1 value  is "+root1);
             console.log("Root2 value  is "+root2);

        }
        else
        {
           console.log("The given values doesnt form the equation");
        }
    
    },
/* WINCHILL*/

windchill : function(t,v)
{
  if(t>50 || v >120 || v<3)
 {
     console.log("Formulae is not valid for given values");
 }
 else
 {
    var w=35.74+0.6215*t+(0.4275*t - 35.75)*Math.pow(v,0.16);
     console.log("tempertature: "+t+" Fahrenheit");
     console.log("wind speed: ",+v+" Miles per second");
     console.log("wind chill: "+w);
 }
},

/*COUPON*/

coupon : function(start,end)
{
    var random= [],i,n;
    for(i=start;i<end;i++)
    {
        n= _.random(start,end)
        random.push(n);
    }
    console.log(random);
    console.log("no of generated coupons:"+random.length);
    var unique=new Set(random);
    console.log(unique);
    console.log("no of unique coupons"+[...unique].length);
},

/*DISPLAYING TRIPLETS*/

addzero : function(read,n)
{
    this.n=n;
    var arr1=[];
    var count=0;
    function input(n)
    {
       if(arr1.length >= n)
       {
         for(var j=0;j<n-2;j++)
          {  
           for(var k=j+1;k<n-1;k++)
           {
                for(var l=k+1;l<n;l++)
                {
                      if(Number(arr1[j])+Number(arr1[k])+Number(arr1[l]) === 0)
                      {
                         console.log("the distinct triplets are : ["+arr1[j]+","+arr1[k]+","+arr1[l]+"]");
                        count= count+1;
                      }
                }
           }
          }
           console.log("count of triplets: "+count);
           read.close();
        }
        else
        {
        read.question(`please enter array element${(arr1.length+1 )} : ` , function(value)
         {
             arr1.push([value]);
             input(n);
         });
        }  
    }
        input(n);
    
},

/*STOPWATCH*/

getcurrenttime : function()
{
    var date=new Date();
    var n=date.getTime();
    return n;
},
elapsedtime : function(start,stop)
{
 elapsed =(stop-start);
 return elapsed;
},

/*2D ARRAY*/

array2d : function(read,row,coloumn)
{
    var  size =row*coloumn;
    var arr1=[];
    function input(size)
    {
        if(arr1.length >= size)
        {
            var k=0;
            arr2=[];
            var string=' ';
            for(var i=0;i<row;i++)
            {
                for(var j=0;j<coloumn;j++)
                {
                    string=string+arr1[k]+' ';
                    k++;
                }
                arr2.push(string);
                string=' ';
            }
            for(let index=0;index<arr2.length;index++)
            {
                console.log(arr2[index]);
            }
        }
        else
        {
        read.question(`please enter array element${(arr1.length+1 )} : ` , function(value)
         {
             arr1.push(value);
             input(size);
         });
        }            
        
    }
input(size);
},


/*permutation*/

permutation : function(str,first,last)
{

  if(last===first)
  {
     console.log(str.join(''));
  }
  else{
      for(var i=first;i<=last;i++)
      {
        str=this.swap(str,first,i);
       /*console.log("1." +str.join(''));*/
        this.permutation(str, first+1, last);
        str=this.swap(str,i,first);
        /*console.log("3."+str.join('') );*/
      }

  }
},
swap : function(str,i,j)
{
    var temp;
    temp=str[i];
    str[i]=str[j];
    str[j]=temp;
    return str;
}
}








