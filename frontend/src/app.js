class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClickB.bind(this);
    this.handleEditClick = this.handleEditClickA.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmitA.bind(this);
    this.createBooks = this.createBooks.bind(this);
    this.createAuthors = this.createAuthors.bind(this);
    this.addAuthors = this.addAuthors.bind(this);
    this.addBooks = this.addBooks.bind(this);

  }

  attachEventListeners() {
    //document.getElementById("myBtn").addEventL("click", this.handleEditClickB, true);
    //$('#authors-list').on('click', 'form', this.handleAddSubmit);
    $('#authors-list').on('click', 'button', this.handleEditClickA);
    $('#books-list').on('click', 'div', this.handleEditClickB);
    $('#books-list').on('click', 'p', this.handleDeleteClick);
    $('#update').on('submit', 'form', this.handleFormSubmit);
    $('#update2').on('submit', 'form', this.handleFormSubmitA);
    $('#add').on('submit', 'form', this.handleAddSubmit);
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
    //const bookArray = []
    //bookArray = Book.all.forEach(book => Book.findByAuthorId;
    Author.all.forEach(author => $('#authors-list').append(author.renderListItem()));

    //then(author => {
      //const book = []
    //  if(author.id == Book.findByAuthorId(id)) {
    //user = users[i];

    //    Book.all.forEach(book => Book.findByAuthorId(author.id)).then(book => $('#books-list').append(book.renderListItem()));
  //  });
}

handleAddSubmit(e) {
  e.preventDefault();
  const name = $(e.target)
    .find('input')
    .val();

  const bodyJSON = { name };
  this.adapter.addAuthor(bodyJSON).then(newAuthor => {
    const author = new Author(bodyJSON);
    author.add(newAuthor);
    this.addAuthors();
  });
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
      location.reload();
    });
  }

  handleFormSubmitA(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const author = Author.findById(id);
    const name = $(e.target)
      .find('input')
      .val();

    const bodyJSON = { name };
    this.adapter.updateAuthor(author.id, bodyJSON).then(updatedAuthor => {
      const author = Author.findById(updatedAuthor.id);
      author.update(updatedAuthor);
      this.addAuthors();
      location.reload();
    });
  }

  handleAddClick(e) {
    $('#addForm').html(renderAddForm());

  }

  handleEditClickB(e) {
    const id = e.target.dataset.id;
    console.log(id);
    const book = Book.findById(id);
    console.log(book);
    $('#update').html(book.renderUpdateForm());

  }

  handleEditClickA(e) {
    const id = e.target.dataset.id;
    console.log(id);
    const author = Author.findById(id);
    console.log(book);
    $('#update2').html(author.renderUpdateForm());

  }

  handleDeleteClick(e) {
    const id = e.target.dataset.id;
    console.log(id);
    this.adapter.deleteBook(id);
    this.addBooks();
    location.reload();

  }



}
