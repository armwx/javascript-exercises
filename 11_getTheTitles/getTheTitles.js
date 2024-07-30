const getTheTitles = function (books) {
    console.log(typeof books)
    console.log(books.length)
    
    console.log(books)
    const bookTitles = [];
    for (const book of books) {
        const name = book.title;
        bookTitles.push(name);
    }
    return bookTitles;
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
