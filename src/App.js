import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    // <div className="App">
    <div className="row">
      <div className="col-2">
        <Home />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col"></div>
          <Header />
        </div>
        <div className="col">
          <Body />
        </div>
      </div>
    </div>

  );
}

export default App;
