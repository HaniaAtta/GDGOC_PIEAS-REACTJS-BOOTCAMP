// src/BookCard.jsx
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';
import Button from './Button';

const BookCard = ({ title, author, rating, genre }) => {
    const { addToBorrowed, addToFavorites } = useContext(BooksContext); // Access the context

    const handleAddToBorrowed = () => {
        addToBorrowed(title); // Add the book title to borrowed list
    };

    const handleAddToFavorites = () => {
        addToFavorites(title); // Add the book title to favorites list
    };

    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Rating: {rating}</p>
            <p>Genre: {genre}</p>
            <Button 
                title="Add Me" 
                onClick={handleAddToBorrowed} // Pass the click handler for adding to borrowed
            />
            <Button 
                title="Favorite" 
                onClick={handleAddToFavorites} // Pass the click handler for adding to favorites
            />
        </div>
    );
};

export default BookCard;