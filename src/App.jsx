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
  handleUpdateArticle = (event, id) => {
    console.log(event, id);
  };

  render() {
    return (
      <div className='bg-slate-50 px-[10%] h-screen flex flex-col gap-6'>
        <h1>Cost calculator</h1>
        <LotCost />
        <ArticlesList
          items={this.state.items}
          updateArticle={this.handleUpdateArticle}
        />
      </div>
    );
  }
}

export default App;
