class Book {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author_id = data.author_id;
    Book.all.push(this);
  }

  update({ title }) {
    this.title = title;
  }

  delete({ title }) {
    this.title = title;
  }


  renderListItem() {
    return `
    <li>
      <h3>${this.title} by ${Author.findByIdName(this.author_id)}
      <p>
      <div><button data-id=${this.id} id="myBtn">Update Title</button></div>

      <span><button data-id=${this.id}>delete</button></span>
      </p>
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
