const name = "Max";
let age = 29;
const hobbies = true;

age = 30;
function summarizeUser(userName, userAge, userHasHobby){
    return('El nombre es ' + userName + ' y su edad ' + userAge + (userHasHobby ? ' si' : ' no') + ' tiene hobbies');
}
console.log(summarizeUser(name, age, hobbies));