import './App.css';
import Mensage from './Mensage';



const App = () => {

  return (
    <div className="App">
      <Mensage color='red' message='Estamos' />
      <Mensage color='yellow' message='Trabajando' />
      <Mensage color='green' message='En nosotros' />
    </div>
  );
}

export default App;
