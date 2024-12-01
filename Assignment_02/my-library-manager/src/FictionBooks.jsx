import React from 'react';
import Books from './books.js'; 
import BookCard from './BookCard.jsx';

const FictionBooks = () => {
    const fictionBooks = Books.filter(book => book.genre.toLowerCase() === 'fiction');
    return (
        <div>
            <h2>Fiction Books</h2>
            {fictionBooks.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default FictionBooks;