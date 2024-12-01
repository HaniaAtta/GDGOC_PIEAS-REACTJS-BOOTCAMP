import React from 'react';
import Books from './books.js'; 
import BookCard from './BookCard.jsx';

const HighRatedBooks = () => {
    const highRated = Books.filter(book => book.rating > 4.5);
    return (
        <div>
            <h2>High Rated Books</h2>
            {highRated.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default HighRatedBooks;