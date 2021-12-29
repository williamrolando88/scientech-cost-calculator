import React, { Component } from 'react';

export class Article extends Component {
  render() {
    const {
      item: {
        index,
        descripcion,
        cantidad,
        peso,
        precioUnitario,
        arancel,
        margen,
        costoTotalUnitario,
        gananciaUnitaria,
        pvpUnitario,
      },
      onUpdateArticle,
      onDeleteArticle,
    } = this.props;
    return (
      <div className='bg-lime-500 flex items-center'>
        <label className='w-12'>{index + 1}</label>
        <input
          className='w-1/4'
          value={descripcion}
          onChange={(e) => onUpdateArticle(e, index)}
          name='descripcion'
          placeholder='descripcion'
        />
        <input
          className='w-1/12'
          value={cantidad}
          onChange={(e) => onUpdateArticle(e, index)}
          name='cantidad'
          placeholder='cantidad'
        />
        <input
          className='w-1/12'
          value={peso}
          onChange={(e) => onUpdateArticle(e, index)}
          name='peso'
          placeholder='peso'
        />
        <input
          className='w-1/12'
          value={precioUnitario}
          onChange={(e) => onUpdateArticle(e, index)}
          name='precioUnitario'
          placeholder='precioUnitario'
        />
        <input
          className='w-1/12'
          value={arancel}
          onChange={(e) => onUpdateArticle(e, index)}
          name='arancel'
          placeholder='arancel'
        />
        <input
          className='w-1/12'
          value={margen}
          onChange={(e) => onUpdateArticle(e, index)}
          name='margen'
          placeholder='margen'
        />
        <label className='w-1/12'>{costoTotalUnitario}</label>
        <label className='w-1/12'>{gananciaUnitaria}</label>
        <label className='w-1/12'>{pvpUnitario}</label>
        <button className='w-1/12' onClick={() => onDeleteArticle(index)}>
          Del
        </button>
      </div>
    );
  }
}

export default Article;
