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

  if (storedReadBooks.includes(bookId)) {
    return "already-in-read";
  }
  if (storedWishListBooks.includes(bookId)) {
    return "already-in-wishlist";
  }

  storedBooks.push(bookId);
  localStorage.setItem(listType, JSON.stringify(storedBooks));
  return "success";
};

export { getStoredBooks, saveBooksToDB };
