// src/HighRatedBooks.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';
import BookCard from './BookCard.jsx';

const HighRatedBooks = () => {
    const { books } = useContext(BooksContext); // Access books from context
    const highRated = books.filter(book => book.rating > 4.5); // Filter high-rated books

    return (
        <div>
            <h2>High Rated Books</h2>
            {highRated.length > 0 ? (
                highRated.map(book => (
                    <BookCard key={book.id} {...book} />
                ))
            ) : (
                <p>No high-rated books available.</p>
            )}
        </div>
    );
};

export default HighRatedBooks;