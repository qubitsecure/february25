import './App.css';
import Sidebar from './Sidebar';
import Home from './home';

function App() {
const link = 'https://reactjs.org';

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
      <Home />
      <p>This is the Home component.</p>
      <a href={link}>React Documentation</a>
      </div>
    </div>
  );
}

export default App;
