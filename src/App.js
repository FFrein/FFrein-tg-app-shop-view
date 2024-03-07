import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import { useTg } from './components/hooks/useTg';

function App() {
  const {Ready, onToggleButton} = useTg();

  useEffect(()=>{
    Ready();
  },[])

  return (
    <div className="App">
      <Header>фыв</Header>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
