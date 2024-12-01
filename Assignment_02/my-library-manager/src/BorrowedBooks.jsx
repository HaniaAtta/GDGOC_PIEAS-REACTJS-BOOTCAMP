import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const BorrowedBooks = () => {
    const { borrowedBooks } = useContext(BooksContext);

    return (
        <div>
            <h2>Borrowed Books</h2>
            <ul>
                {borrowedBooks.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BorrowedBooks;