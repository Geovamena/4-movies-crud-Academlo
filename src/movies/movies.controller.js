
const uuid  = require("uuid");
const Movies = require("../models/movies.models");

const getAllMovies = async () => {
    const data = await Movies.findAll(); //? traer todas las peliculas
    //? Select * from movies;
    return data;
};

// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createMovie = async (data) => {
    const newMovie = Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate,
    });
    return newMovie
};

createMovie({
    name: "Pacific Rim",
    genre: "Action, Scifi",
    duration: 120,
    releaseDate: "2012/10/30",
})
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

const getMovieById = async (id) => {
    const data = await Movies.findOne({
        where: {
            id,
        }
    })
    //? Select * from movies where id = id;
    return data
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
}