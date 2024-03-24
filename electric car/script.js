let x1=0
let x2=0
arrowR=document.querySelectorAll(".arrow_right")
arrowL=document.querySelectorAll(".arrow_left")
function move_right() {
    // alert("hello")
    arrowL[0].style.display="block"
    images=document.querySelector(".images")
    x1+=840
    if ( x1>4200 ) x1=4200
    images.style.transform="translateX("+x1*-1+"px)"
    if ( x1==4200 ) {
    arrowR[0].style.display="none"
    arrowL[0].style.display="block"

    }
}
function move_left() {
    // alert("hello")
    arrowR[0].style.display="block"
    images=document.querySelector(".images")
    x1-=840
    if ( x1<0 ) x1=0
    images.style.transform="translateX("+x1*-1+"px)"
    if ( x1==0 ) {
    arrowL[0].style.display="none"
    arrowR[0].style.display="block"
    }
 }
 function move_right2() {
    // alert("hello")
    arrowL[1].style.display="block"
    images=document.querySelectorAll(".images")
    x2+=840
    if ( x2>4200 ) x2=4200
    images[1].style.transform="translateX("+x2*-1+"px)"
    if ( x2==4200 ) {
    arrowR[1].style.display="none"
    arrowL[1].style.display="block"

    }
}
function move_left2() {
    // alert("hello")
    arrowR[1].style.display="block"
    images=document.querySelectorAll(".images")
    x2-=840
    if ( x2<0 ) x2=0
    images[1].style.transform="translateX("+x2*-1+"px)"
    if ( x2==0 ) {
    arrowL[1].style.display="none"
    arrowR[1].style.display="block"
    }
}
function burger() {
//    alert("hello")
   nav=document.querySelector("nav")
   if(getComputedStyle(nav, null).display=="none"){
   nav.style.display="flex"
   nav.style.position="absolute"
   nav.style.top="80px"
   nav.style.left="15px"}
   else
   nav.style.display="none"
}