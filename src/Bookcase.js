import Bookshelf from "./Bookshelf";
import PropTypes from 'prop-types';

const Bookcase = ({ bookshelves, books, onMove }) => {
    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map(shelf => (
            <Bookshelf key={shelf.key} shelf={shelf} books={books} onMove={onMove} />
          ))}
        </div>
      </div>
    );
  };

  Bookcase.prototype = {
    bookshelves : PropTypes.object,
    books : PropTypes.object,
    onMove : PropTypes.func
  }

  export default Bookcase;