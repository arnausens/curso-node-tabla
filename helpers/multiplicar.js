const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async( base = 5, listar = false, hasta = 10 ) => {

    try {
    
        let salida = "";
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            let resultado = i * base;
            salida += (`${base} x ${i} = ${resultado}\n`);
            consola += (`${base} x ${i} = ${colors.green(resultado)}\n`);
        }
        
        if ( listar ) {
            console.log('==================='.cyan);
            console.log('    Tabla del'.cyan , colors.blue(base));
            console.log('==================='.cyan);
            console.log(consola);
        }
        
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return(`tabla-${ base }.txt`)
        
    } catch (err) {
        throw err;
    }
}

module.exports =  {
    crearArchivoTabla
}
