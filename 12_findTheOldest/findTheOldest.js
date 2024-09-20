const findTheOldest = function(array) {
    // Calculate the age of the person
    let ages = array.map((person) => {
        if (!person.yearOfDeath){
            let date = new Date();
            return date.getFullYear() - person.yearOfBirth;
        } else{
            return person.yearOfDeath - person.yearOfBirth;
        }
    })

    // Compare the age of each person to find the index of oldest person
    let oldestIndex = 0;
    const oldest = Math.max(...ages);
    for (let i = 0; i < array.length; i++){
        if (ages[i] === oldest){
            oldestIndex = i;
        }
    }

    // Return name of oldest person
    return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
