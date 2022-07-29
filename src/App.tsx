import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AppRouter from './AppRouter';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './style/global.css';


function App() {
  return (
    <>
      <div className="container-app">
        <AppRouter />
      </div>
    </>
  )
}

export default App
