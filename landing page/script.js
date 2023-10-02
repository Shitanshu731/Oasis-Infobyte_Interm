gsap.to(".imagecontainer", {
    ease: Expo.easeInOut, // Use Expo.easeInOut instead of just Expo.easeInOut
    width: "100%",
    duration: 2,
    stagger: 2,
    z:0
  })
gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger : 2.2,
    top : 0
})
gsap.to(".text h1",{
    delay : 2,
    ease:Expo.easeInOut,
    stagger : 2.2,
    top : "-100%"
})
gsap.to(".header-h1", {
    ease: Expo.easeInOut, // Use Expo.easeInOut instead of just Expo.easeInOut
    y : "100px",
    duration: 2,
    stagger: 2,
    opacity:50
  })
  setTimeout(()=>{

 
  gsap.to(".para",{
    delay : 2,
    ease:Expo.easeInOut,
    stagger : 2.2,
   opacity : 50
   
   
})
},4000)
  setTimeout(()=>{

 
  gsap.to(".hotel",{
    delay : 2,
    ease:Expo.easeInOut,
    stagger : 2.2,
   opacity : 50
   
   
})
},4000)
  setTimeout(()=>{

 
  gsap.to(".star",{
    delay : 2,
    ease:Expo.easeInOut,
    stagger : 2.2,
   opacity : 50
   
   
})
},4000)

const headerh1 = document.querySelector('h1');
const bodyimg= document.querySelector('.body-img');
const para = document.querySelector('.para');
const hotel = document.querySelector('.hotel');
const star= document.querySelector('.star');
const sidebar = document.querySelector('.sidebar'); 
const center = document.querySelector('.center');

 const liList = document.querySelectorAll('.li'); 
headerh1.addEventListener('click', () => {

  sidebar.classList.toggle('sidebar-animate'); 
  hotel.classList.toggle('hotel-animate'); 
  star.classList.toggle('star-animate'); 
  bodyimg.classList.toggle('body-imga'); 
  center.classList.toggle('center-animate'); 
  para.classList.toggle('para-animate'); 
  
  
  liList.forEach((li) => {
    li.classList.toggle('li-animate'); 
  });
});

