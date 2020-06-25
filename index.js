import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Ice cream" price="12.00" />
    <Item name="Beer"
    price="20.00" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);