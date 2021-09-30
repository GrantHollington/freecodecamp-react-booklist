import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css'
// setup vars
const firstBook = {
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7812/9781781251492.jpg",
  title: 'The Obstacle is the Way',
  author: "Ryan Holiday"
};
const secondBook = {
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7535/9780753555200.jpg",
  title: 'Zero to One',
  author: "Peter Thiel"
}

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}
        />
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        />
    </section>
  ); 
}

const Book = (props) => {
  console.log(props);
  return (
  <article className="book">
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'))
