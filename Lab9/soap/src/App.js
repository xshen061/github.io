import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';

function App() {
  return (
   <Router>
    <div className="App">
        <Navbar />
		<div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
			<Route path="/Contact">
              <Contact />
            </Route>
			      <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
