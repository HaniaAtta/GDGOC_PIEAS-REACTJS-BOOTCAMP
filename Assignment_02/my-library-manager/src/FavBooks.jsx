// src/FavBooks.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const FavBooks = () => {
    const { favBooks } = useContext(BooksContext);

    return (
        <div>
            <h2>Favorite Books</h2>
            <ul>
                {favBooks.length > 0 ? (
                    favBooks.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))
                ) : (
                    <li>No favorite books</li>
                )}
            </ul>
        </div>
    );
};

export default FavBooks;