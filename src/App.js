import logo from './logo.svg';
import './App.css';
import Area from './components/Area'
import {ZombieDepoProvider} from "./components/Area/zombieDepo";
import {BombsDepoProvider} from "./components/Area/bombsDepo";

function App() {
  return (
    <div className="App">
      <div>
        <BombsDepoProvider>
          <ZombieDepoProvider>
            <Area width="7" height="7"/>
          </ZombieDepoProvider>
        </BombsDepoProvider>
      </div>
    </div>
  );
}

export default App;
