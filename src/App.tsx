import React from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import dayjs from 'dayjs';
import { useProjects } from './hooks'
function App() {
  const date = dayjs().format('DD/MM/YYYY');


  const projects = useProjects();
  console.log(projects);

  return (

    <div className="App" >
      <Header />
      <Content />
      {date}
    </div>
  );
}

export default App;
