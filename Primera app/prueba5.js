const persona = {name:'Max', age:29};

// Extraccion en parametros
const printName = ({ name }) => {
    console.log(name); //'Max'
};

//Extraccion directa en declaracion
const { name, age } = persona;
printName(persona);
console.log(name, age); // 'Max 29

//Criterio extraccion
const hobbies = ['Sports','Cooking'];

// hobby1 toma el indice 0, hobby2 el indice 1
const [hobby1,, hobby2] = hobbies;

console.log(hobby1);// Sports
console.log(hobby2);// Cooking