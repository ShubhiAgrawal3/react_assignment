import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import LogIn from './components/Login';

function App() {
  return (
    <div className="App">
      <div className='outer'>
        <div className='inner'>
        <Registration></Registration>
    
        </div>
      </div>
      
    </div>
  );
}
 
export default App;
