import Books from './book.mjs';
const printhighrated = () => {
    const highrated = Books.filter(book => book.rating > 4.5);
    highrated.forEach(book => console.log(book.title));
};

const printdetails_book = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};

const fictionbooks = () => {
    const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction");
    fictionBooks.forEach(book => console.log(book.title));
};

console.log("High Rated Books:");
printhighrated();

console.log("\nAll Book Details:");
printdetails_book();

console.log("\nFiction Books:");
fictionbooks();