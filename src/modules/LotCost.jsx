import React, { Component } from 'react';

export class LotCost extends Component {
  render() {
    const {
      lot: {
        input: {
          tramiteImportacion,
          fleteReal,
          agenteAduanero,
          logisticaInterna,
          ivaOrigen,
          fleteOrigen,
          comisionBancaria,
        },
        output: {
          fleteImpuestos,
          ivaCourier,
          totalLogisticaInt,
          fodinfa,
          arancel,
          ivaAduana,
          totalAduana,
          isd,
          totalFOBItems,
          totalCIFItems,
        },
      },
      pesoTotal,
      onChangeLot,
    } = this.props;
    return (
      <div className="border rounded-lg w-full p-6">
        <h2 className="text-lg font-bold mb-4">Costos por Lote</h2>
        <div className="flex justify-around flex-wrap gap-6">
          <div className="border rounded">
            <h3 className="text-xl text-center font-semibold">
              Logistica Internacional
            </h3>
            <div className="flex flex-col px-4 py-2">
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Peso total [lb]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {pesoTotal}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Flete para impuestos [USD]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {fleteImpuestos}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Valor de flete real [USD]:</p>
                <input
                  className="w-20 border pl-2"
                  onChange={onChangeLot}
                  onWheel={(e) => e.target.blur()}
                  name="fleteReal"
                  value={fleteReal}
                  type="number"
                  min="0"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Tramite de importacion [USD]:</p>
                <input
                  className="w-20 border pl-2"
                  onChange={onChangeLot}
                  onWheel={(e) => e.target.blur()}
                  name="tramiteImportacion"
                  value={tramiteImportacion}
                  type="number"
                  min="0"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Agente aduanero [USD]:</p>
                <input
                  className="w-20 border pl-2"
                  onChange={onChangeLot}
                  onWheel={(e) => e.target.blur()}
                  name="agenteAduanero"
                  value={agenteAduanero}
                  type="number"
                  min="0"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">IVA Courier [USD]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {ivaCourier}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56 font-semibold">Total Pago Courier [USD]:</p>
                <label className="bg-slate-300 w-20 border font-semibold pl-2">
                  {totalLogisticaInt}
                </label>
              </div>
            </div>
          </div>

          <div className="border rounded">
            <h3 className="text-xl text-center font-semibold">
              Impuestos Aduaneros
            </h3>
            <div className="flex flex-col px-4 py-2">
              <div className="flex items-center justify-between gap-4">
                <p className="w-56 font-semibold">Total CIF [USD]:</p>
                <label className="bg-slate-300 w-20 font-semibold border pl-2">
                  {totalCIFItems}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">FODINFA [USD]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {fodinfa}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">Aranceles [USD]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {arancel}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56">IVA [USD]:</p>
                <label className="bg-slate-300 w-20 border pl-2">
                  {ivaAduana}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56 font-semibold">Total Pago Aduana [USD]:</p>
                <label className="bg-slate-300 w-20 font-semibold border pl-2">
                  {totalAduana}
                </label>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="w-56 font-semibold">ISD [USD]:</p>
                <label className="bg-slate-300 w-20 font-semibold border pl-2">
                  {isd}
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border rounded">
              <h3 className="text-xl text-center font-semibold">
                Valores adicionales en origen
              </h3>
              <div className="flex flex-col px-4 py-2">
                <div className="flex items-center justify-between gap-4">
                  <p className="w-56">IVA origen [%]:</p>
                  <input
                    className="w-20 border pl-2"
                    onChange={onChangeLot}
                    onWheel={(e) => e.target.blur()}
                    name="ivaOrigen"
                    value={ivaOrigen}
                    type="number"
                    min="0"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="w-56">Flete en origen [USD]:</p>
                  <input
                    className="w-20 border pl-2"
                    onChange={onChangeLot}
                    onWheel={(e) => e.target.blur()}
                    name="fleteOrigen"
                    value={fleteOrigen}
                    type="number"
                    min="0"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="w-56 font-semibold">Total FOB [USD]:</p>
                  <label className="bg-slate-300 w-20 font-semibold border pl-2">
                    {totalFOBItems}
                  </label>
                </div>
              </div>
            </div>

            <div className="border rounded">
              <h3 className="text-xl text-center font-semibold">
                Otros Valores Nacionales
              </h3>
              <div className="flex flex-col px-4 py-2">
                <div className="flex items-center justify-between gap-4">
                  <p className="w-56">Valor flete nacional [USD]:</p>
                  <input
                    className="w-20 border pl-2"
                    onChange={onChangeLot}
                    onWheel={(e) => e.target.blur()}
                    name="logisticaInterna"
                    value={logisticaInterna}
                    type="number"
                    min="0"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="w-56">Tarifas bancarias [USD]:</p>
                  <input
                    className="w-20 border pl-2"
                    onChange={onChangeLot}
                    onWheel={(e) => e.target.blur()}
                    name="comisionBancaria"
                    value={comisionBancaria}
                    type="number"
                    min="0"
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
