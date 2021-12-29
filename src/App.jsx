import React, { Component } from 'react';
import ArticlesList from './modules/ArticlesList';
import LotCost from './modules/LotCost';

export class App extends Component {
  state = {
    items: [],
    lote: {
      input: {
        fleteImpuestos: 0,
        tramiteImportacion: 0,
        fleteReal: 0,
        agenteAduanero: 0,
        logisticaInterna: 0,
        ivaOrigen: 0,
        fleteOrigen: 0,
        otros: 0,
      },
      output: {
        ivaCourier: 0,
        totalLogisticaInterna: 0,
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
    console.log(event, index);
  };

  handleDeleteArticle = (index) => {
    let items = this.state.items.filter((item) => item.index !== index);
    items = this.reIndex(items);
    this.setState({ items });
  };

  handleChangeLot = (e) => {
    console.log(e.target.name);
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
        <LotCost lote={this.state.lote} onChangeLot={this.handleChangeLot} />
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
