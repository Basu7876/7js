//  var div=document.querySelector('aside');
//  console.log(div);

//  console.log(div.innerText);
//  console.log(div.innerHTML);
//  console.log(div.textContent);
 
 
//  var main=document.querySelector('main')
//  main.innerText="hello"
//  main.innerText="hello good night"

// //  main.innerText=`<h3> hello</h3>`


// var ol1=document.createElement("p")
// console.log(ol1);
// ol1.innerText='good night'
//  document.body.appendChild(ol1)
 
 
 
 
 
 
 
//  var ol=document.createElement("ol")
//  console.log(ol);
//  var l1=document.createElement('li')
//  var l2=document.createElement('li')
//  var l3=document.createElement('li')
//  var l4=document.createElement('li')
//  var l5=document.createElement('li')
//  l1.innerText='hiiiiii'
//  console.log(l1);
//  l2.innerText='hiiiiii hiii'
//  l3.innerText='helloooooo'
//  l4.innerText='hiiiiii helloooo'
//  l5.innerText='movvvvvvve'
//  document.body.appendChild(ol)
// //  ol.appendChild(l1)
// //  ol.appendChild(l2)
// //  ol.appendChild(l3)
// //  ol.appendChild(l4)
// //  ol.appendChild(l5)

// ol.append(l1,l2,l3,l4,l5)

// function table()
// {



// var tab=document.createElement('table')
// document.body.appendChild(tab)

// console.log(tab);
//  var t0=document.createElement('tr')
//  var t01=document.createElement('td')
//  t01.style.border='solid'


//  t01.colSpan='4'
//  t01.innerText='table'
//  tab.appendChild(t0)
// t0.append(t01)
// var t1=document.createElement('tr')
// // document.body.appendChild(t1)
// console.log(t1);
// var td1=document.createElement('td')
// td1.style.border='solid'
// var td2=document.createElement('td')
// td2.style.border='solid'
// var td3=document.createElement('td')
// td3.style.border='solid'
// var td4=document.createElement('td')
// td4.style.border='solid'
// // document.body.appendChild(td1)
// console.log(td1);
// // tab.style.border=

// tab.appendChild(t1)
// // t1.appendChild( td1)
// td1.innerText='1'
// td2.innerText='2'
// td3.innerText='3'
// td4.innerText='4'
// t1.append(td1,td2,td3,td4)




// var t2=document.createElement('tr')
// // document.body.appendChild(t1)
// console.log(t2);
// var tdd1=document.createElement('td')
// var tdd2=document.createElement('td')
// var tdd3=document.createElement('td')
// var tdd4=document.createElement('td')
// // document.body.appendChild(td1)

// tdd1.style.border='solid'
// tdd2.style.border='solid'
// tdd3.style.border='solid'
// tdd4.style.border='solid'
// console.log(tdd1);
// // tab.style.border=

// tab.appendChild(t2)
// // t1.appendChild( td1)
// tdd1.innerText='5'
// tdd2.innerText='6'
// tdd3.innerText='7'
// tdd4.innerText='8'
// t2.append(tdd1,tdd2,tdd3,tdd4)


// var t3=document.createElement('tr')
// // document.body.appendChild(t1)
// console.log(t3);
// var tddd1=document.createElement('td')
// var tddd2=document.createElement('td')
// var tddd3=document.createElement('td')
// var tddd4=document.createElement('td')
// // document.body.appendChild(td1)
// console.log(tddd1);
// tddd1.style.border='solid'
// tddd2.style.border='solid'
// tddd3.style.border='solid'
// tddd4.style.border='solid'

// tab.appendChild(t3)
// // t1.appendChild( td1)
// tddd1.innerText='9'
// tddd2.innerText='10'
// tddd3.innerText='11'
// tddd4.innerText='12'
// t3.append(tddd1,tddd2,tddd3,tddd4)




// var t4=document.createElement('tr')
// // document.body.appendChild(t1)
// console.log(t4);
// var t21=document.createElement('td')
// var t22=document.createElement('td')
// var t23=document.createElement('td')
// var t24=document.createElement('td')
// // document.body.appendChild(td1)
// console.log(t4);

// t21.style.border='solid'
// t22.style.border='solid'
// t23.style.border='solid'
// t24.style.border='solid'

// tab.appendChild(t4)
// // t1.appendChild( td1)
// t21.innerText='13'
// t22.innerText='14'
// t23.innerText='15'
// t24.innerText='16'
// t4.append(t21,t22,t23,t24)

// tab.style.textAlign='center'
// tab.style.border='2px solid black'
//  tab.style.backgroundColor='yellow'

//  tab.style.padding='7px'
// }

// 06/11/2023

//  var btn=document.querySelector('button')
//  var aside=document.querySelector('aside')
//  var name1=document.querySelector('#name1')
//  var num1=document.querySelector('#num')
//  var tab=document.querySelector('table')

//  var num=1001
// //  btn.addEventListener('click',()=>{
// //     var namVal=name1.value 
// //     var numVal=num1.value 
// //     console.log(numVal,namVal);
// //     num++
// //     var tr=document.createElement('tr')
// //     var td1=document.createElement('td')
// //     var td2=document.createElement('td')
// //     var td3=document.createElement('td')

// //     tab.append(tr)
// //     tr.append(td1,td2,td3)
// //     td1.innerText=num;
// //     td2.innerText=namVal;
// //     td3.innerText=numVal;

// //  })



//  btn.addEventListener('click',()=>{
//     var namVal=name1.value
//     var numVal=num1.value
//     console.log(numVal,namVal);
//     num++
//     tab.innerHTML+=` <tr>
//     <td>${num}</td>
//     <td>${namVal}</td>
//     <td>${numVal}</td>
//     </tr>`
//  })

// 07/11/2023

// var btn=document.querySelector("button")
// btn.addEventListener("click", ()=>{
//    genrateRandom()
// })
function genrateRandom()
{
   var num='#'
   for(let i=0;i<6;i++)
   {
      num=num+parseInt(Math.random()*10)
   }
   // document.body.style.background=num
   return num
}
 console.log(genrateRandom());
// console.log(parseInt(Math.random()*10));

// *****************task*****************************

var btn=document.querySelector('button')
var inp=document.querySelector('input')
var aside=document.querySelector('aside')

btn.addEventListener('click',()=>{
   var ivalue=inp.value;
   console.log(ivalue);
   for(let i=0;i<ivalue;i++)
   {
      var div=document.createElement('div')
      div.style.height='100px'
      div.style.width='100px'
      div.style.border="2px solid red"
      var bgVal=genrateRandom()
      div.style.background=bgVal
      div.innerText=bgVal
      aside.append(div)
   }

})
