const html = document.querySelector('html')

const mode = document.querySelector('button')
const hours = document.querySelector('.needle.hr')
const minutes = document.querySelector('.min')
const seconds = document.querySelector('.s')
const time = document.querySelector('.time')
const date = document.querySelector('.date')

const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];






mode.addEventListener('click', ()=>{
   html.classList.toggle('dark')
   if(html.classList.contains('dark')){
      mode.innerHTML = "Light Mode"
   }
   else{
      
      mode.innerHTML = "Dark Mode"
   }
})

function setTime(){
   const currentTime = new Date()
   const currentHour = currentTime.getHours()%12;
   const currentMin = currentTime.getMinutes();
   const currentSec = currentTime.getSeconds();

   hours.style.transform = `translate(-50%, -100%) rotate(${scale(currentHour, 0, 11, 0, 360)}deg)`
   minutes.style.transform = `translate(-50%, -100%) rotate(${scale(currentMin, 0, 59, 0, 360)}deg)`
   seconds.style.transform = `translate(-50%, -100%) rotate(${scale(currentSec, 0, 59, 0, 360)}deg)`
   
   time.innerHTML = `${currentHour}:${currentMin}`

}

const scale = (num, in_min, in_max, out_min, out_max,)=>{
   return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

function setDate(){
   const day = daysOfWeek[currentDate.getDay()]
   const month = monthsOfYear[currentDate.getMonth()];
   const formattedDate = currentDate.toLocaleDateString("en-US", {day: "2-digit" })
   date.innerHTML = `${day}, ${month} <span class="circle">${formattedDate}</span>`;
}

setTime() 
setInterval(setTime, 1000)
setDate()