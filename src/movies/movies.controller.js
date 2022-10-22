
const { response } = require('express')
const { UUID } = require('sequelize')
const Movies = require('../models/movies.models')

const getAllMovies = async () => {
    const data = await Movies.findAll() //? traer todas las peliculas
    //? Select * from movies;
    return data
}

// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createMovies = async (data) => {
    const newMovie = Movies.create({
        id: UUID.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })
    //? insert into movies 
    return newMovie
}

createMovies({
    name: 'Pacific Rim',
    genre: 'Action, Scifi',
    duration: 120,
    releaseDate: '2012/10/30'
})
    .then(response => console.log(response))
    .catch(err => console.log(err))

