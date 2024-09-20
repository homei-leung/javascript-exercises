const fibonacci = function(n) {
    if (n < 0) {
        //If n is less than 0, return "OOPS"
        return "OOPS";
    } else {
        // Create fibonacci sequence, up to n
        let sequence = [0, 1];
        for (let i = 1; i <= n; i++){
            let nextNumber = sequence[i] + sequence[i-1];
            sequence.push(nextNumber);
        }
        // return n
        return sequence[n];
    }
};

// Do not edit below this line
module.exports = fibonacci;
