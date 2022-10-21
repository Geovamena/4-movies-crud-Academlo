const router = require('express').Router()

//? Este es el prefijo: /movies

router.get('/movies') //? /movies/
router.post('/movies') //? / movies/

router.get('/movies/:id') //? /movies/:id
router.delete('/movies/:id') //? /movies/:id
router.patch('/movies/:id') //? /movies/:id 
router.put('/movies/:id') //? /movies/:id

module.exports = router