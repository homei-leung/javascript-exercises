const sumAll = function(lowerLimit, upperLimit) {
    let sum = 0;
    let numSet = [];

    if ((lowerLimit%1 === 0 && upperLimit%1 === 0) &&
        (lowerLimit > 0 && upperLimit > 0) &&
        (typeof lowerLimit == "number" && typeof upperLimit == "number")){

        if (lowerLimit <= upperLimit){
            for (let j = lowerLimit; j <= upperLimit; j++){
                numSet.push(j);
            }
        }else {
            for (let j = upperLimit; j <= lowerLimit; j++){
                numSet.push(j);
            }
        }

        for (let i = 0; i < numSet.length; i++){
            sum += numSet[i];
        }

        return sum;
    }else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
