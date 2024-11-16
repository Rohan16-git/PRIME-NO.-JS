function isPrime(number) {
    if (number < 2) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true; 
}

function FindPrimenoInArray(arr) {
    return arr.filter(isPrime)
}

const numbers = [2,4,6,8,45,36,33,86,56,90,87,23,21,48]
const primes = FindPrimenoInArray(numbers)

console.log("Prime numbers in the Array", primes)            