import React, { Component } from 'react';
import Article from './Article';

export class ArticlesList extends Component {
  render() {
    const { items, onUpdateArticle, onDeleteArticle, onAddArticle } =
      this.props;
    return (
      <div className='border rounded-lg w-full p-6 '>
        <h2 className='text-lg font-bold mb-4'>Lista de Articulos</h2>

        <div className='flex text-sm items-center bg-blue-800 text-center rounded text-white mr-4'>
          <label className='border-r w-12'>No.</label>
          <label className='border-r w-1/4'>Descripcion</label>
          <label className='border-r w-1/12'>Cant.</label>
          <label className='border-r w-1/12'>
            Peso Unitario <br /> [lb]
          </label>
          <label className='border-r w-1/12'>
            Precio Unitario <br /> [USD]
          </label>
          <label className='border-r w-1/12'>
            Arancel <br /> [%]
          </label>
          <label className='border-r w-1/12'>
            Margen <br /> [%]
          </label>
          <label className='border-r w-1/12'>
            Costo Total <br />
            [USD]
          </label>
          <label className='border-r w-1/12'>
            Ganancia Unitaria <br />
            [USD]
          </label>
          <label className='border-r w-1/12'>
            PVP Unitario <br />
            [USD]
          </label>
          <button
            className='w-1/12 flex items-center justify-center hover:text-green-500 gap-1'
            onClick={onAddArticle}>
            <span>Agregar Item</span>
            <span className='material-icons text-lg'>add_circle</span>
          </button>
        </div>
        <div className='overflow-y-scroll h-40 rounded'>
          {items.map((item) => (
            <Article
              key={item.index}
              item={item}
              onDeleteArticle={onDeleteArticle}
              onUpdateArticle={onUpdateArticle}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ArticlesList;
