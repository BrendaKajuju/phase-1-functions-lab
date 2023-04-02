// Code your solution in this file!
//returns the number of blocks given a value
//Scuber Headquarters is in 42nd street, let's define it as a constant variable

function distanceFromHqInBlocks(pickupLocation) {
    const locationHq = 42
    return Math.abs(pickupLocation - locationHq)
}
// Next, lets convert distance on blocks into feet(each block is 264 feet)
// Major value we are looking to get is pickup location  
// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// the return value of distanceFromHqInBlocks can then be used to calculate feet

function distanceFromHqInFeet(pickupLocation) {
    const feet = (distanceFromHqInBlocks(pickupLocation)) * 264;
    return feet
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
}
// Next, we calculate number of feet a passenger travels  
function distanceTravelledInFeet(start, destination) {
const feet = Math.abs(destination - start)
return feet * 264
}
// Calculate fare price with the conditions set 
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      fare = 25;
    } else if (distance >= 2500) {
      return 'cannot travel that far';
    }
    return fare;
  }
  
  
  
  
  
  