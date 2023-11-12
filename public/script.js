document.getElementById('searchForm').addEventListener('submit', function(event) {
    const titulo = event.target.titulo.value;
    this.action = `/film/${titulo}`;
  });