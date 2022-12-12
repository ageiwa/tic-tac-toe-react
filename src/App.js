import './App.css';
import Field from './components/Field';

import { legacy_createStore } from 'redux';
import store from './store';

import svgX from './components/Field/x.svg';
import svgO from './components/Field/o.svg';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [order, setOrder] = useState(svgX);

  const storeRedux = legacy_createStore(store);
  storeRedux.subscribe(() => {
    // if (storeRedux.getState().order === 'X') setOrder(svgX);
    // else setOrder(svgO);

    
  });

  useEffect(() => {
    console.log(storeRedux.getState())
  })
  

  return(
    <div className='tic-tac-toe'>
      <h1 className='title'>
        Ходит игрок: <img className='title__img' src={order}></img>
      </h1>
      <Field />
      <button className='btn-restart'></button>
    </div>
  );
}

export default App;
