import React, { Component } from 'react';

export class LotCost extends Component {
  render() {
    const {
      lote: {
        input: {
          fleteImpuestos,
          tramiteImportacion,
          fleteReal,
          agenteAduanero,
          logisticaInterna,
          ivaOrigen,
          fleteOrigen,
          otros,
        },
        output: {
          ivaCourier,
          totalLogisticaInterna,
          fodinfa,
          arancel,
          ivaAduana,
          totalAduana,
          isd,
          pesoTotal,
        },
      },
      onChangeLot,
    } = this.props;
    return (
      <div className='bg-purple-600 w-full h-96 p-6'>
        <h2 className='text-2xl'>Costos por lote</h2>
        <div className='flex justify-around'>
          <div>
            <h3 className='text-xl '>Logistica Internacional</h3>
            <div className='flex'>
              <div className='w-60'>
                {/* Input */}
                <p>Valor de flete para impuestos</p>
                <p>Tramite de importacion</p>
                <p>Valor de flete real</p>
                <p>Agente aduanero</p>
                {/* Output */}
                <p>IVA</p>
                <p>Total Costo Log. Int.</p>
              </div>
              <div className='flex flex-col'>
                <input
                  onChange={onChangeLot}
                  name='fleteImpuestos'
                  value={fleteImpuestos}
                />
                <input
                  onChange={onChangeLot}
                  name='tramiteImportacion'
                  value={tramiteImportacion}
                />
                <input
                  onChange={onChangeLot}
                  name='fleteReal'
                  value={fleteReal}
                />
                <input
                  onChange={onChangeLot}
                  name='agenteAduanero'
                  value={agenteAduanero}
                />
                <label>{ivaCourier}</label>
                <label>{totalLogisticaInterna}</label>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-xl'>Impuestos</h3>
            <div className='flex'>
              <div className='w-48'>
                {/* Output */}
                <p>FODINFA</p>
                <p>Aranceles</p>
                <p>IVA</p>
                <p>Total Aduana</p>
                <p>ISD</p>
              </div>
              <div className='flex flex-col'>
                <label>{fodinfa}</label>
                <label>{arancel}</label>
                <label>{ivaAduana}</label>
                <label>{totalAduana}</label>
                <label>{isd}</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              <h3 className='text-xl'>Logistica Domestica</h3>
              <div className='flex'>
                <div className='w-48'>
                  {/* Input */}
                  <p>Valor logistica interna</p>
                  {/* Output */}
                  <p>Peso total [lb]</p>
                </div>
                <div className='flex flex-col'>
                  <input
                    onChange={onChangeLot}
                    name='logisticaInterna'
                    value={logisticaInterna}
                  />
                  <label>{pesoTotal}</label>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-xl'>Valores adicionales en origen</h3>
              <div className='flex'>
                <div className='w-48'>
                  {/* Input */}
                  <p>IVA origen</p>
                  <p>Flete en origen</p>
                  <p>Otros</p>
                </div>
                <div className='flex flex-col'>
                  <input
                    onChange={onChangeLot}
                    name='ivaOrigen'
                    value={ivaOrigen}
                  />
                  <input
                    onChange={onChangeLot}
                    name='fleteOrigen'
                    value={fleteOrigen}
                  />
                  <input onChange={onChangeLot} name='otros' value={otros} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LotCost;
