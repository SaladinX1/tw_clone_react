
import './App.css';
import Header from '../src/components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Games from './components/Games/Games';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Games />
    </div>
  );
}

export default App;
