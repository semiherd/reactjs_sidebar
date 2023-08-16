import './App.css';
import logo from './logo.jpeg';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <img className="logo" src={logo} />
        <label className="hamburger-menu">
          <input type="checkbox" />
        </label>
        <nav className="sidebar">
          <div>About</div>
          <div>Services</div>
          <div>Careers</div>
          <div>Contact</div>
        </nav>
      </div>
      <div className="app-body">

      </div>
    </div>
  );
}

export default App;
