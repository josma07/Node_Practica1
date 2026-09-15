var name = "Max";
var age = 29;
var hobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return('El nombre es ' + userName + ' y su edad ' + userAge + (userHasHobby ? ' si' : ' no') + ' tiene hobbies');
}
console.log(summarizeUser(name, age, hobbies));