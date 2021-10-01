import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorSpan);
  imgContainer.appendChild(image);

  cardDiv.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorSpan.textContent = `By ${article.authorName}`

  console.log(cardDiv)
  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      console.log(res.data);
      const append = document.querySelector(selector);
      res.data.articles.bootstrap.forEach(obj => append.appendChild(Card(obj)));
      res.data.articles.javascript.forEach(obj => append.appendChild(Card(obj)));
      res.data.articles.technology.forEach(obj => append.appendChild(Card(obj)));
      res.data.articles.jquery.forEach(obj => append.appendChild(Card(obj)));
      res.data.articles.node.forEach(obj => append.appendChild(Card(obj)));

    })
  //     console.log(res);
  //  
  //     for (let i = 0; i < res.data.articles.bootstrap.length; i++) {
  //       append.appendChild(Card(res.data.articles.bootstrap.length.i))
  //     } for (let i = 0; i < res.data.articles.javascript.length; i++) {
  //       append.appendChild(Card(res.data.articles.javascript.length.i))
  //     }
  //     })
  //     // console.log(articles)
    .catch(err => console.error(err))

}
    

export { Card, cardAppender }
