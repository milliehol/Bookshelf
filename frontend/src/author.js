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



  update({ name }) {
    this.name = name;
  }


  static findById(id) {
    return this.all.find(author => author.id === id);
  }

}

Author.all = [];
