import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Service />
        <Footer />
    </div>
  );
}

export default App;
