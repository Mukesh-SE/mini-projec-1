const sounds = ['sound-1', 'sound-2', 'sound-3', 'sound-4', 'sound-5']

sounds.forEach(sound => {
   const btn = document.createElement('button');
   btn.classList.add('btn');

   btn.innerText = sound

   btn.addEventListener('click', ()=>{
      document.getElementById(sound).play()
   })

   document.getElementById('buttons').
   appendChild(btn)
});

//stop play click on another button
function stopSong(){
   sounds.forEach(sound =>{
      const song = document.getElementById(sound)

      song.pause()
      song.currentTime = 0;
   })
}

