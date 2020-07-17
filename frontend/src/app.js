class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createBooks = this.createBooks.bind(this);
    this.createAuthors = this.createAuthors.bind(this);
    //this.addBooks = this.addBooks.bind(this);

  }

  attachEventListeners() {
    $('#books-list').on('click', 'button', this.handleEditClick);
    $('#update').on('submit', 'form', this.handleFormSubmit);
  }

  createBooks(books) {
    books.forEach(book => {
      new Book(book);
    });
    console.log(this);
    this.addBooks();
  }

  createAuthors(authors) {
    authors.forEach(author => {
      new Author(author);
    });
    console.log(this);

  }

  addBooks() {
    $('#books-list').empty();
    Book.all.forEach(book => $('#books-list').append(book.renderListItem()));
  }


  handleFormSubmit(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const book = Book.findById(id);
    const title = $(e.target)
      .find('input')
      .val();

    const bodyJSON = { title };
    this.adapter.updateBook(book.id, bodyJSON).then(updatedBook => {
      const book = Book.findById(updatedBook.id);
      book.update(updatedBook);
      this.addBooks();
    });
  }

  handleEditClick(e) {
    const id = e.target.dataset.id;
    const book = Book.findById(id);
    $('#update').html(book.renderUpdateForm());
  }


}
