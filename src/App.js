import Sidebar from './Sidebar';
import Home from './Home';


function App() {
const link = 'https://reactjs.org';

  return (
    <div className="App">
      <Sidebar />
      <div className="title">
      <Home />
      <div className="header">
      <p>This is the Home component.</p>
      </div>
      <a href={link}>React Documentation</a>
      </div>
      <div className="footer">
        <div className="subtext">
      <p>INFORMATION HERE</p>
      </div>
    </div>
    </div>


  );
}

export default App;
