//import { useEffect } from 'react';
import './App.css';
import Game from './components/game/game';
import Header from './components/header/header';
//import { useTg } from './components/hooks/useTg';
import Lobby from './components/lobby/lobby';
import { Route, Routes } from 'react-router-dom';

function App() {
  //const {tg} = useTg();
// eslint-disable-next-line react-hooks/exhaustive-deps
  //useEffect(()=>{
   // tg?.ready();
  //})

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<Lobby/>}></Route>
        <Route path={'game'} element={<Game/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
