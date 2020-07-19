class Book {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author_id = data.author_id;
    const author = Author.findById(this.author_id);
    this.author = author.name;
    Book.all.push(this);
  }

  update({ title }) {
    this.title = title;
  }


  renderListItem() {
    return `
    <li>
      <h3>${this.title} -
      <button data-id=${this.id} class="book-btn">Update Title</button>
        <button data-id=${this.id} class="book-btn">delete</button>
      </h3>
    </li>`;
  }

  renderUpdateForm() {
    return `
    <form data-id='${this.id}'>
      <p>
        <input type="text" value="${this.title}" />
      </p>

      <button type='submit'>Save Book</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(book => book.id === +id);
  }

  static findByAuthorId(id) {
    return this.all.find(book => book.author_id === +id);
  }
}

Book.all = [];
