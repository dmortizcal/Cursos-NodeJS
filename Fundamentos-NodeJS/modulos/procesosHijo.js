const { exec, spawn } = require('child_process');

//Ejecuto un proceso en este caso el directorio
/*exec('dir', (err, stdout, sterr)=>{
     if(err) {
        console.log(err)
        return false
     }

     console.log(stdout)
})*/


//Ejecuto un proceso de otro archivo
/*exec('node modulos/consola.js', (err, stdout, sterr) => {
     if (err) {
         console.error(err);
         return false;
     }

     console.log(stdout);
 })*/

/*let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString())
});

proceso.on('exit', function() {
    console.log('el proeso terminó');
    console.log(proceso.killed)
})*/