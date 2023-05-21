const smallCups = document.querySelectorAll('.cup-small')
const litters= document.getElementById('liters')
const percent = document.getElementById('precentage')
const remained = document.getElementById("remained")


updateBidCups()

smallCups.forEach((cup, idx) => {
   cup.addEventListener('click', ()=> highlightCups(idx))
})

const highlightCups = function(idx){

   if((smallCups[idx].classList.contains('full')) && 
      (!smallCups[idx].nextElementSibling.classList.contains('full'))){
         idx--
      }

   smallCups.forEach((cup, idx2)=>{
      if(idx2 <= idx){
         cup.classList.add('full')
      }
      else{
         cup.classList.remove('full')
      }
   })

   updateBidCups()
}

function updateBidCups(){
   const fullCup = document.querySelectorAll('.cup-small.full').length
   const totalCups = smallCups.length;

   if(fullCup === 0){
      percent.style.visibility = 'hidden';
      percent.style.height = 0;

   }
   else{
      percent.style.visibility = 'visible'
      percent.style.height = `${fullCup/totalCups * 300}px`
      percent.innerText = `${fullCup/totalCups * 100}%`
      percent.style.color = 'white'
   }

   if(fullCup === totalCups){
      remained.style.visibility = 'hidden'
      remained.style.height = 0
   }
   else{
      remained.style.visibility = 'visible'
      litters.innerText = `${2-(250 * fullCup / 1000)}L`
   }
}