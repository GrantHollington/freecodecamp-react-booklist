import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css'
// setup vars
const books = [
{
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7812/9781781251492.jpg",
  title: 'The Obstacle is the Way',
  author: "Ryan Holiday"
},
{
  img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7535/9780753555200.jpg",
  title: 'Zero to One',
  author: "Peter Thiel"
}
];
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames) 
function BookList() {
  return (
    <section className="booklist">
      {newNames}
    </section>
  ); 
}

const Book = ({img, title, author}) => {
  // const {img, title, author} = props
  return (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
      </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'))
