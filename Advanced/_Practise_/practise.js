const myObj = {
    name : 'Peter',
    age : 23
}

function myFunc() {
    console.log(this.name);
    console.log(this.age);
}

const giveData = myFunc.bind(myObj);

giveData();