class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  fetchBooks() {
    return this.get(`${this.baseUrl}/books`);
  }

  fetchAuthors() {
    return this.get(`${this.baseUrl}/authors`);
  }

  updateBook(id, body) {
    return this.patch(`${this.baseUrl}/books/${id}`, body);
  }

  deleteBook(id) {
    return this.delete(`${this.baseUrl}/books/${id}`);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  delete(url, body) {
    return fetch(url, {
      method: 'DELETE',
    }).then(res => res.json());
  }
}
