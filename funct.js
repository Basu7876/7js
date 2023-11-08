 


// named function
//  function mul(num1,num2)
//  {
//      let p=num1
//      let q=num2
//      let r=p*q
//      return r
 
//  }
//  console.log(mul(10,20));
// // 1.IIFE 
//  (function()
// {
//     console.log( "im a life");
// })()

// // FIRST CLASS FUNCTION

// var fun=function()
// {
//     let a=10
//     let b=20
//     let c=a+b
//     console.log(c);
// }
// fun()

// // expression function

//  function mul(num1,num2)
// {
//     let p=num1
//     let q=num2
//     let r=p*q
//     return r

// }
// var multi=mul(10,20)+50;
// console.log(multi);

// // IIFE 

// (function(num)
// {
//     let n=num
//     for( let i=1;i<=5;i++)
//     {
//         console.log(n+"*"+i+"="+i*n);
//     }
// })(6)

//  var x=function()
// {
//     console.log( "im a life");
// }
// x()


// var glo='global'
// function test()
// {
//     let a=10
//     let b=20
//     let c=a+b
//     console.log(c);
// }
// var end=100


// nested function
 
// function add()
// {
//     let a=10;
//     let b=10;
//     let c=a+b;
//     console.log(c);
//     function sub()
//     {
//         let a1=10;
//         let b1=10;
//         let c1=a1-b1;
//         console.log(c1);
//     }
//  sub()
// }
// add()

// function add()
// {
//     let a=10;
//     let b=10;
//     let c=a+b;
//     console.log(c);
//     function sub()
//     {
//         let a1=10;
//         let b1=10;
//         let c1=a1-b1;
//         console.log(c1);
//     }
//  sub()
// }
// add()

// call back function 

function genral( cb,inf)
{
    
    for(let i=0;i<=10;i++)
    {
       
        if(cb(i))
        {
            console.log(inf+i);
        }
        
    }
}
genral(checkOdd,"odd")
genral(checkeven,"evven")



function checkOdd(x)
{
    // var num=x
    // if(num%2!=0)
    // {
    //     console.log(x+"odd");
    //     return true
    // }
    return x%2!=0
}

function checkeven(x)
{
    // var num=x
    // if(num%2!=0)
    // {
    //     console.log(x+"odd");
    //     return true
    // }
    return x%2==0
}


// nested function 

// function parent()
// {
//     var a=78
//     console.log(a);
//     console.log("i am parent");
//     function child()
//         {
//             console.log("i am child");
//             function grandchild()
//             {
//                 console.log("i am grand child");

//             }
//           return grandchild
         
//         }
//         return child
    
// }
// parent()()()


// function grand()
// {
//     let x=10;
//     console.log(x);
//     function paa()
//      {
//         let b=234
//         console.log(b);
//         function son()
//             {
//                console.log(x);
//                console.log(b);
//             }
//         return son
        
//     }
//     return paa
// }
// grand()()()


// call back function
function demo(num)
{
    console.log("hiii");
    console.log("hello gandu malli");

}

function first()
{
    let a=10;
    // console.log(a);
    demo("first")
}

function second()
{
    let b=20
    console.log(b);
    demo("gandu")
}
//  first()
second()







