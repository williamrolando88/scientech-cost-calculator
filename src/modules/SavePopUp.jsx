import React, { useState } from 'react';

const SavePopUp = (props) => {
  const [proveedor, setProveedor] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleConfirm = () => {
    if (proveedor && descripcion) {
      setProveedor('');
      setDescripcion('');
      onSave(proveedor, descripcion);
    } else {
      console.log('click');
    }
  };

  const { onCloseSaving, saving, onSave } = props;
  return (
    saving && (
      <div className='fixed top-0 left-0 h-screen w-full bg-black/40 flex justify-center items-center'>
        <div className='w-2/5 bg-slate-50 p-10'>
          <h3 className='text-lg'>Guardar Calculos?</h3>
          <div className='flex flex-col gap-4 mt-6'>
            <input
              className='px-4 rounded border hover:shadow'
              name='proveedor'
              type='text'
              placeholder='Ingrese un proveedor:'
              value={proveedor}
              onChange={(e) => {
                setProveedor(e.target.value);
              }}
            />
            <input
              className='px-4 rounded border hover:shadow'
              name='grupo'
              type='text'
              placeholder='Ingrese una descripcion:'
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </div>
          <div className='mt-6 flex justify-end items-center gap-6'>
            <button
              className='border text-white px-4 py-2 rounded bg-green-600 flex items-center gap-2'
              onClick={handleConfirm}>
              <span>Confirmar</span>
              <span className='material-icons text-lg'>save_as</span>
            </button>
            <button
              className='border text-white px-4 py-2 rounded bg-red-600 flex items-center gap-2'
              onClick={onCloseSaving}>
              <span>Cancelar</span>
              <span className='material-icons text-lg'>cancel</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SavePopUp;
