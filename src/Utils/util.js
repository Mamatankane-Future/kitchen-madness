export function randomNumber(lower, higher){
    return Math.floor(Math.random()*(higher-lower+1)) + lower;
}