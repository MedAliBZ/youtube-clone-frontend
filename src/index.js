import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

ReactDOM.render(
  <BrowserRouter>
    <Routing/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
