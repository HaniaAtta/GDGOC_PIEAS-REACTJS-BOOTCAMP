// src/FavBooks.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const FavBooks = () => {
    const { favBooks } = useContext(BooksContext);

    return (
        <div>
            <h2>Favorite Books</h2>
            <ul>
                {favBooks.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavBooks;