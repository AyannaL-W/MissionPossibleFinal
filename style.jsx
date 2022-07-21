import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

function Hello() {
    return <h1>Hello World!</h1>;
  }

  ReactDOM.render(<Hello />, document.getElementById('idk123'))