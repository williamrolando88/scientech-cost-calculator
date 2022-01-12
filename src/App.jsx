import React, { Component } from 'react';
import calculate from './logic/calculate';
import ArticlesList from './modules/ArticlesList';
import Header from './modules/Header';
import LotCost from './modules/LotCost';

import logo from './icons/logo.png';
import SavePopUp from './modules/SavePopUp';
import RetrievePopUp from './modules/RetrievePopUp';

export class App extends Component {
  state = {
    saving: false,
    retrieving: false,
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
        fleteImpuestos: 0,
      },
      output: {
        ivaCourier: 0,
        totalLogisticaInt: 0,
        fodinfa: 0,
        arancel: 0,
        ivaAduana: 0,
        totalAduana: 0,
        isd: 0,
        totalFOBItems: 0,
        totalCIFItems: 0,
      },
    },
  };

  handleReset = () => {
    this.setState({
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
          fleteImpuestos: 0,
        },
        output: {
          ivaCourier: 0,
          totalLogisticaInt: 0,
          fodinfa: 0,
          arancel: 0,
          ivaAduana: 0,
          totalAduana: 0,
          isd: 0,
          totalFOBItems: 0,
          totalCIFItems: 0,
        },
      },
      pesoTotal: 0,
    });
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
      peso: 1,
      precioUnitario: 1,
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

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.items !== this.state.items) {
      this.setState({
        pesoTotal: this.state.items
          .map((item) => item.peso * item.cantidad)
          .reduce((a, b) => a + b, 0),
      });
    }
  };

  handleSave = (proveedor, descripcion) => {
    this.setState({ saving: false });

    const {
      items,
      lot: { input },
    } = this.state;

    if (items.length === 0) {
      alert('Ingrese articulos');
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
      index: localData.length,
      date: new Date(),
      proveedor,
      descripcion,
      items: itemsInput,
      lotInput: input,
    };

    const newData = [...localData, newElement];

    localStorage.setItem('data', JSON.stringify(newData));
    this.handleReset();
  };

  getLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('data'));
    return localData ? localData : [];
  };

  handleSelectItem = (index) => {
    this.setState({ retrieving: false });
    const retrievedData = this.getLocalStorage()[index];
    this.setState({
      items: retrievedData.items,
      lot: {
        input: retrievedData.lotInput,
        output: {
          ivaCourier: 0,
          totalLogisticaInt: 0,
          fodinfa: 0,
          arancel: 0,
          ivaAduana: 0,
          totalAduana: 0,
          isd: 0,
          totalFOBItems: 0,
          totalCIFItems: 0,
        },
      },
    });
  };

  render() {
    return (
      <div className="bg-slate-50">
        <Header
          onOpenSaving={() => {
            this.setState({ saving: true });
          }}
          onOpenRetrieving={() => {
            this.setState({ retrieving: true });
          }}
          logo={logo}
          onReset={this.handleReset}
          onCalculate={this.calculateValues}
        />
        <main className="px-[10%] flex flex-col gap-6 pt-24 h-screen">
          <LotCost
            lot={this.state.lot}
            pesoTotal={this.state.pesoTotal}
            onChangeLot={this.handleChangeLot}
          />
          <ArticlesList
            items={this.state.items}
            onUpdateArticle={this.handleUpdateArticle}
            onDeleteArticle={this.handleDeleteArticle}
            onAddArticle={this.handleAddArticle}
          />
        </main>
        <SavePopUp
          onSave={this.handleSave}
          onCloseSaving={() => {
            this.setState({ saving: false });
          }}
          saving={this.state.saving}
        />
        <RetrievePopUp
          onCloseRetrieving={() => {
            this.setState({ retrieving: false });
          }}
          retrieving={this.state.retrieving}
          onFetchData={this.getLocalStorage}
          onSelectItem={this.handleSelectItem}
        />
      </div>
    );
  }
}

export default App;
