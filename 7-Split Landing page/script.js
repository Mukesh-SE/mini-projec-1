const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter',()=>{
   container.classList.add('hover-left')
})

// when mouse leave on left side of container
left.addEventListener('mouseleave', ()=>{
   container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', ()=>{
   container.classList.add('hover-right')
})

// when mouse leave on right side of container
right.addEventListener('mouseleave', ()=>{
   container.classList.remove('hover-right')
})
