import React, { Component } from 'react';
import calculate from './logic/calculate';
import ArticlesList from './modules/ArticlesList';
import LotCost from './modules/LotCost';

export class App extends Component {
  state = {
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
        otros: 0,
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
                  : parseInt(event.target.value),
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
          [event.target.name]: parseInt(event.target.value),
        },
      },
    });
  };

  calculateValues = () => {
    const newState = calculate(this.state);
    this.setState({ ...newState });
  };

  reIndex = (prevArr) => {
    return prevArr.map((elem, index) => {
      elem.index = index;
      return elem;
    });
  };

  render() {
    return (
      <div className='bg-slate-50 px-[10%] h-screen flex flex-col gap-6'>
        <h1>Cost calculator</h1>
        <button onClick={this.calculateValues}>Calcular</button>
        <LotCost lot={this.state.lot} onChangeLot={this.handleChangeLot} />
        <ArticlesList
          items={this.state.items}
          onUpdateArticle={this.handleUpdateArticle}
          onDeleteArticle={this.handleDeleteArticle}
          onAddArticle={this.handleAddArticle}
        />
      </div>
    );
  }
}

export default App;
