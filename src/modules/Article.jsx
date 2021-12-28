import React, { Component } from 'react';

export class Article extends Component {
  render() {
    const {
      item: {
        id,
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
      <div className='bg-lime-500 flex '>
        <label>{id}</label>
        <input
          value={descripcion}
          onChange={(e) => onUpdateArticle(e, id)}
          name='descripcion'
          placeholder='descripcion'
        />
        <input
          value={cantidad}
          onChange={(e) => onUpdateArticle(e, id)}
          name='cantidad'
          placeholder='cantidad'
        />
        <input
          value={peso}
          onChange={(e) => onUpdateArticle(e, id)}
          name='peso'
          placeholder='peso'
        />
        <input
          value={precioUnitario}
          onChange={(e) => onUpdateArticle(e, id)}
          name='precioUnitario'
          placeholder='precioUnitario'
        />
        <input
          value={arancel}
          onChange={(e) => onUpdateArticle(e, id)}
          name='arancel'
          placeholder='arancel'
        />
        <input
          value={margen}
          onChange={(e) => onUpdateArticle(e, id)}
          name='margen'
          placeholder='margen'
        />
        <label>{costoTotalUnitario}</label>
        <label>{gananciaUnitaria}</label>
        <label>{pvpUnitario}</label>
        <button onClick={(id) => onDeleteArticle(id)}>Del</button>
      </div>
    );
  }
}

export default Article;
