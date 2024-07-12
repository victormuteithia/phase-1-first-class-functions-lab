// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return () => {
        return fare * 5;
    }
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
