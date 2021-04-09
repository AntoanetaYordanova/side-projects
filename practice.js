function aggregate(start, end, func) {
    for (var result = start, i = start+1; i <= end; i++)
      result = func(result, i);
    return result;
  }
  
  let sum1to10 = aggregate(1, 10, (a, b) => a + b);
  console.log(sum1to10);
  
  let mult1to10 = aggregate(1, 10, (a, b) => a * b);
  console.log(mult1to10);
  
  let digits1to10 = aggregate(1, 10, (a, b) => '' + a + b);console.log(digits1to10);
  