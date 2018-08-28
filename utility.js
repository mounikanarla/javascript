const _=require("lodash")
const prompt = require('prompt');
module.exports={

/*flipcoin*/  

coinflip: function(n)
{
var head=0,tail=0;
for(var i=1;i<=n;i++)
{
    var random=Math.random();
    if(random<0.5)
    {
        tail++;
    }
    else
    {
        head++;
    }
}
var perofhead=(head/n)*100;
var peroftail=(tail/n)*100;
var perofheadvstail=(head/tail)*100;
console.log("percentage of head is "+perofhead+"%");
console.log("percentage of tail is "+peroftail+"%");
console.log("percentage of headvstail is "+perofheadvstail+"%");
},

/*DISPLAY NAME WITH MESSAGE*/

displayname : function(name)
{
if(Object.keys(name).length >=3){
    console.log('hii ' + name +' how r u ');
 }
 else
 {
     console.log("invalid username");
 }
},

/*LEAP YEAR*/

leapyear : function(year)
{
    
    if(Object.keys(year).length<4)
    {
        console.log("not a valid year");
    }
    else
    {
        if(year%4==0 && year%100!==0 || year%400==0)
        {
            console.log(year+" is a leap year");
        }
        else
        {
          console.log(year+" is  not a leap year");
        }
      }

    },

    /* DISPLAY LEAP YEAR WITH POWER VALUES*/

power : function(N)
{
    var res=1;
    if(N>0)
    {
        if(N<31)
        {
            for(i=1;i<=N;i++)
            {
                res=res*2;
                console.log("the power value of 2 power "+i+" is "+res);
            }
                if(res%4==0 && res%100==0 || res%400==0)
                  {
                    console.log(res+" is a leap year");
                  }
                  else
                  {
                   console.log(res+" is not a leap year");
                  }
        }
    }

},

/* HARMONIC NUMBER*/

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
                      if(Number(arr1[j])+Number(arr1[k])+Number(arr1[l]) == 0)
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

/*stopwatch : function(starttime,stoptime)
{
    if(starttime==1)
    {
       var  start=utility.getcurrenttime();
    }
    else if(stoptime==0)
    {
     var   stop=utility.getcurrenttime();
    }
    else
    {
        console.log("invalid input");
    }
    var res=utility.elapsedtime(start,stop);
    console.log("elapsed time="+res+"seconds");
},*/
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
             input(n);
         });
        }            
        
    }
input(size);
},

/*permutation*/
permutation : function(word)
{
  var value=word;
  string=word.split('');
  /*console.log(string);*/
  var string1=[];
  for(var i=0;i<string.length;i++)
  {
      string1.push(string[i]);
  }
  console.log(string1);
}
}








