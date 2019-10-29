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
// const keyDown = document.querySelector('window');
// keyDown.addEventListener('keydown',() =>{
//     alert('You pressed a key down!')
// })

//WHEEL
const newBody = document.querySelector('body')
newBody.addEventListener('wheel',()=>{
    newBody.style.backgroundColor='slateblue';
    })

//DBLCLICK
newBody.addEventListener('dblclick',()=>{
    newBody.style.backgroundColor='white';
    alert('You double clicked this page!')
    })

