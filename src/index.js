import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DiaryApp from './DiaryApp';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <DiaryApp />
  </BrowserRouter>,
  document.getElementById('root')
);
