import './App.css';
import ContentComponent from './components/ContentComponent';
import NavBer from './components/NavBer';

function App() {
  return (
    <main className='main'>
      <div className='Container'>
      <NavBer />
      <ContentComponent />
      </div>
    </main>
  );
}

export default App;
