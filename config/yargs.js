const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true
    }
}

const solo = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', solo)
    .command('actualizar', 'Actualiza el esta completo de una tarea', opts)
    .command('borrar', 'Borra una tarea, independiende de su estado', solo)
    .help()
    .argv;

module.exports = {
    argv
}