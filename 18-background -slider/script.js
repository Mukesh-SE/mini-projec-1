const body = document.querySelector('body')
const slider = document.querySelectorAll('.slider')
const leftBtn = document.getElementById('leftBtn')
const righttBtn = document.getElementById('rightBtn')

let activeSlide = 0

righttBtn.addEventListener('click', ()=>{
   activeSlide++

   if(activeSlide > slider.length-1){
      activeSlide = 0
   }

   setBgToBody()
   setActiveSlide()
})

leftBtn.addEventListener('click', ()=>{
   activeSlide--

   if(activeSlide < 0){
      activeSlide = slider.length-1
   }

   setBgToBody()
   setActiveSlide()
})

setBgToBody()

function setBgToBody(){
   body.style.backgroundImage = slider[activeSlide].style.backgroundImage
}

function setActiveSlide(){
   slider.forEach(slide=>{
      slide.classList.remove('active')
   })

   slider[activeSlide].classList.add('active')
}


