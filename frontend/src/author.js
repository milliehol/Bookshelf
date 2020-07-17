class Author {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    Author.all.push(this);
  }

  const authorFormFields = `
    <label><strong>Name: </strong></label><br/>
    <input type="text" id="name"><br/>
    <input type="hidden" data-id='${this.name}'>
    <br/><br/><br/>`


  update({ name }) {
    this.name = name;
  }


  static findById(id) {
    return this.all.find(author => author.id === id);
  }
}

Author.all = [];
