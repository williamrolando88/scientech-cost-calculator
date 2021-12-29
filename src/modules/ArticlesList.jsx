import React, { Component } from 'react';
import Article from './Article';

export class ArticlesList extends Component {
  render() {
    const { items, onUpdateArticle, onDeleteArticle, onAddArticle } =
      this.props;
    return (
      <div className='bg-red-400 w-full h-96 p-6 '>
        <h2>Lista de Articulos</h2>
        <button className='border' onClick={onAddArticle}>
          Agregar Articulo
        </button>
        <div className='flex text-sm items-center'>
          <label className='w-12'>No.</label>
          <label className='w-1/4'>Descripcion</label>
          <label className='w-1/12'>Cant.</label>
          <label className='w-1/12'>Peso</label>
          <label className='w-1/12'>Precio Unitario</label>
          <label className='w-1/12'>Arancel</label>
          <label className='w-1/12'>Margen</label>
          <label className='w-1/12'>Costo Total</label>
          <label className='w-1/12'>Ganancia</label>
          <label className='w-1/12'>PVP Unitario</label>
          <label className='w-1/12'>Borrar</label>
        </div>
        {items.map((item) => (
          <Article
            key={item.index}
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
