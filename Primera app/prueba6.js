// Definicion manual de una promesa
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('¡Datos recibidos!')
        },1500);
    });
};

// Consumo y encadenamiento lineal con .then()
setTimeout(() => {
    console.log('Timer completado');

    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
},2000);