import React from 'react';

const StoredItem = (props) => {
  const {
    item: { index, date, proveedor, descripcion },
    onSelectItem,
  } = props;

  var dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  var timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  let parsedDate = new Date(date);
  let printDate = new Intl.DateTimeFormat('es-ES', dateOptions).format(
    parsedDate,
  );
  let printTime = new Intl.DateTimeFormat('es-ES', timeOptions).format(
    parsedDate,
  );

  return (
    <div className='flex'>
      <label className='border py-1 px-2 w-12 text-center'>{index + 1}</label>
      <label className='border py-1 px-2 w-36'>{printDate}</label>
      <label className='border py-1 px-2 w-20'>{printTime}</label>
      <label className='border py-1 px-2 w-60'>{proveedor}</label>
      <label className='border py-1 px-2 w-80'>{descripcion}</label>
      <button
        className='w-24 border flex items-center justify-center gap-1 hover:bg-sky-500 hover:text-white'
        onClick={() => onSelectItem(index)}>
        <span>Mostrar</span>
        <span className='material-icons text-base'>file_download</span>
      </button>
    </div>
  );
};

export default StoredItem;
