import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Other components go here */}
    </BrowserRouter>
  );
}

export default App;
