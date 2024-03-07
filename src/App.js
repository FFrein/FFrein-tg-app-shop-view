import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import { useTg } from './components/hooks/useTg';

function App() {
  const {tg, onToggleButton} = useTg();
  

  useEffect(()=>{
    tg?.ready();
  },[])

  return (
    <div className="App">
      <Header>фыв</Header>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
