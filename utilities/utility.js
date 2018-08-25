module.exports={
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

    distance : function(x,y)
    {
        var len;
        len=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        console.log("Eucledian Distance from the origin is "+len);
    },

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
    
    }
}











