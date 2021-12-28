import React, { Component } from 'react';

export class LotCost extends Component {
  render() {
    return (
      <div className='bg-purple-600 w-full h-96 p-6'>
        <h2>Costos por lote</h2>
        <div className='flex justify-between'>
          <div>
            <h3>Logistica Internacional</h3>
          </div>
          <div>
            <h3>Impuestos</h3>
          </div>
          <div className='flex flex-col'>
            <div>
              <h3>Logistica Domestica</h3>
            </div>
            <div>
              <h3>Otros gastos</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LotCost;
