function convertToJson(firstName, lastName, hair){
    let obj = {
        firstName,
        lastName,
        hair
    };

    let json = JSON.stringify(obj);

    console.log(json);
}

convertToJson('George','Jones','Brown')