const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true }
]

const notWatchedMovies = movies.filter(movie => !movie.watched)
const movies8OrHigher = movies.filter(movie => movie.rating >= 8)
const searchMovieByCategpry = category => movies.filter(movie => movie.category === category).map(movie => movie.title)

console.log(`
    Filmy nieobejrzane: ${notWatchedMovies.map(movie => movie.title).join(", ")}
    Filmy z oceną 8 lub wyższą: ${movies8OrHigher.map(movie => movie.title).join(", ")}
    Filmy w kategorii "sci-fi": ${searchMovieByCategpry("sci-fi").join(", ")}    
`)