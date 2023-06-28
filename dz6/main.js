const request = fetch('http://example.com/movies.json')
    let currentPage = 1
function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;
    const url = `${request}?page=${currentPage}`;
    fetchData(url);
  }
}
function handleNextClick() {
  currentPage++;
  const url = `${request}?page=${currentPage}`;
  fetchData(url);
}
document.getElementById('prevButton').addEventListener('click', handlePrevClick);
document.getElementById('nextButton').addEventListener('click', handleNextClick);

// Выполнение первоначального запроса и отображение данных в консоли
fetchData(request);