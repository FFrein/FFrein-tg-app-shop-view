//import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import { useTg } from './components/hooks/useTg';

function App() {
  const {onToggleButton} = useTg();
  
/*
  useEffect(()=>{
    tg?.ready();
  },[])
*/
  return (
    <div className="App">
      LOVE
      <Header></Header>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
