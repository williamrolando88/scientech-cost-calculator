import React, { Component } from 'react';
import ArticlesList from './modules/ArticlesList';
import LotCost from './modules/LotCost';

export class App extends Component {
  state = {
    items: [
      {
        id: 0,
        descripcion: 'Articulo0',
      },
      {
        id: 1,
        descripcion: 'Articulo1',
      },
    ],
  };

  handleAddArticle = () => {
    console.log('new article');
  };

  handleUpdateArticle = (event, id) => {
    console.log(event, id);
  };

  handleDeleteArticle = (id) => {
    console.log(id);
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
