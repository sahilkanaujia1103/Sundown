// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

let elemC=document.querySelector("#elem-container")
let fixImage=document.querySelector("#fixed-image")


elemC.addEventListener("mouseenter",()=>{
    fixImage.style.display="block"
    
})
elemC.addEventListener("mouseleave",()=>{
    fixImage.style.display="none"
    
})

let elem=document.querySelectorAll(".elem")
elem.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
        let image=element.getAttribute("data-image")
        fixImage.style.backgroundImage=`url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let loader=document.querySelector("#loader")
  setTimeout(()=>{
    loader.style.top="-100%"
  },3000)  