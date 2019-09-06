// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
      debugger
    const articles = response.data.articles;
    console.log(articles);
    for(let item in articles){
        articles[item].forEach(item => {
            cardsContainer.appendChild(cardMaker(item))
        })
    }
})
        
    .catch(error => {
    document.body.innerText = error.message;
 }); 

function cardMaker(data){
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const by = document.createElement('span');

    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    
    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    by.textContent = `By ${data.authorName}`;

    imageContainer.appendChild(image);
    author.appendChild(imageContainer);
    author.appendChild(by);
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);

    return cardDiv;
};

