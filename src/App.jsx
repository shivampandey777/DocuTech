import './App.css'
import Home from './pages/Home'
import LoginWarning from './pages/LoginWarning'
import Nav from './components/Nav'

const App = () => {
  return (
      <div>
          <LoginWarning />,
          <Nav />,
          <div className="max-w-7xl mx-auto p-6">
          <Home />

          </div>
      </div>
  );
};

export default App
