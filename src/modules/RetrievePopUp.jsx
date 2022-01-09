import React from 'react';
import StoredItem from './StoredItem';

const RetrievePopUp = (props) => {
  const { retrieving, onCloseRetrieving, onFetchData, onSelectItem } = props;
  const storedItems = retrieving && onFetchData();
  return (
    retrieving && (
      <div className='fixed top-0 left-0 h-screen w-full bg-black/40 flex justify-center items-center'>
        <div className='bg-slate-50 p-10'>
          <h3 className='text-lg'>Recuperar Informacion</h3>
          <div className='mt-4'>
            <div className='flex bg-blue-800 rounded text-center text-white text-sm mr-4'>
              <label className='border-r py-1 px-2 w-12'>No.</label>
              <label className='border-r py-1 px-2 w-36'>Fecha</label>
              <label className='border-r py-1 px-2 w-20'>Hora</label>
              <label className='border-r py-1 px-2 w-60'>Proveedor</label>
              <label className='border-r py-1 px-2 w-80'>Descripcion</label>
              <label className='py-1 px-2 w-24'>Seleccionar</label>
            </div>
            <div className='overflow-y-scroll max-h-96'>
              {storedItems.map((item) => (
                <StoredItem
                  key={item.index}
                  item={item}
                  onSelectItem={onSelectItem}
                />
              ))}
            </div>
          </div>
          <div className='mt-6 flex justify-end items-center gap-6'>
            <button
              className='border text-white px-4 py-2 rounded bg-red-600 flex items-center gap-2'
              onClick={onCloseRetrieving}>
              <span>Cancelar</span>
              <span className='material-icons text-lg'>cancel</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RetrievePopUp;
