import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  ); 
}

const author = 'Ryan Holiday'
const Book = () => {
  const title = 'The Obstacle is the Way';
  return (
  <article className="book">
    <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7812/9781781251492.jpg" alt="The Obstacle is the Way" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {/* <p>{lex x = 6}</p> */}
    <p>{6+8}</p>
  </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'))
