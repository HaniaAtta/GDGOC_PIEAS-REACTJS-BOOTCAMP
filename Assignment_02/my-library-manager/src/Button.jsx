
import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

const Button = ({ title }) => {
    const { addToBorrowed, addToFavorites } = useContext(BooksContext);

    return (
        <div>
            <button onClick={() => addToBorrowed(title)}>Add Me</button>
            <button onClick={() => addToFavorites(title)}>Favorite</button>
        </div>
    );
};

export default Button;