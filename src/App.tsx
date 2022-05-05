import React, { useState } from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectProvider, SelectedProjectProvider } from './context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <SelectedProjectProvider>
      <ProjectProvider>
        <main
          className={isDarkMode ? 'darkmode' : ''}
        >
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Content />
        </main>
      </ProjectProvider>
    </SelectedProjectProvider>
  );
}

export default App;
