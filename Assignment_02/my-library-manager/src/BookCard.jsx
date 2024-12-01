// src/BookCard.jsx
import React from 'react';

const BookCard = ({ title, author, rating, genre }) => {
    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Rating: {rating}</p>
            <p>Genre: {genre}</p>
            <Button title={title} /> {/* Include the Button component */}
        </div>
    );
};

export default BookCard;