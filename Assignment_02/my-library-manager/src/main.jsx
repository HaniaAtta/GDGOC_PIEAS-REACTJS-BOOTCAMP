import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BooksProvider from './BooksContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BooksProvider>
            <App />
        </BooksProvider>
    </React.StrictMode>
);