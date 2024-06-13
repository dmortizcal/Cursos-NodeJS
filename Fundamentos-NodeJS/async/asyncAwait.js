async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });

}

async function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Bla vla bla bla")
            resolve(nombre)
            //reject("Error mi perro")
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Adios, ', nombre);
            resolve()
        }, 1000);
    })
}

async function main (){
    
    let nombre = await hola('Mario')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log("Terminando el proceso")
}

console.log("Iniciando el proceso...")
main()
console.log("Terminando el proceso")