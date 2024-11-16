function isPrime(number) {
    if (number < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Divisible by other numbers, not prime
        }
    }
    return true; // Number is prime
}

function showPrimes(limit) {
    console.log(`Prime numbers up to ${limit}:`);
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i); // Print the prime number
        }
    }
}

// Example: Show prime numbers up to 50
let limit = 50;
showPrimes(limit);
