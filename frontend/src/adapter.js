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

  addBook(id, body) {
    return this.post(`${this.baseUrl}/books/${id}`, body);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}
