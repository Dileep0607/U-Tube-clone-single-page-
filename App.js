import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Rvideos from './components/Rvideos'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_page'>
        <Sidebar />
        <Rvideos />
      </div> 
    </div>
  );
}

export default App;
