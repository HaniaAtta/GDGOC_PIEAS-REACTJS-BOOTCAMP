// src/BorrowedBooks.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const BorrowedBooks = () => {
    const { borrowedBooks } = useContext(BooksContext);

    return (
        <div>
            <h2>Borrowed Books</h2>
            <ul>
                {borrowedBooks.length > 0 ? (
                    borrowedBooks.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))
                ) : (
                    <li>No borrowed books</li>
                )}
            </ul>
        </div>
    );
};

export default BorrowedBooks;