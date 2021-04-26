function songs(inputArr){
    let numOfSongs = inputArr.shift();
    let filter = inputArr.pop();
    
    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name; 
            this.time = time;
        }
    }

    for(let currentSong of inputArr){
        let[type, name, time] = currentSong.split('_');
        let song = new Song(type, name, time);
        if(type === filter || filter === 'all'){
            console.log(song.name);
        }
    
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
//     )


songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )