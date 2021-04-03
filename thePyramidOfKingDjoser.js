function thePyramidOfKingDjoser(input1, input2){
    let widthLength = Number(input1);
    let heigth = Number(input2);
    let stoneBlocks = 0;
    let marbleBlocks = 0; 
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let stepCounter = 0;
    let totalHeigth = 0;

    while(widthLength > 0){
        totalHeigth += heigth;
        stepCounter++;
        let totalCurrentBlocks = widthLength * widthLength * heigth;
        let innerBlocks = (widthLength - 2) * (widthLength - 2) * heigth;
        let outsideBlocks = totalCurrentBlocks - innerBlocks;
        if(widthLength < 3){
            goldBlocks += totalCurrentBlocks;
        } else{
            stoneBlocks += innerBlocks;
            if (stepCounter % 5 !== 0) {
                marbleBlocks += outsideBlocks;
            } else {
                lapisBlocks += outsideBlocks;
            }
        }
        widthLength -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeigth)}`);
}

thePyramidOfKingDjoser(11, 0.75)