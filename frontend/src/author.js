class Author {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    Author.all.push(this);
  }


  renderListItem() {

    if (super.author_id === this.id) {
    return `<div class="card" data-author-id="${this.id}">
            <button class="view-events-dog-button" style="background-color:blue">View Record</button>
            <button class="edit-dog-button" style="background-color:orange">Edit Info</button>
            <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
            </br></br>
            <strong class="author-name">${this.name}</strong> <br/>
            <strong class="author-name">${super.title}</strong> <br/>
        </div>`;
  }
  return `<div class="card" data-author-id="${this.id}">
          <button class="view-events-dog-button" style="background-color:blue">View Record</button>
          <button class="edit-dog-button" style="background-color:orange">Edit Info</button>
          <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
          </br></br>
          <strong class="author-name">${this.name}</strong> <br/>
      </div>`;
  }



  update({ name }) {
    this.name = name;
  }


  static findById(id) {
    return this.all.find(author => author.id === id);
  }

}

Author.all = [];
