var arr=[]
for(let i=97;i<=122;i++)
{
    var ans=String.fromCharCode(i)
    arr.push(ans)
    document.write(ans)
}

for(let i=65;i<=90;i++)
{
    var ans=String.fromCharCode(i)
    arr.push(ans)
    document.write(ans)
}

for(let i=47;i<=64;i++)
{
    var ans=String.fromCharCode(i)
    arr.push(ans)
    document.write(ans)
}
console.log(arr);

var pass=""
for(let i=0;i<8;i++)
{
 var ind=parseInt(Math.random()*arr.length)
 pass=pass+arr[ind]
}
console.log(pass);

 var inp=document.querySelector('div')
 inp.innerText= pass;
 
//  div.appendChild(div)