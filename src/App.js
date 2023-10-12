import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import { debounce } from 'throttle-debounce';


function App() {
  const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];

  const [myBooks, setMyBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [isMyBooksReady, setIsMyBooksReady] = useState(false);
  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setMyBooks(books);
      setIsMyBooksReady(true);
    });
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    const updatedBooks = myBooks.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      setMyBooks([...updatedBooks, book]);
    } else {
      setMyBooks(updatedBooks);
    }
  };

  const searchForBooks = debounce(300, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(books);
          console.log('i am in search for books'+ searchBooks)
        }
      });
    } else {
      setSearchBooks([]);
    }
  });

  const resetSearch = () => {
    setSearchBooks([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path='/'
          element={<ListBooks
                bookshelves={bookshelves}
                books={myBooks}
                onMove={moveBook}/>}
        />
          <Route
          path='/search'
            element={<SearchBooks
                searchBooks={searchBooks}
                myBooks={myBooks}
                isMyBooksReady={isMyBooksReady}
                onSearch={searchForBooks}
                onMove={moveBook}
                onResetSearch={resetSearch}
          />}
        />
      </Routes>
    </div>
  );
};

export default App;
