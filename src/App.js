import styled from "styled-components"
import React from 'react'
import logo from './logo.svg'
import './App.css'

const Boo = styled.div`
  color: red;
`
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Boo> HELLO WORLD </Boo>
    </div>
  );
}

export default App
