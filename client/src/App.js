import './App.css';
import Button from './components/base/button';
import Input from './components/base/input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Input label={"Name"} onChange={() => console.log("Change")}/>
        <Button text={"Button"} onClick={() => console.log("Clicked")}/>
      </main>
    </div>
  );
}

export default App;
