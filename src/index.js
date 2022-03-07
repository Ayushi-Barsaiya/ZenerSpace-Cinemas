import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import Home from './components/Home';


const routing = (  
  <BrowserRouter>
  
      <Routes>
        <Route exact path="/"element={<App/>} />  
        <Route path="/Home"element={<Home/>} />  
        <Route path="/ShowDetails"element={<ShowDetails/>} />  
      </Routes>
 
  </BrowserRouter> 
)  


ReactDOM.render(
 routing,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
