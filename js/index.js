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
//KEYDOWN
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown',() =>{
    alert('You pressed a key down!')
})

//WHEEL-works but commented out, annoying result
const newBody = document.querySelector('body')
// newBody.addEventListener('wheel',()=>{
//     newBody.style.backgroundColor='slateblue';
//     alert('You used a mousewheel! press doubleclick to restore default color.');
//      })

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

