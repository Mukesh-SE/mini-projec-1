const h = document.getElementsByTagName('h1')

h.innerHTML  = h.innerText
   .split('')
   .map((letter, idx) => {
      `<span>${letter}</span>`
   })
   .join('')
