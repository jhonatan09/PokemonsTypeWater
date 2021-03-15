import React from 'react';
import {DataContextProvider} from './Store'
import Main from './Pages/main';
import {BrowserRouter as Router} from 'react-router-dom';
import './Style/allStyles.scss';


function App() {
  return (
    <DataContextProvider>
      <Router>
        <Main />
      </Router>
    </DataContextProvider>
  );
}

export default App;
