import React, { Component } from 'react';
import calculate from './logic/calculate';
import ArticlesList from './modules/ArticlesList';
import LotCost from './modules/LotCost';

export class App extends Component {
  state = {
    proveedor: '',
    items: [
      {
        index: 0,
        descripcion: 'Test item 1',
        cantidad: 2,
        peso: 0.5,
        precioUnitario: 20,
        arancel: 5,
        margen: 20,
      },
      {
        index: 1,
        descripcion: 'Test item 2',
        cantidad: 5,
        peso: 1.5,
        precioUnitario: 15.99,
        arancel: 15,
        margen: 15,
      },
    ],
    lot: {
      input: {
        fleteImpuestos: 12,
        tramiteImportacion: 40,
        fleteReal: 10,
        agenteAduanero: 40,
        logisticaInterna: 20,
        ivaOrigen: 7,
        fleteOrigen: 45,
        comisionBancaria: 0,
      },
      output: {
        ivaCourier: 0,
        totalLogisticaInt: 0,
        fodinfa: 0,
        arancel: 0,
        ivaAduana: 0,
        totalAduana: 0,
        isd: 0,
        pesoTotal: 0,
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
      items: [],
      lot: {
        input: {
          fleteImpuestos: 0,
          tramiteImportacion: 0,
          fleteReal: 0,
          agenteAduanero: 0,
          logisticaInterna: 0,
          ivaOrigen: 0,
          fleteOrigen: 0,
          comisionBancaria: 0,
        },
        output: {
          ivaCourier: 0,
          totalLogisticaInt: 0,
          fodinfa: 0,
          arancel: 0,
          ivaAduana: 0,
          totalAduana: 0,
          isd: 0,
          pesoTotal: 0,
        },
      },
    });
  };

  handleSave = () => {
    const {
      proveedor,
      items,
      lot: { input },
      totalFOBItems,
    } = this.state;

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

    console.log(itemsInput, input, totalFOBItems, new Date());
  };

  handleChangeProveedor = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className='bg-slate-50 px-[10%] h-screen flex flex-col gap-6'>
        <h1>Cost calculator</h1>
        <LotCost lot={this.state.lot} onChangeLot={this.handleChangeLot} />
        <ArticlesList
          items={this.state.items}
          onUpdateArticle={this.handleUpdateArticle}
          onDeleteArticle={this.handleDeleteArticle}
          onAddArticle={this.handleAddArticle}
        />
        <div>
          <h2>Controles</h2>
          <button onClick={this.calculateValues}>Calcular</button>
          <button onClick={this.handleReset}>Reset</button>
          <input
            name='proveedor'
            type='text'
            placeholder='Ingrese un proveedor'
            value={this.state.proveedor}
            onChange={this.handleChangeProveedor}
          />
          <button onClick={this.handleSave}>Guardar</button>
        </div>
      </div>
    );
  }
}

export default App;
