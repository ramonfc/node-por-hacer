const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'crear una tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el elemento completado', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar un elemento', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}