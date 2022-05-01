import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import dayjs from 'dayjs';
function App() {
  const date = dayjs().format();
  return (

    <div className="App" >
      <Header />
      <Content />
      {date}
    </div>
  );
}

export default App;
