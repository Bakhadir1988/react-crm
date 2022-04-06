import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
