function employees(inputArr){
    let allEmployess = [];
    class Employees {
        constructor(name, personalNum){
            this.name = name;
            this.personalNum = personalNum;
        }

        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
        }
    }

    for(let currentEmployee of inputArr){
        let nameLength = currentEmployee.length;
        let employee = new Employees(currentEmployee, nameLength);
        allEmployess.push(employee);
    }

    allEmployess.forEach(element => element.print())
  
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )