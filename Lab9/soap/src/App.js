import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Course from "./components/pages/Course";
import Catalog from "./components/pages/Catalog";
import Pricing from "./components/pages/Pricing";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OnBoard from "./components/pages/OnBoard";
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import Divider from "@material-ui/core/Divider";
import Checkout from "./components/pages/Checkout";
import ChatIcon from '@material-ui/icons/Chat';
import Fab from "@material-ui/core/Fab";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

          
              <Switch>
              
                <Route exact path="/">
                  <Home />
                </Route>
                <Container>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/catalog">
                  <Catalog />
                </Route>
                <Route path="/pricing">
                  <Pricing />
                </Route>
                <Route path="/courses/:id">
                  <Course />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/onboarding">
                  <OnBoard />
                </Route>
                <Route path="/checkout/:courseId">
                  <Checkout></Checkout>
                </Route>
                </Container>
              </Switch>
          
          <Divider></Divider>

        <Container>
         <Footer></Footer>
        </Container>

        <Fab style={{position:'fixed',bottom:"2rem",right:"2rem",zIndex:"1000"}} color="primary" aria-label="add">
        <ChatIcon />
</Fab>
      </Router>
    </div>
  );
}

export default App;
