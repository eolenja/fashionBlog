import React from 'react';

const Article = ({ title, image, content }) => {
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{content}</p>
      <a href="#read-more" className="continue">Continues...</a>
    </article>
  );
};

export default Article;
