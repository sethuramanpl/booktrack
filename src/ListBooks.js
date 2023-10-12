import React from 'react'
import OpenSearchButton from './OpenSearchButton';
import Bookcase from './Bookcase';

const ListBooks = ({ bookshelves, books, onMove }) => {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Bookcase bookshelves={bookshelves} books={books} onMove={onMove} />
          <OpenSearchButton />
        </div>
      );
    };

export default ListBooks

