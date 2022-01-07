import React, { Component } from 'react';

export class LotCost extends Component {
  render() {
    const {
      lot: {
        input: {
          fleteImpuestos,
          tramiteImportacion,
          fleteReal,
          agenteAduanero,
          logisticaInterna,
          ivaOrigen,
          fleteOrigen,
          comisionBancaria,
        },
        output: {
          ivaCourier,
          totalLogisticaInt,
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
      <div className='border rounded-lg w-full p-6'>
        <h2 className='text-lg font-bold mb-4'>Costos por lote</h2>
        <div className='flex justify-around'>
          <div className='border rounded'>
            <h3 className='text-xl text-center font-semibold'>
              Logistica Internacional
            </h3>
            <div className='flex flex-col px-4 py-2'>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Valor de flete para impuestos:</p>
                <input
                  className='w-20 border pl-2'
                  onChange={onChangeLot}
                  name='fleteImpuestos'
                  value={fleteImpuestos}
                  type='number'
                  min='0'
                />
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Tramite de importacion:</p>
                <input
                  className='w-20 border pl-2'
                  onChange={onChangeLot}
                  name='tramiteImportacion'
                  value={tramiteImportacion}
                  type='number'
                  min='0'
                />
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Valor de flete real:</p>
                <input
                  className='w-20 border pl-2'
                  onChange={onChangeLot}
                  name='fleteReal'
                  value={fleteReal}
                  type='number'
                  min='0'
                />
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Agente aduanero:</p>
                <input
                  className='w-20 border pl-2'
                  onChange={onChangeLot}
                  name='agenteAduanero'
                  value={agenteAduanero}
                  type='number'
                  min='0'
                />
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>IVA Courier:</p>
                <label className='w-20 border pl-2'>{ivaCourier}</label>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Total Pago Courier:</p>
                <label className='w-20 border pl-2'>{totalLogisticaInt}</label>
              </div>
            </div>
          </div>

          <div className='border rounded'>
            <h3 className='text-xl text-center font-semibold'>
              Impuestos Aduaneros
            </h3>
            <div className='flex flex-col px-4 py-2'>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>FODINFA:</p>
                <label className='w-20 border pl-2'>{fodinfa}</label>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Aranceles:</p>
                <label className='w-20 border pl-2'>{arancel}</label>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>IVA:</p>
                <label className='w-20 border pl-2'>{ivaAduana}</label>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>Total Pago Aduana:</p>
                <label className='w-20 border pl-2'>{totalAduana}</label>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p className='w-56'>ISD:</p>
                <label className='w-20 border pl-2'>{isd}</label>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='border rounded'>
              <h3 className='text-xl text-center font-semibold'>
                Valores adicionales en origen
              </h3>
              <div className='flex flex-col px-4 py-2'>
                <div className='flex items-center justify-between gap-4'>
                  <p className='w-56'>IVA origen:</p>
                  <input
                    className='w-20 border pl-2'
                    onChange={onChangeLot}
                    name='ivaOrigen'
                    value={ivaOrigen}
                    type='number'
                    min='0'
                  />
                </div>
                <div className='flex items-center justify-between gap-4'>
                  <p className='w-56'>Flete en origen:</p>
                  <input
                    className='w-20 border pl-2'
                    onChange={onChangeLot}
                    name='fleteOrigen'
                    value={fleteOrigen}
                    type='number'
                    min='0'
                  />
                </div>
                <div className='flex items-center justify-between gap-4'>
                  <p className='w-56'>Tarifas bancarias:</p>
                  <input
                    className='w-20 border pl-2'
                    onChange={onChangeLot}
                    name='comisionBancaria'
                    value={comisionBancaria}
                    type='number'
                    min='0'
                  />
                </div>
              </div>
            </div>

            <div className='border rounded'>
              <h3 className='text-xl text-center font-semibold'>
                Logistica Domestica
              </h3>
              <div className='flex flex-col px-4 py-2'>
                <div className='flex items-center justify-between gap-4'>
                  <p className='w-56'>Peso total [lb]:</p>
                  <label className='w-20 border pl-2'>{pesoTotal}</label>
                </div>
                <div className='flex items-center justify-between gap-4'>
                  <p className='w-56'>Costo de envio:</p>
                  <input
                    className='w-20 border pl-2'
                    onChange={onChangeLot}
                    name='logisticaInterna'
                    value={logisticaInterna}
                    type='number'
                    min='0'
                  />
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
