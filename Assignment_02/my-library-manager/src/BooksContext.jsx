// src/BooksContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [favBooks, setFavBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('./books.json');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const addToBorrowed = (title) => {
        setBorrowedBooks((prev) => [...prev, title]);
    };

    const addToFavorites = (title) => {
        setFavBooks((prev) => [...prev, title]);
    };

    return (
        <BooksContext.Provider value={{ books, borrowedBooks, favBooks, addToBorrowed, addToFavorites }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;