// src/BookAuthors.jsx
import React from 'react';
import { Books } from './books';

const BookAuthors = () => {
    const authors = [...new Set(Books.map(book => book.author))]; // Unique authors
    return (
        <div>
            <h2>Book Authors</h2>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>{author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookAuthors;