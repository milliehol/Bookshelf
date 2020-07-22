class Author {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    Author.all.push(this);
  }


  renderListItem() {

    return `
    <li>
      <h3>${this.name} ---

      <button data-id=${this.id} id="myBtn">Update</button>

      </h3>
    </li>`;
  }

  renderAdd() {

    return `
    <li>
      <h3>Add New Author

      <button data-id=${this.id} id="myBtn">Add Author</button>

      </h3>
    </li>`;
  }

  renderAddForm() {
    return `
    <form>
      <p>
        <input type="text" value="${name}" />
      </p>

      <button type='submit'>Save Author</button>
    </form>
  `;
  }



  update({ name }) {
    this.name = name;
  }

  add({ name }) {
    this.name = name;
  }


  static findById(id) {
    return this.all.find(author => author.id === id);
  }

}

Author.all = [];
