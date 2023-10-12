import Bookshelf from "./Bookshelf";

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

  export default Bookcase;