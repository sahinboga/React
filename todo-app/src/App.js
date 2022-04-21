
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <section className='todoapp'>
        <Header/>
        <Main/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
