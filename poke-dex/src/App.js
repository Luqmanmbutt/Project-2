import './App.css';
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <div className='home-page'>
        <div className='title-container'>
          <h1 className='header'>Pokè Dex</h1>
        </div>
        <HomePage />
      </div>
    </>
    );
  }

export default App;