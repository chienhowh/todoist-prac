import React, { useContext } from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectProvider } from './context';
function App() {
  return (
    <ProjectProvider>
      <div className="App" >
        <Header />
        <Content />
      </div>
    </ProjectProvider>
  );
}

export default App;
