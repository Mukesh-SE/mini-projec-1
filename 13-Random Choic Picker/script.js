const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')


textArea.focus()

textArea.addEventListener('keyup', (e)=>{
   createTags(e.target.value)

   if(e.key === 'Enter'){
      setTimeout(()=>{
         e.target.value = ''
      }, 10)
   }

   randomSelect()
})

function createTags(input){
   const tag = input.split(',').filter(tag=>tag.trim() !== '').map(tag => tag.trim())

   tagsEl.innerHTML = ''

   tag.forEach(tag => {
      const tagEl = document.createElement('span')  
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
   });
}


function randomSelect(){
   const times = 30

   const interval = setInterval(()=>{
      const randomTag = pickRandomTag()

      highlight(randomTag)
      
      setTimeout(()=>{
         unhighlight(randomTag)
      },100)
   }, 100)
}

function pickRandomTag(){
   const tags = document.querySelectorAll('.tag')
   return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(){
   tags.classList.add('highlight')
}

function unhighlight(){
   tags.classList.remove('highlight ')
}