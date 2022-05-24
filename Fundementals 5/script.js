// Create an object 'user', add properties, change properties, remove properties
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user.name, user.surname);
user.name = "Pete";
console.log(user.name);
delete user.name;
console.log(user.name);

// Write function isEmpty(obj) which returs true if the object has no properties, false otherwise
function isEmpty(obj) {
    if (Object.keys(obj).length != 0) {
        return false;
    } else {
        return true;
    }
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

// Write code to sum up all salaries and store in variable sum
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;

for(key in salaries) {
    sum += salaries[key];
};
console.log(sum);

// Create function multiplyNumeric(obj) that multiplies all numeric property values by 2
function multiplyNumeric(obj) {
    for(key in obj) {
        if (typeof obj[key] === "number") {
            let baseValue = obj[key];
            let newValue = baseValue * 2;
            obj[key] = newValue;
        }
    };
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);