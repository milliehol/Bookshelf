class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    //this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createBooks = this.createBooks.bind(this);
    this.createAuthors = this.createAuthors.bind(this);
    this.addBooks = this.addBooks.bind(this);

  }

  attachEventListeners() {
    $('#books-list').on('click', 'button', this.handleEditClick);
    //$('#books-list').on('click', 'button', this.handleDeleteClick);
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
    this.addAuthors();
  }

  addBooks() {
    $('#books-list').empty();
    Book.all.forEach(book => $('#books-list').append(book.renderListItem()));
  }

  addAuthors() {
    $('#authors-list').empty();
    Author.all.forEach(author => $('#authors-list').append(author.renderListItem()));
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
    console.log(id);
    const book = Book.findById(id);
    console.log(book);
    $('#update').html(book.renderUpdateForm());

  }

  handleDeleteClick(e) {
    const id = e.target.dataset.id;
    console.log(id);
    const book = JSON.stringify(Book.findById(id));
    console.log(book);
    const title = $(e.target)
      .find('input')
      .val();

    const bodyJSON = { title };
    this.adapter.deleteBook(book.id, bodyJSON);

  }


}
