function hamburgerMenu(){
  var menu = document.querySelector("nav svg");
var close = document.querySelector(".cross")
menu.addEventListener("click",function(){
  gsap.to(".blank",{
    display:"block",
  })
})
close.addEventListener("click",function(){
  gsap.to(".blank",{
    display:"none",
  })
})
}
hamburgerMenu()
// hamburger menu end here

gsap.to(".chicken-img",{
  rotate:20,
  repeat:-1,
  yoyo:true,
  duration:3
})


