// src/BookList.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';
import BookCard from './BookCard';

const BookList = () => {
    const { books } = useContext(BooksContext);

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;