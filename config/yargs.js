const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hasta donde llega la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .check((argv, options) => {
                    if ( isNaN( argv.b )) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports = argv


// ESTO SE HACIA ANTIGUAMENTE AHORA NODE TRAE UN PAQUETE QUE LO HACE POR NOSOTROS YARGS
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
