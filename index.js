
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return Math.abs((someValue - 42) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    if ((Math.abs(start - destination) * 264) - 400 <= 0) {
        return 0; } 
    else if ((Math.abs(start - destination) * 264) > 2500) {
        return `cannot travel that far`; }
    else if ((Math.abs(start - destination) *264) > 2000) {
        return 25
    }
    else {
        return ((Math.abs(start - destination) * 264) - 400) * .02;
    }
    }

        