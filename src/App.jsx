import React, { Component } from 'react';
import calculate from './logic/calculate';
import ArticlesList from './modules/ArticlesList';
import Header from './modules/Header';
import LotCost from './modules/LotCost';

import logo from './icons/logo.png';

export class App extends Component {
  state = {
    proveedor: '',
    pesoTotal: 0,
    items: [],
    lot: {
      input: {
        tramiteImportacion: 0,
        fleteReal: 0,
        agenteAduanero: 0,
        logisticaInterna: 0,
        ivaOrigen: 0,
        fleteOrigen: 0,
        comisionBancaria: 0,
      },
      output: {
        fleteImpuestos: 0,
        ivaCourier: 0,
        totalLogisticaInt: 0,
        fodinfa: 0,
        arancel: 0,
        ivaAduana: 0,
        totalAduana: 0,
        isd: 0,
      },
    },
  };

  reIndex = (prevArr) => {
    return prevArr.map((elem, index) => {
      elem.index = index;
      return elem;
    });
  };

  handleAddArticle = () => {
    let items = [...this.state.items];
    const item = {
      index: items.length,
      descripcion: '',
      cantidad: 1,
      peso: 0,
      precioUnitario: 0,
      arancel: 0,
      margen: 0,
      costoTotalUnitario: 0,
      gananciaUnitaria: 0,
      pvpUnitario: 0,
    };
    items.push(item);
    items = this.reIndex(items);
    this.setState({ items });
  };

  handleUpdateArticle = (event, index) => {
    this.setState({
      items: this.state.items.map((item) =>
        item.index === index
          ? {
              ...item,
              [event.target.name]:
                event.target.name === 'descripcion'
                  ? event.target.value
                  : parseFloat(event.target.value),
            }
          : item,
      ),
    });
  };

  handleDeleteArticle = (index) => {
    let items = this.state.items.filter((item) => item.index !== index);
    items = this.reIndex(items);
    this.setState({ items });
  };

  handleChangeLot = (event) => {
    this.setState({
      lot: {
        ...this.state.lot,
        input: {
          ...this.state.lot.input,
          [event.target.name]: parseFloat(event.target.value),
        },
      },
    });
  };

  calculateValues = () => {
    const newState = calculate(this.state);
    this.setState({ ...newState });
  };

  handleReset = () => {
    this.setState({
      proveedor: '',
      items: [],
      lot: {
        input: {
          tramiteImportacion: 0,
          fleteReal: 0,
          agenteAduanero: 0,
          logisticaInterna: 0,
          ivaOrigen: 0,
          fleteOrigen: 0,
          comisionBancaria: 0,
        },
        output: {
          fleteImpuestos: 0,
          ivaCourier: 0,
          totalLogisticaInt: 0,
          fodinfa: 0,
          arancel: 0,
          ivaAduana: 0,
          totalAduana: 0,
          isd: 0,
        },
      },
      pesoTotal: 0,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.items !== this.state.items) {
      this.setState({
        pesoTotal: this.state.items
          .map((item) => item.peso)
          .reduce((a, b) => a + b, 0),
      });
    }
  };

  handleSave = () => {
    const {
      proveedor,
      items,
      lot: { input },
      totalFOBItems,
    } = this.state;

    if (!proveedor) {
      alert('Ingrese un proveedor');
      return;
    }

    if (items.length === 0) {
      alert('Ingrese articulos');
      return;
    }

    if (!totalFOBItems) {
      alert('No se puede guardar sin calcular');
      return;
    }
    const localData = this.getLocalStorage();

    let itemsInput = [];
    items.forEach((item) => {
      itemsInput.push({
        index: item.index,
        descripcion: item.descripcion,
        cantidad: item.cantidad,
        peso: item.peso,
        precioUnitario: item.precioUnitario,
        arancel: item.arancel,
        margen: item.margen,
      });
    });

    const newElement = {
      index: 0,
      date: new Date(),
      proveedor: proveedor,
      items: itemsInput,
      lotInput: input,
      FOBValue: totalFOBItems,
    };

    const newData = [...localData, newElement];

    localStorage.setItem('data', JSON.stringify(newData));
    this.handleReset();
  };

  getLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('data'));
    return localData ? localData : [];
  };

  handleChangeProveedor = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className='bg-slate-50'>
        <Header
          onProveedorChange={this.handleChangeProveedor}
          onSave={this.handleSave}
          proveedor={this.state.proveedor}
          logo={logo}
          onReset={this.handleReset}
          onCalculate={this.calculateValues}
        />
        <div className='px-[10%]  flex flex-col gap-6 mt-6 '>
          {/* <div className='border rounded-lg p-6 flex justify-between items-center'>
            <h1 className='text-3xl font-semibold font-serif'>
              Calculadora de Importaciones
            </h1>
            <div className='flex gap-6'></div>
          </div> */}
          <ArticlesList
            items={this.state.items}
            onUpdateArticle={this.handleUpdateArticle}
            onDeleteArticle={this.handleDeleteArticle}
            onAddArticle={this.handleAddArticle}
          />
          <LotCost
            lot={this.state.lot}
            pesoTotal={this.state.pesoTotal}
            onChangeLot={this.handleChangeLot}
          />
        </div>
      </div>
    );
  }
}

export default App;
