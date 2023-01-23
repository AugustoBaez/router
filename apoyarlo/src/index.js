import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonCard from './PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard firstName={"Augusto"} lastName={"Baez"} age={22} hairColor={"Brown"} />
    <PersonCard firstName={"Elon"} lastName={"Musk"} age={50} hairColor={"Brown"} />
    <PersonCard firstName={"Jeff"} lastName={"Bezos"} age={60} hairColor={"no hair"} />
    <PersonCard firstName={"Lex"} lastName={"Fridman"} age={32} hairColor={"Black"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
