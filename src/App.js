import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Aside from './components/aside';
import Footer from './components/footer';


function App() {
  return ( 
    <div className="App">
      <Header />
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
