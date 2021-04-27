function movies(inputArr) {
  let objectsArr = [];

  for (let movie of inputArr) {
    let tempArr = movie.split(" ");
    if (tempArr.indexOf("addMovie") !== -1) {
      tempArr.shift();
      let name = tempArr.join(" ");
      let movieObj = {
        name: name,
      };
      objectsArr.push(movieObj);
    } else {
      if (tempArr.indexOf("directedBy") !== -1) {
        let index = tempArr.indexOf("directedBy");
        let movieName = tempArr.slice(0, index).join(" ");
        let directorName = tempArr.splice(index + 1).join(" ");

        let foundMovie = objectsArr.find((movie) => movie.name === movieName);
        
        if(foundMovie === undefined){
            continue;
        }

        foundMovie.director = directorName;

      } else if(tempArr.indexOf("onDate") !== -1) {
        let date = tempArr.pop();
        tempArr.pop();
        let movieName = tempArr.join(' ');
        let foundMovie = objectsArr.find((movie) => movie.name === movieName);

        if(foundMovie === undefined){
            continue;
        }

        foundMovie.date = date;

      }
    }
  }
  
  for(let movie of objectsArr){
      let tempArr = Object.keys(movie);

      if(tempArr.includes('name' && 'director' && 'date')){
          let toJSON = JSON.stringify(movie);
          console.log(toJSON);
      }
  }

}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
