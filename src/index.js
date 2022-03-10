import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data1 from './components/DataSets/Data1';
import Data2 from './components/DataSets/Data2';
import Data3 from './components/DataSets/Data3';
import Data4 from './components/DataSets/Data4';
import Data5 from './components/DataSets/Data5';
import Data6 from './components/DataSets/Data6';
import Data7 from './components/DataSets/Data7';
import Data8 from './components/DataSets/Data8';
import Data9 from './components/DataSets/Data9';
import Data10 from './components/DataSets/Data10';

const routing = (  
  <BrowserRouter>
      <Routes>
        <Route exact path="/"element={<App/>} />  
        <Route path="/Data1"element={<Data1/>} />
        <Route path="/Data2"element={<Data2/>} />  
        <Route path="/Data3"element={<Data3/>} />  
        <Route path="/Data4"element={<Data4/>} />  
        <Route path="/Data5"element={<Data5/>} />  
        <Route path="/Data6"element={<Data6/>} />  
        <Route path="/Data7"element={<Data7/>} />  
        <Route path="/Data8"element={<Data8/>} />  
        <Route path="/Data9"element={<Data9/>} />  
        <Route path="/Data10"element={<Data10/>} />          
      </Routes>
  </BrowserRouter> 
)  

ReactDOM.render(
 routing,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
