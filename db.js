const Sequelize = require('sequelize');
const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const movieModel = require('./models/movie');
const movie = require('./models/movie');

/*  
    ELEMENTOS PARA LA CONEXIÓN:

    1) NOMBRE DE LA BASE DE DATOS
    2) USUARIO
    3) CONTRASEÑA
    4) OBJETO DE CONFIGURACIÓN DEL ORM
*/


//sequelize el orm tiene de  requisito que ya exista la base de datos.
                                //nombre bd, usuario, contraseña
const sequelize = new Sequelize('video-club','root','abcd1234',{
    host: '127.0.0.1',
    dialect: 'mysql'
});


const Director = directorModel(sequelize,Sequelize);
const Genre = genreModel(sequelize,Sequelize);
const Movie = movieModel(sequelize,Sequelize);

//un genero puede tener muchas películas
Genre.hasMany(Movie, {as:'movies'});

//una película tiene un género
Movie.belongsTo(Genre,{as: 'genre'});


//un director puede tener muchas películas
Director.hasMany(Movie, {as: 'movies'});

//una película tiene un director

Movie.belongsTo(Director, {as: 'director'});


//sync lo que hace es sincronisa el modelo a la base  de datos,
sequelize.sync({
    force:true //el force elimina lo que está y lo vuelve a construir de acuerdo al modelo, se usa al inicio del proyecto
                //pero ya en producción se usan migraciones.
}).then(()=>{
    console.log('Base de datos actualizada.');
});

module.exports = {Director,Genre,Movie};