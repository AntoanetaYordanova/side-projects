function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
   let restaurants = {};
   let input = document.querySelector('#inputs textarea').value;
   input = JSON.parse(input);
   
    input.forEach(restaurant => {
      let [restaurantName, workersInput] = restaurant.split(' - ');
      workersInput = workersInput.split(', ');
      let sum = 0;

      if(!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          workers : [],
          bestSalary : 0,
        };
      }

      workersInput.forEach(worker => {
        let [workerName, workerSalary] = worker.split(' ');
        workerSalary = Number(workerSalary);
        let obj = {
          [workerName] : workerSalary
        }

        restaurants[restaurantName].workers.push(obj);
        sum += workerSalary;

        if(restaurants[restaurantName].bestSalary < workerSalary) {
          restaurants[restaurantName].bestSalary = workerSalary;
        }
  
      })
      
      restaurants[restaurantName].averageSalary = sum / workersInput.length;
    });

    const restaurantsSorted = Object.entries(restaurants) .sort((a, b) => b[1].averageSalary - a[1].averageSalary || a[1].averageSalary - b[1].averageSalary);
    const bestRestaurant = restaurantsSorted[0];
    const bestRestaurantName = bestRestaurant[0];
    const bestRestaurantAverageSalary = bestRestaurant[1].averageSalary;
    const bestRestaurantBestSalary = bestRestaurant[1].bestSalary;

    document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAverageSalary.toFixed(2)} Best Salary: ${bestRestaurantBestSalary.toFixed(2)}`
    
    let bestRestaurantWorkers = bestRestaurant[1].workers;

    bestRestaurantWorkers.forEach(worker => {
      let name = Object.keys(worker)[0];
      document.querySelector('#workers p').textContent += `Name: ${name} With Salary: ${worker[name]} `
    });

  }
}
