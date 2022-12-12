import './App.css';
import Field from './components/Field';

import svgX from './components/Field/x.svg';
import svgO from './components/Field/o.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const App = () => {
  const selector = useSelector(state => state.order);
  let player = svgX;

  if (selector === 'X') player = svgX;
  else player = svgO;

  return(
    <div className='tic-tac-toe'>
      <h1 className='title'>
        Ходит игрок: <img className='title__img' src={player}></img>
      </h1>
      <Field />
      <button className='btn-restart'></button>
    </div>
  );
}

export default App;
