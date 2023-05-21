
const API_URL = `https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=<api key>&page=1`
const SEARCh_API = `https://api.themoviedb.org/3//search/movie?api_key=<api key>&query=`
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
   const res = await fetch(url)
   const data = await res.json()

   showMovies(data.results)
}

const showMovies = function(movies){ 
   main.innHTML = ''

   movies.forEach(movie => {
      const {title, poster_path, vote_average, overview} = movie

      const movieElement = document.createElement('div')
      movieElement.classList.add('movie')

      movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            
            <div class="movie-info">
               <h3>${title}</h3>
               <span class="${getClassbyRate(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
               <h3>overview</h3>
               <p>
                  ${overview}
               </p>
            </div>
      `

      main.appendChild(movieElement)
   });
}


function getClassbyRate(vote){
   let classN = ''
   if(vote >= 8){
      classN = 'green'
   }
   else if(vote >= 5){
      classN = 'orange'
   }
   else{
      classN = 'red'
   }
   return classN
}

form.addEventListener('submit', (e)=>{
   e.preventDefault()

   const searchTerm = search.value

   if(searchTerm && searchTerm !== ''){
      getMovies(SEARCh_API +  searchTerm)

      search.value = ''
   }
   else{
      window.location.reload()
   }
})