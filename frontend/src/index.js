document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchAuthors().then(app.createAuthors);
  app.adapter.fetchBooks().then(app.createBooks);

});
