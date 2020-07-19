class Book {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    const author = Author.findById(data.author_id);
    this.author = author.name;
    Book.all.push(this);
  }

  update({ title }) {
    this.title = title;
  }


  renderListItem() {
    return `
    <li>
      <h3>${this.title} - ${this.author}
      <button data-id=${this.id}>update</button>
        <button data-id=${this.id}>delete</button>
      </h3>
    </li>`;
  }

  renderUpdateForm() {
    return `
    <form data-id='${this.id}'>
      <label>Title</label>
      <p>
        <input type="text" value="${this.title}" />
      </p>

      <button type='submit'>Save Book</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(book => book.id === id);
  }
}

Book.all = [];
