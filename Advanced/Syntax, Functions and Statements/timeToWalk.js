function timeToWalk(steps, stepMeters, kmPerHour) {
    let mPerHour = kmPerHour * 1000;
    let totalMeters = steps * stepMeters;
    let hours = totalMeters / mPerHour;
    let add = Math.floor(totalMeters / 500) / 60;
    hours += add;
    console.log(hours);
   
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)