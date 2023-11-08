// var arr=[]
// console.log(arr);
// console.log(typeof arr);

// arr[0]='basava'
// arr[1]=12
// arr[2]=true

// // console.log(arr[0]);

// // var a=['sanju',12,undefined,null,13n,function(){console.log('im function')},['a','b']]
// // console.log(a);
// // a[5]()

// // for(let i=0;i<a.length;i++)
// // {
// //     console.log(a[i]);
// // }

// // console.log(a[4]);
// // // console.log(a[4][1]); dout

// // var c=[10,20,30,40]
// // // for(let i=0;i<c.length;i++)
// // // {
// // //     console.log(c[i]);
// // // }

// // console.log(c);

// // c[2]=25
// // c[5]='hello'

// // console.log(c[4]);

// // c.push(45,56,78)
// // c.pop()
// // c.unshift(1,2,3,4,5)
// // c.shift()

// // console.log(c.length);

// // var ans=[]
// // for(var i=1;i<3;i++)
// // {
// //     ans.push(c[i])
// //     console.log(ans);
// // }

// // console.log(c.slice(0));

// // console.log(c.slice(6));

// // console.log(c.slice(2.6));


// // console.log(c.splice(1,2,3456,4567));




// function pow(b,e)
// {
//     var ans=1
//     while (e!=0)
//     {
//         ans=ans*b
//         e--
//     }
//     return ans
// }



// // foreach in arry 

//  var arr=[12,14,76,56,54,98,35,40]

// var forans=arr.forEach((el,inde,arr)=>{
//      pow(inde,2)
// })
// console.log(forans);


// // map in arry
// var ans=arr.map((el,inde,arr)=>{
//     return pow(inde,2)
// })

// console.log(ans);

// //  filter in array
// var ansfillter=arr.filter((el,inde,arr)=>{
//     return el>18
// })
// console.log(ansfillter);

// var ansmap=ansfillter.map((el,inde,arr)=>{
//     if(el>60)
//     {
//         return 2000
//     }
//     else{
//         return 1000
//     }
// })
// console.log(ansmap);

// //  reduce in arry
// var ansreduce=ansmap.reduce((acc,el,inde,arr)=>{

//  console.log(acc,el,inde);
//  return acc+el
// },0)
// console.log(ansreduce);


// var ansreduce=arr.reduce((acc,el,inde,arr)=>{

//     console.log(acc,el,inde);
//     return acc+el
//    },0)
//    console.log(ansreduce);

//     arr.forEach((el,inde,arr)=>{
//     console.log(el,inde,arr);
     
// })


// find method array

  var arr=[76,98,54,980]
 var ans=arr.find((el,ind,arr)=>{
     return el==98;
 })

 console.log(ans);

//  find index in array

var ans1=arr.findIndex((ell,inde,arr)=>{
    return ell==54
})
console.log(ans1);



var ans2=arr.every((el,ind,arr)=>{
    return el%2==0

})
console.log(ans2);

var ans3=arr.some((el,ind,arr)=>{
    return el%2==0

})

console.log(ans3);



