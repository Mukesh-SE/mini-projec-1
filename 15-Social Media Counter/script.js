const counter = document.querySelectorAll('.counter')

document.addEventListener("DOMContentLoaded", function(){
   counter.forEach(element => {
      element.innerText = "0"

      const updateCounter =()=>{
         const target = Number(element.getAttribute("data-value"))
         const incr = element.innerText;
         const increment = target/1000

         if(incr < target){
            element.innerText = `${Math.ceil(incr + increment)}`
            setTimeout(updateCounter, 30)
         }
         else{
            element.innerText = target
         }
      }
      updateCounter()
   });
})





function count(){
   for(let i = 0; i < counter.length; i++){
      counter[i].innerHTML = counter[i].dataset.value
   }
}