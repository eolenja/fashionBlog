import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import './style.css';

const App = () => {
  const articles = [
    {
      title: "Latest Trends in Fashion",
      image: "your-image-url.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "How to Style Your Outfits",
      image: "your-image-url.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div>
      <Header />
      <main>
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
