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
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores in voluptatum commodi ullam ab voluptate corporis unde, consectetur illo assumenda placeat, nobis distinctio, alias fugit error quod esse? Illo, amet.</p>
        </Book>
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        />
    </section>
  ); 
}

const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props
  return (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'))
