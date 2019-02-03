import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import logo from './logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  public render() {
    return (
      <Wrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
      </Wrapper>
    );
  }
}

export default App;
