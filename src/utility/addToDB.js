//get from localstorage
const getStoredBooks = () => {
  const storedBooksSTR = localStorage.getItem("readList");
  if (storedBooksSTR) {
    return JSON.parse(storedBooksSTR);
  } else {
    return [];
  }
};

//save to localstorage
const saveBooksToDB = (bookId) => {
  const storedBooks = getStoredBooks();
  if (storedBooks.includes(bookId)) {
    return;
  } else {
    storedBooks.push(bookId);
    localStorage.setItem("readList", JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooksToDB };
