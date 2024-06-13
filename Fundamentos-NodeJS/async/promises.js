function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Bla vla bla bla")
            //resolve(nombre)
            reject("Error mi perro")
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Adios, ', nombre);
            resolve()
        }, 1000);
    })
}

console.log("Iniciando el proceso...")
hola('Mario')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)    
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso.")
    })
    .catch(err =>{
        console.log("Ha habido un error")
        console.log(err)
    })