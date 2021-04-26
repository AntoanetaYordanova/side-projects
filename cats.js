function cat(arrInput){
    let cats = [];

    class Cat {
        constructor(catName, catAge){
            this.catName = catName;
            this.catAge = catAge;
        }

         sayMeow(){
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
         }
    }

    for(let currentCat of arrInput){
        let[catName, catAge] = currentCat.split(' ');
        let cat = new Cat(catName, catAge);
        cat.sayMeow();

    }
}

cat(['Mellow 2', 'Tom 5'])