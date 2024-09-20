const getTheTitles = function(array) {
    let titles = [];
    // Get each values of each object and store it in an array
    // Get the first value of the array (title) and push it to the titles array
    for (let i = 0; i < array.length; i++){
        let book = array[i]
        let bookValues = Object.values(book);
        let bookTitle = bookValues[0];
        titles.push(bookTitle);
    }
    // Return the list of titles
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
