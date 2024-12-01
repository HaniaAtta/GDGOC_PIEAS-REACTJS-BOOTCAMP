import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const Button = ({ title }) => {
    const { addToBorrowed, addToFavorites } = useContext(BooksContext);

    const handleAddToBorrowed = () => {
        console.log(`Adding ${title} to borrowed list`);
        addToBorrowed(title);
    };

    const handleAddToFavorites = () => {
        console.log(`Adding ${title} to favorites`);
        addToFavorites(title);
    };

    return (
        <div>
            <button onClick={handleAddToBorrowed}>Add Me</button>
            <button onClick={handleAddToFavorites}>Favorite</button>
        </div>
    );
};

export default Button;