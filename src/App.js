import './App.css';
import Field from './components/Field';

import svgX from './components/Field/x.svg';
import svgO from './components/Field/o.svg';

const App = () => {
  let player = svgX;

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
