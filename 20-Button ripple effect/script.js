const button = document.querySelectorAll('.ripple')


button.forEach(btn=>{
   btn.addEventListener('click', function(e){
      const x = e.clientX
      const y = e.clientY

      const btnTop = e.target.offsetTop
      const btnLeft = e.target.offsetLeft

      const xInside = x - btnLeft
      const yInside = y - btnTop

      const cirlce = document.createElement('span')
      cirlce.classList.add('circle')
      cirlce.style.top = yInside + 'px'
      cirlce.style.left = xInside + 'px'

      this.appendChild(cirlce)

   })
})