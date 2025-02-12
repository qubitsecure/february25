import React from 'react';
import Sidebar from './sidebar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <div className="main">
        <Home />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
