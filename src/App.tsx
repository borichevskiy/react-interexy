import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ButtonComponent from "./components/Button";
import Main from "./components/Main";
import {ProductPage} from "./pages/ProductPage";
import {Accordeon} from "./components/Accordeon";

function App() {
  return (
      <Routes>
          <Route path="/main" element={<Main/>}/>
          <Route path='/products' element={<ProductPage/>}></Route>
      </Routes>
  );
}

export default App;
