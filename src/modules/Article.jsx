import PropTypes from 'prop-types';
import React from 'react';

const Article = (props) => {
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
  } = props;

  // Article.propTypes = {
  //   cantidad: PropTypes.number,
  // };

  return (
    <div className="bg-slate-300 flex items-center text-center">
      <label className="border w-12">{index + 1}</label>
      <input
        className="pl-2 border w-1/4"
        value={descripcion}
        onChange={(e) => onUpdateArticle(e, index)}
        name="descripcion"
        placeholder="Ingrese descripcion"
        type="text"
      />
      <input
        className="pl-2 border w-1/12"
        value={cantidad}
        onChange={(e) => onUpdateArticle(e, index)}
        onWheel={(e) => e.target.blur()}
        name="cantidad"
        placeholder="cantidad"
        type="number"
        min="1"
      />
      <input
        className="pl-2 border w-1/12"
        value={peso}
        onChange={(e) => onUpdateArticle(e, index)}
        onWheel={(e) => e.target.blur()}
        name="peso"
        placeholder="peso"
        type="number"
        min="0"
      />
      <input
        className="pl-2 border w-1/12"
        value={precioUnitario}
        onChange={(e) => onUpdateArticle(e, index)}
        onWheel={(e) => e.target.blur()}
        name="precioUnitario"
        placeholder="precioUnitario"
        type="number"
        min="0"
      />
      <input
        className="pl-2 border w-1/12"
        value={arancel}
        onChange={(e) => onUpdateArticle(e, index)}
        onWheel={(e) => e.target.blur()}
        name="arancel"
        placeholder="arancel"
        type="number"
        min="0"
      />
      <input
        className="pl-2 border w-1/12"
        value={margen}
        onChange={(e) => onUpdateArticle(e, index)}
        onWheel={(e) => e.target.blur()}
        name="margen"
        placeholder="margen"
        type="number"
        min="0"
      />
      <label className="border w-1/12">{costoTotalUnitario}</label>
      <label className="border w-1/12">{gananciaUnitaria}</label>
      <label className="border w-1/12">{pvpUnitario}</label>
      <button
        className="border w-1/12 flex items-center justify-center gap-1 hover:text-red-600"
        onClick={() => onDeleteArticle(index)}>
        <span className="material-icons text-base">delete</span>
        <span>Borrar</span>
      </button>
    </div>
  );
};

export default Article;
