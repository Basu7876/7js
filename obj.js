// var str="abcabc"
// var obj={}
// for(let iteam of str)
// {
//     if(obj[iteam]==iteam)
//     {
//         obj[iteam]=a++
//     }
// }





// var obj={
//     name1:'chandan',
//     education:'be',
//     school:function school1()
//     {
//         console.log('im a child');

//     },
//     skill:["html","css"],
//     age:21,
//     gf:'sonnu',
//     7:"i am seven"
// }

// console.log(typeof obj);


// console.log(obj);

// console.log(obj.name1);
// console.log(obj[7]);

// console.log(obj["education"]);


// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// console.log(Object.entries(obj));


// var arr=[98,76,876]
// var str=




























// var d=new Date(2003,3,12,4,34,23,876)
// console.log(d);



// d.setDate(12)
// d.setHours(13)
// d.setFullYear(2000)

var d=new Date()

function printDate()
{
    var d=new Date();

}
printDate()


var year=d.getFullYear()
var date=d.getDate()
var month=d.getMonth()
var day=d.getDay()
var hrs=d.getHours()
var min=d.getMinutes()
var sec=d.getSeconds()
var msec=d.getMilliseconds()


// d.setDate(12)
// d.setHours(13)
// d.setFullYear(2000)


var marr=['jan','feb','mar','ape','may','jun','july','aug','sep','oct','nov','dec']
var darr=['sun','mon','tue','wed','thu','fir','sat']
console.log(`${year}/${marr[month]}/${date} day--${darr[day]}`);

if(hrs>12)
{
    hrs=hrs-12
}

console.log(`${hrs}:${min}:${sec}:${msec}`);


document.write(`${hrs}:${min}:${sec}:${msec}<br>`)



setInterval(()=>{
    printDate()
},1000)


console.log(Math.PI);

console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
console.log(Math.ceil(12.01));
console.log(Math.floor(12.9999));
console.log(Math.round(14.4));
console.log(Math.round(14.6));
console.log(Math.random());
console.log(Math.random()*1000);

var random=parseInt(Math.random()*10000)
console.log(random);
console.log(Math.floor(random));

console.log(Math.ceil(random));

console.log(Math.round(random));


// alert("ur otp num is"+random)
// var otp=prompt("enter ur otp")
// var ans=otp==random?alert("otp validated"): alert("otp invalid");


console.log(Math.sqrt(4));
console.log(Math.cbrt(27));
console.log(Math.pow(2,4));

console.log(Math.min(12,4,56,78,9,1));
console.log(Math.max(12,4,56,78,9,1));








