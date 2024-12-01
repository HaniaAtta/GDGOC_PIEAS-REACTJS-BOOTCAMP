// src/BookDetails.jsx
import React from 'react';
import { Books } from './books';
import BookCard from './BookCard';

const BookDetails = () => {
    return (
        <div>
            <h2>All Books</h2>
            {Books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default BookDetails;