import React from 'react';

const StoredItem = (props) => {
  const {
    item: { index, date, proveedor, descripcion },
  } = props;

  var dateOptions = {
    weekday: 'long',
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
      <div className='border py-1 px-2'>{index + 1}</div>
      <div className='border py-1 px-2'>{printDate}</div>
      <div className='border py-1 px-2'>{printTime}</div>
      <div className='border py-1 px-2'>{proveedor}</div>
      <div className='border py-1 px-2'>{descripcion}</div>
    </div>
  );
};

export default StoredItem;
