
// ● / Function that add a new course score and return the new user object (dynamic
// argument)
// ● // Function that add a new role and check if his age is under 18 add status:
// "veryyoung" to that object and return the object
// ●
// ● // Convert this object to array and after that add (fatherName: "ali") and then convert
// it to object
user = { 
    id: 6, 
    name: "Hossein", 
    lastName: "Zenderoh", 
    roles: ["student", "admin"], 
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
    };
    

// ● / Function that add a new course score and return the new user object (dynamic
// argument)

let addDetail = function(key,value){
    let newScores = user.scores;
    newScores[key]= value;
    return newScores;
}
console.log(addDetail('art',20));



// ● // Function that add a new role and check if his age is under 18 add status:
// "veryyoung" to that object and return the object

let addRole = function(roles,...value){
    if(user.age < 18 ){
        user.status = 'veryyoung';
        return user;
    }
    else 
        return (user[roles] = [...user[roles],...value]);
    
}
console.log(addRole('roles','artist'));


// ● // Convert this object to array and after that add (fatherName: "ali") and then convert
// it to object

function convertToArr(user, key, value){
    user = Object.entries(user);
    user .push([key],[value]);
    return Object.fromEntries(user);
}
console.log(convertToArr(user, "fatherName", "ali"));