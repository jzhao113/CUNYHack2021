import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import Bookmarks from './components/Bookmarks'
import Profile from './components/Profile'
import Login from './components/forms/Login'
import Register from './components/forms/Register'
import ApplicantForm from './components/forms/ApplicantForm'
import EmployerForm from './components/forms/EmployerForm'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/applicantform" component={ApplicantForm} />
          <Route path="/employerform" component={EmployerForm} />
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;
