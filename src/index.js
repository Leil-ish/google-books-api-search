import React from 'react';
import ReactDOM from 'react-dom';
import BooksApp from './BooksApp';
import './index.css';

const BOOKS = [
    {"title": "Fluke", "author": "Christopher Moore", "description": "this is the description"},
    {"title": "Freakonomics", "author": "Steven Levitt", "description": "this is the description"},
    {"title": "Jailbird", "author": "Kurt Vonnegut", "description": "this is the description"}
]

ReactDOM.render(<BooksApp books={BOOKS}/>, document.getElementById('root'));