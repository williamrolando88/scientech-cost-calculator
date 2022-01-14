import React from 'react';

const Header = (props) => {
  const { onOpenSaving, logo, onReset, onCalculate, onOpenRetrieving } = props;
  return (
    <header className="fixed top-0 left-0 bg-slate-50 w-screen px-[10%] py-4 shadow-md flex justify-between  items-center">
      <img className="h-10" src={logo} alt="SCIENTECH-logo" />
      <div className="flex gap-4">
        <button
          className="bg-sky-500 px-4 py-2 rounded text-white hover:bg-green-600 hover:text-white"
          onClick={onCalculate}>
          Calcular
        </button>
        <button
          className="bg-sky-500 px-4 py-2 rounded text-white hover:bg-blue-800 hover:text-white"
          onClick={onOpenSaving}>
          Guardar
        </button>
        <button
          className="bg-sky-500 px-4 py-2 rounded text-white hover:bg-blue-800 hover:text-white"
          onClick={onOpenRetrieving}>
          Recuperar
        </button>
        <button
          className="bg-sky-500 px-4 py-2 rounded text-white hover:bg-red-600 hover:text-white"
          onClick={onReset}>
          Borrar Formulario
        </button>
      </div>
    </header>
  );
};

export default Header;
