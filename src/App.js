import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Html from './Pages/Html';
import Css from './Pages/Css';
import JavaScript from './Pages/Javascript';
import Git from './Pages/Git';


function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <main>
          <Switch>
            <Route path='/' exact>
              <Html/>
            </Route>
            <Route path='/css' exact>
              <Css/>
            </Route>
            <Route path='/javascript' exact>
              <JavaScript/>
            </Route>
            <Route path='/git' exact>
              <Git/>
            </Route>
          </Switch>
        </main>
        <Redirect to="/"/>
      </Router>
    </>
  );
}

export default App;
