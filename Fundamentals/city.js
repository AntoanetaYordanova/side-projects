function city(obj) {
  let keyArr = Object.keys(obj);

  for (let key of keyArr) {
    let value = obj[key];
    console.log(`${key} -> ${value}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
