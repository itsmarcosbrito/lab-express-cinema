router.get('/books', (req, res) => {
    Book.find().then((allBooksFromDB) => {
      res.render('books-list', { books: allBooksFromDB });
    });
  });