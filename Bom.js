// // console.log(window.history.forward());

// console.log(window.navigator);
// window.navigator.geolocation.getCurrentPosition((x)=>{
//     console.log(x);
// })


// console.log(window.location);
// // location.reload()
// setInterval(()=>{
//     location.reload()
//     location.replace("https://in.images.search.yahoo.com/search/images?p=nature+images&fr=mcafee&type=E211IN714G0&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F443446%2Fpexels-photo-443446.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-forest-glossy-443446.jpg%26fm%3Djpg#id=2&iurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F443446%2Fpexels-photo-443446.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-forest-glossy-443446.jpg%26fm%3Djpg&action=click")
// },3000)

// console.log(window.document);
// document.write("hi")
// console.log(window.document.body);
// console.log(window.document.head);

// console.log(window.document.body);
var h1=document.getElementById("myH1")
console.log(h1);
h1.style.background='yellow'




// var clsElements=document.getElementsByClassName("head")
// console.log(clsElements);
// for(let i=0; i<clsElements.length; i++){
//     clsElements[i].style.background="red";
// }

// console.log(clsElements[0]);
// console.log(Array.isArray(clsElements));
// clsElements.push(98)

// clsElements[0].style.background="red"
// clsElements[1].style.background='green'
// clsElements[2].style.background='yellow'
 
var tags=document.getElementsByTagName("h2")
console.log(tags);


// var lis=document.getElementsByClassName("head")
// console.log(lis);
// for(let i=0;i<lis.length;i++)
// {
//     lis[i].style.background="red"
// }



// var pureArray=Array.from(list);
// console.log(pureArray);

// pureArray.push(234)
// console.log(pureArray);



var t=document.querySelector('#time')
console.log(t);
t.style.background="green"

var aside=document.querySelector(".myaside")
console.log(aside);

var tag=document.querySelector("p")
console.log(tag);
 var multitag=document.querySelectorAll("p")
 console.log(multitag);
//  multitag[0].style.color='red'

 for(let i=0;i<multitag.length;i++)
{
    if(i%2==0)
    {
        multitag[i].style.color='green'
    }
    else{
        multitag[i].style.color='blue'

    }
}




var arr=['red','green','yellow','pink']
var btn=document.querySelector("button")
var num=0
btn.addEventListener('click',()=>{
    if(num>arr.length-1)
    {
        num=0;

    }
    document.body.style.backgroundColor=arr[num]
    console.log('i was clicked');
    num++
})


var btn=document.querySelector("button")
var num=0
btn.addEventListener('click',()=>{
    if(num>arr.length-1)
    {
        num=0;

    }
    document.body.style.backgroundColor=arr[num]
    console.log('i was clicked');
    num++
})




