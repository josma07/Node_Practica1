const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();


const hobbies1 =['Sports','Cooking'];
//for (let hobby of hobbies){
//    console.log(hobby);
//}

//hobbies.map(); transforma el array
console.log(hobbies.map(hobby => { // Arrow function
    return 'Hobby: ' + hobby;
}))
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));


const hobbies2 = ['Sports','Cooking'];
hobbies.push('Programming');
console.log(hobbies);


const hobbies = ['Sports','Cooking'];
const hobbiesCopiados = [...hobbies, 'Programming'];

const persona = {nombre: 'Max', edad: 29};
const personaCopiada = {...persona,};


const toArray = (...args) => {
    return args;
};

toArray(1,2,3,4);