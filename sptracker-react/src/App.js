import './App.css';
import { Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';  
import Login from './pages/login/login';
import Sptracker from './pages/sptracker/sptracker';
import ChangePassword from './pages/changePassword/changePassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path={"/login"} component={Login}></Route>
            <Route exact path={"/sptracker"} component={Sptracker}></Route>
            <Route exact path={"/changePassword"} component={ChangePassword}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
