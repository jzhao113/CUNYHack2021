import logo from './logo.svg';
import './App.css';
import UserForm from './components/forms/UserForm'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Bookmarks from './components/Bookmarks'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/forms/Login'

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;
