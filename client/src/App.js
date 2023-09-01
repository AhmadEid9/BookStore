import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/base/navbar';
import Login from './components/pages/loginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>        
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
