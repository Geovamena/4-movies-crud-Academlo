const router = require('express').Router()

const moviesServices = require('./movies.services')


//? Este es el prefijo: /movies


router.get('/', moviesServices.getAllMovies) //? /movies/
router.post('/', moviesServices.postMovies) //? / movies/

router.get('/:id', moviesServices.getMovieById) //? /movies/:id
// router.delete('/movies/:id') //? /movies/:id
// router.patch('/movies/:id') //? /movies/:id 
// router.put('/movies/:id') //? /movies/:id

module.exports = router 