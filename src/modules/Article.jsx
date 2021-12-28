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
      <div className='bg-lime-500 flex '>
        <label>{index + 1}</label>
        <input
          value={descripcion}
          onChange={(e) => onUpdateArticle(e, index)}
          name='descripcion'
          placeholder='descripcion'
        />
        <input
          value={cantidad}
          onChange={(e) => onUpdateArticle(e, index)}
          name='cantidad'
          placeholder='cantidad'
        />
        <input
          value={peso}
          onChange={(e) => onUpdateArticle(e, index)}
          name='peso'
          placeholder='peso'
        />
        <input
          value={precioUnitario}
          onChange={(e) => onUpdateArticle(e, index)}
          name='precioUnitario'
          placeholder='precioUnitario'
        />
        <input
          value={arancel}
          onChange={(e) => onUpdateArticle(e, index)}
          name='arancel'
          placeholder='arancel'
        />
        <input
          value={margen}
          onChange={(e) => onUpdateArticle(e, index)}
          name='margen'
          placeholder='margen'
        />
        <label>{costoTotalUnitario}</label>
        <label>{gananciaUnitaria}</label>
        <label>{pvpUnitario}</label>
        <button onClick={() => onDeleteArticle(index)}>Del</button>
      </div>
    );
  }
}

export default Article;
