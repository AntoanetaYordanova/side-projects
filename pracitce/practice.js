function buildSandwich(firstIngredient) {
    return (secondIngrediendt) => {
        return (thirdIngredient) => {
            return `${firstIngredient} ${secondIngrediendt} ${thirdIngredient}`;
        }
    }
}

const mySandwitch = buildSandwich('Bread')('Tomato')

console.log(mySandwitch('Cheese'));