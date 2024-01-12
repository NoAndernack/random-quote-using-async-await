const fetchName = async() => fetch('https://thatsthespir.it/api');
const fetchName2 = async(name) => fetch(`https://api.agify.io?name=${name}`); // Modifiez la signature de la fonction pour prendre un paramètre 'name'
const quoteButton = document.querySelector('.quoteButton');
const quote = document.querySelector('q');
const img = document.querySelector('.img');
const author = document.querySelector('.name');
let authorName = "";
const loader = document.querySelector("#loader");
const ageAuthor = document.querySelector(".ageAuthor");

document.addEventListener("DOMContentLoaded", () => {
    fetchName()
    .then(response => response.json())
    .then(json => {
        authorName = json.author;
            let firstName = authorName.split(' ')[0]; 

        quote.textContent = json.quote;
        img.src = json.photo || "photoVide.png";
        author.textContent = authorName;


        return fetchName2(firstName); 
    })
    .then(response => response.json())
    .then(json => {
        ageAuthor.textContent = "Age :" + json.age+" ans";
    })
    .catch(error => {
        console.log("There was an error!", error);
    });
});

quoteButton.addEventListener('click', () => {
    quote.textContent = "";
    img.src = ''; 
    author.textContent = '';
    ageAuthor.textContent = '';
    document.querySelector('#loading').style.visibility = 'visible';
    setTimeout(() => {
        
    ;fetchName()
        .then(response => response.json())
        .then(json => {
            authorName = json.author;
            let firstName = authorName.split(' ')[0]; 

            quote.textContent = json.quote;
            img.src = json.photo || "photoVide.png";
            author.textContent = authorName;

            return fetchName2(firstName); 
        })
        .then(response => response.json())
        .then(json => {
            ageAuthor.textContent =  "Age :" + json.age +" ans"; 
        })
        .catch(error => {
            console.log("There was an error!", error);
            
        });
        document.querySelector('#loading').style.visibility = 'hidden';
    }, 2000)
});