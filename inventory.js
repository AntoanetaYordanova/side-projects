function inventory(inputArr){
    let heroesObjArr = [];

    class Hero {
        constructor(Hero, level, items){
            this.Hero = Hero;
            this.level = level;
            this.items = items;
        }

        print(){
            console.log(`Hero: ${this.Hero}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);  
        }
    }

    for(let currentHero of inputArr){
        let heroArr = currentHero.split('/');
        let heroName = heroArr.shift();
        let level = heroArr.shift();
        let items = heroArr.join();
        let hero = new Hero(heroName, level, items);
        heroesObjArr.push(hero);

    }

    for(let currentHero of heroesObjArr){
        currentHero.print()
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )