import './App.css'
import Home from './pages/Home'
import LoginWarning from './pages/LoginWarning'
import Nav from './components/Nav'

const App = () => {
  return (
      <div>
          <LoginWarning />
         
          <Home />

        
      </div>
  );
};

export default App
