class Laptop{
    constructor(info, quality){
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.price = 800 -

    }

    turnOn(){
        this.isOn = true;
        this.quality--;
    }

    turnOff(){
        this.isOn = false;
        this.quality--;
    }

    showInfo(){
        let infoJSON = JSON.stringify(this.info);
        console.log(infoJSON);
    }
}

