import React, { Component } from 'react';
import ArticlesList from './modules/ArticlesList';
import LotCost from './modules/LotCost';

export class App extends Component {
  state = {
    items: [],
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
    console.log(event, index);
  };

  handleDeleteArticle = (index) => {
    let items = this.state.items.filter((item) => item.index !== index);
    items = this.reIndex(items);
    this.setState({ items });
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
        <LotCost />
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
