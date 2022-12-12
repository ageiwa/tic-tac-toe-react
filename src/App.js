import './App.css';
import Field from './components/Field';

const App = () => {
  return(
    <div className='tic-tac-toe'>
      <h1>Ходит игрок: Х</h1>
      <Field />
      <button className='btn-restart'></button>
    </div>
  );
}

export default App;
