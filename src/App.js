import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Service />
    </div>
  );
}

export default App;
