// Your code goes here
const busImg = document.querySelector('.container .intro img');
busImg.addEventListener('mouseenter',(e)=>{
    busImg.src='https://images.unsplash.com/photo-1464589578935-4a23731e7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    e.stopPropagation();    
   })

busImg.addEventListener('mouseleave',(e)=>{
    busImg.src='img/fun-bus.jpg'
    e.stopPropagation();    
})

//MOUSEENTER AND MOUSELEAVE
const newLetters = document.querySelector('.text-content p');
newLetters.addEventListener('mouseenter',(e)=>{
    newLetters.textContent='DRAG THIS TEXT TO SEE SOMETHING.'
    newLetters.style.color='gold'
    newLetters.style.fontWeight='bold'
    newLetters.style.fontSize='24px'
    e.stopPropagation();    
   })

   newLetters.addEventListener('mouseleave',(e)=>{
    newLetters.textContent='Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.'
    newLetters.style.color='black'
    newLetters.style.fontWeight='normal'
    newLetters.style.fontSize='16px'
    e.stopPropagation();    
})


//KEYDOWN
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown',() =>{
    alert('You pressed a key down!')
})

//WHEEL
const newBody = document.querySelector('body')
const newNav = document.querySelector('.main-navigation')
newBody.addEventListener('wheel',(e)=>{
    newBody.style.backgroundImage="url('img/bird.jpg')";

newNav.style.backgroundColor='pink'
e.stopPropagation();
     })

//DBLCLICK
newBody.addEventListener('dblclick',()=>{
    newBody.style.backgroundColor='white';
    alert('You double clicked this page!')
    })

//RESIZE
window.addEventListener('resize', function(event){
alert('This page was resized!')
let newHeading=document.querySelector('.logo-heading')
newHeading.style.color='red'
newHeading.style.fontWeight='bold'
})

//DRAG
const newText = document.querySelector('.text-content p');
newText.addEventListener("drag", () => {
    newText.style.border = '2px dashed gray';
    newText.style.backgroundColor='hotpink'
});

//LOAD
window.addEventListener('load', function(event){
    alert('Congratulations your page loaded!')
    let newBody=document.querySelector('body')
    newBody.style.backgroundColor='silver'
   
    })

// PREVENT DEFAULT
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink =>{
        navLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();  
        navLink.style.backgroundColor='cyan'
        navLink.style.color='red'
    })
})

//SCROLL
window.addEventListener('scroll', ()=>{
    console.log('You scrolled')
    const footerText = document.querySelector('.footer p')
    footerText.style.fontSize='25px'
    footerText.style.backgroundColor='coral'
})

//COPY
window.addEventListener('copy',()=>{
    alert('YOU COPIED SOMETHING!');
})

//TWEENMAX
TweenMax.to(".btn", 2, {
    y: 30,
    ease: Elastic.easeOut.config(1, 0.3),
    yoyo: true,
    repeat: -1
  });