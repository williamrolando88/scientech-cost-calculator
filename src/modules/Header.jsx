import React from 'react';

const Header = (props) => {
  const { onOpenSaving, logo, onReset, onCalculate } = props;
  return (
    <header className='px-[10%] py-4 shadow-md flex justify-between  items-center'>
      <img className='h-10' src={logo} alt='SCIENTECH-logo' />
      <div className='flex gap-4'>
        <button
          className='bg-sky-500 px-4 py-2 rounded text-white border  hover:bg-green-600 hover:text-white'
          onClick={onCalculate}>
          Calcular
        </button>
        <button
          className='bg-sky-500 px-4 py-2 rounded text-white border border-sky-500 hover:bg-slate-50 hover:text-black'
          onClick={onOpenSaving}>
          Guardar
        </button>
        <button className='bg-sky-500 px-4 py-2 rounded text-white border border-sky-500 hover:bg-slate-50 hover:text-black'>
          Recuperar
        </button>
        <button
          className='bg-sky-500 px-4 py-2 rounded text-white border  hover:bg-red-600 hover:text-white'
          onClick={onReset}>
          Borrar Formulario
        </button>
      </div>
    </header>
  );
};

export default Header;
