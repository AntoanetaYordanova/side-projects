function flightSchedule(inputArr) {
    let flightsArr = inputArr[0];
    let changeFlightsArr = inputArr[1];
    let statusCheck = inputArr[2];
    let flights = [];

    class Flight{
        constructor(destinantion){
            this.Destinantion = destinantion;
            this.Status = 'Ready to fly';
        }
    }

//     for(flight of flightsArr){
//         let [name, destinantion] = flight.split(' ');
//         let flight = new Flight(destinantion);
        
       



// }
}


flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)