//get from localstorage
const getStoredBooks = (listType) => {
  const storedBooksSTR = localStorage.getItem(listType);
  if (storedBooksSTR) {
    return JSON.parse(storedBooksSTR);
  } else {
    return [];
  }
};

//save to localstorage
const saveBooksToDB = (bookId, listType) => {
  const storedBooks = getStoredBooks(listType);
  const storedReadBooks = getStoredBooks("readList");
  const storedWishListBooks = getStoredBooks("wishList");
  if (
    storedReadBooks.includes(bookId) ||
    storedWishListBooks.includes(bookId)
  ) {
    return;
  } else {
    storedBooks.push(bookId);
    localStorage.setItem(listType, JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooksToDB };
