import React from 'react';

const SavePopUp = (props) => {
  const { onCloseSaving } = props;
  return (
    props.saving && (
      <div>
        <button onClick={onCloseSaving}>Cerrar</button>
      </div>
    )
  );
};

export default SavePopUp;
