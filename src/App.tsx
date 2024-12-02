
import Animal from './Animal';
import './App.css'

function App() {
  return <div className='app'>
    <Animal icone='🦁' nome='Leão' peso={190} extincao/>
    <Animal icone='🦓' nome='Zebra' peso={130} extincao/>
    <Animal icone='🦒' nome='Girafa' peso={1200}/>
  </div>;
}

export default App
