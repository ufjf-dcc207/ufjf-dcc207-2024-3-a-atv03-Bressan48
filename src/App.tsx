
import Animal from './Animal';
import './App.css'
import Exibicao from './Exibicao';

function App() {
  return <div className='app'>
    <Exibicao abertura={new Date("2024-12-06T08:00:00.00-03:00")}
    fechamento={new Date("2024-12-06T12:00:00.00-03:00")} cercado = "A1"/>
    <Animal icone='🦁' nome='Leão' peso={190} extincao/>
    <Animal icone='🦒' nome='Girafa' peso={1200} extincao/>
    <Exibicao abertura={new Date("2024-12-06T08:00:00.00-03:00")}
    fechamento={new Date("2024-12-06T17:00:00.00-03:00")} cercado = "B1"/>
    <Animal icone='🦜' nome='Papagaio' peso={0.120}/>
  </div>;
}

export default App
