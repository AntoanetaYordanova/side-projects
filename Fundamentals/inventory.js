function inventory(inputArr) {
  let heroesObjArr = [];

  class Hero {
    constructor(Hero, level, items) {
      this.Hero = Hero;
      this.level = level;
      this.items = items;
    }
  }

  for (let currentHero of inputArr) {
    let heroArr = currentHero.split(" / ");
    let heroName = heroArr.shift();
    let heroLevel = Number(heroArr.shift());
    let heroItems = heroArr.join().split(", ").sort().join(", ");
    let hero = new Hero(heroName, heroLevel, heroItems);
    heroesObjArr.push(hero);
  }

  let heroesLevelOrder = heroesObjArr.slice(0,1);
  
  while(heroesLevelOrder.length !== heroesObjArr.length){
      for(let currentHero of heroesObjArr){
          let compareHeroLevel = heroesLevelOrder[heroesLevelOrder.length -1];
          if(compareHeroLevel.level < currentHero.level){
            heroesLevelOrder.push(currentHero);
          } else if(compareHeroLevel.level > currentHero.level){
            heroesLevelOrder.unshift(currentHero);
          }
      }
  }
  let counter = 1;
  for(let print of heroesLevelOrder){
    if(counter === 1){
        console.log(`Hero: ${print.Hero}`);
        counter++;
    } 
    if( counter === 2){
        console.log(`level => ${print.level}`);
        counter++;
    }
    if (counter === 3){
        console.log(`items => ${print.items}`);
        counter = 1;
    }
  }
  
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
