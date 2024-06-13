
function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asícnrona');
            cb(err);
        }
    })
}

try {
    seRompeAsincrona(function (err) {
        console.log ('Error: ' + err.message)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}



/*try{
    otraFuncion()
}catch(err){
    console.log("Se rompiooooo: " + err)
}*/

console.log('esto de aqui está al final');