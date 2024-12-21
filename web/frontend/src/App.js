import logo from './logo.svg';
import './App.css';
import TimerForm from './components/TimerForm';
import TimerList from './components/TimerList';
function App() {
  return (
    <div className="App">
     {/* <HomePage /> */}
     <TimerForm />
    <TimerList />
    </div>
  );
}

export default App;
