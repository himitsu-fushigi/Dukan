import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'

// @cont3xt api
import ActiveSidebarDataLayer from "./Context/Sidebar/ActiveSidebarItem";

ReactDOM.render(
    <ActiveSidebarDataLayer>
    <App />
    </ActiveSidebarDataLayer>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
