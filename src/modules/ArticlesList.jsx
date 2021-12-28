import React, { Component } from 'react';
import Article from './Article';

export class ArticlesList extends Component {
  render() {
    const { items, updateArticle } = this.props;
    return (
      <div className='bg-red-400 w-full h-96 p-6 '>
        <h2>Lista de Articulos</h2>
        {items.map((item) => (
          <Article key={item.id} item={item} updateArticle={updateArticle} />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
