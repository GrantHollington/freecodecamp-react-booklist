import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css'
// setup vars
const books = [
{ 
  id: 1,
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7812/9781781251492.jpg",
  title: 'The Obstacle is the Way',
  author: "Ryan Holiday"
},
{ 
  id: 2,
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7535/9780753555200.jpg",
  title: 'Zero to One',
  author: "Peter Thiel"
},
{ 
  id: 3,
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8619/9781861972781.jpg",
  title: 'The 48 Laws of Power',
  author: "Robert Greene"
}
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  ); 
}

const Book = ({img,title,author}) => {
  // attribute, eventHandler
  // onClick, onMouseHover 
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }
  const complexExample = (author) => {
    console.log(author);
  };
  return (
  <article className="book" onMouseOver={() => {
    console.log(title);
  }}>
    <img src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>
      reference example
    </button>
    <button type="button" onClick={() => complexExample(author)}>
      more complex example
    </button>
  </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'))
