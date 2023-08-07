import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
