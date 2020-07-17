class Author {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    Author.all.push(this);
  }

  update({ name }) {
    this.name = name;
  }


  static findById(id) {
    return this.all.find(author => author.id === id);
  }
}

Author.all = [];
