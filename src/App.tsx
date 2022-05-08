import React, { useState } from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectProvider, SelectedProjectProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
