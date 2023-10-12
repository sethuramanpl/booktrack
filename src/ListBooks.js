import React from 'react'
import OpenSearchButton from './OpenSearchButton';
import Bookcase from './Bookcase';
import PropTypes from 'prop-types';

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

    ListBooks.prototype = {
      bookshelves : PropTypes.object,
      books : PropTypes.object,
      onMove : PropTypes.func
    }
export default ListBooks

