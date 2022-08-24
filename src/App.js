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
import Github from './Pages/Github';
import NodeJS from './Pages/NodeJS';
import ReactJS from './Pages/ReactJS';
import MongoDB from './Pages/MongoDB';
import NextJS from './Pages/NextJS';
import Footer from './components/Footer/Footer';


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
            <Route path='/advance-javascript' exact>
              <Git/>
            </Route>
            <Route path='/github' exact>
              <Github/>
            </Route>
            <Route path='/nodejs' exact>
              <NodeJS/>
            </Route>
            <Route path='/reactjs' exact>
              <ReactJS/>
            </Route>
            <Route path='/mongodb' exact>
              <MongoDB/>
            </Route>
            <Route path='/nextjs' exact>
              <NextJS/>
            </Route>
          </Switch>
        </main>
        {/* <Footer/> */}
        <Redirect to="/"/>
      </Router>
    </>
  );
}

export default App;
