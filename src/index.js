import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  ); 
}

const Book = () => {
  return (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
  );
}

// hard coded components
const Image = () => (
<img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7812/9781781251492.jpg" alt="The Obstacle is the Way" />
);
const Title = () => <h1>The Obstacle is The Way</h1>
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Ryan Holiday</h4>
ReactDOM.render(<BookList />, document.getElementById('root'))
