const fetchName = () => fetch('https://thatsthespir.it/api');
const quoteButton = document.querySelector('.quoteButton');
const quote = document.querySelector('q');
const img = document.querySelector('.img');
const author = document.querySelector('.name');

quoteButton.addEventListener('click', () => {
    quote.textContent = '';
    img.src = ''; 
    author.textContent = '';
    
    fetchName()
        .then(response => response.json())
        .then(json => {
            quote.textContent = json.quote;
            img.src = json.photo;
            author.textContent = json.author;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);

        });
});
