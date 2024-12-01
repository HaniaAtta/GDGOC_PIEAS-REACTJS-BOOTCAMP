import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [favBooks, setFavBooks] = useState([]);

    const addToBorrowed = (title) => {
        setBorrowedBooks((prev) => [...prev, title]);
    };

    const addToFavorites = (title) => {
        setFavBooks((prev) => [...prev, title]);
    };

    return (
        <BooksContext.Provider value={{ borrowedBooks, favBooks, addToBorrowed, addToFavorites }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;