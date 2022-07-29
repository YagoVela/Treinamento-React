import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
