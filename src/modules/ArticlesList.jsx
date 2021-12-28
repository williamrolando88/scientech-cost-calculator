import React, { Component } from 'react';
import Article from './Article';

export class ArticlesList extends Component {
  render() {
    const { items, onUpdateArticle, onDeleteArticle, onAddArticle } =
      this.props;
    return (
      <div className='bg-red-400 w-full h-96 p-6 '>
        <h2>Lista de Articulos</h2>
        <button onClick={onAddArticle}>Agregar Articulo</button>
        {items.map((item) => (
          <Article
            key={item.id}
            item={item}
            onDeleteArticle={onDeleteArticle}
            onUpdateArticle={onUpdateArticle}
          />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
