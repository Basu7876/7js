// prog for table 6 to 9
let j;
for( j=6;j<=9;j++)

{
    console.log(j);
    for(let i=1;i<=10;i++)
    {
        console.log(j+"*"+i+"="+j*i);
    }
    
}
// prog for even no from 25 to 35
let num=35
for(i=25;i<=num;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

// count digt number
let count=0
let n=14675
while(n!=0)
{
    ++count
    n= parseInt(n/10);
    console.log(n);
}
console.log(count);