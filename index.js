let start = 42
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start) * 264;
    return distance;
}

function calculatesFarePrice(start,destination) {
    const distance = distanceTravelledInFeet(start,destination);
    let fare;
    if(distance <= 400) {
        fare = 0;
    }else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 0.02;
    }else if (distance >2000 && distance <2500) {
        fare = 25;
    }else {
        return 'cannot travel that far'
    }
    return fare;
}