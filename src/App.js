import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import User from './components/User'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>
            <Header login/>
            <LoginForm />
          </Route>
          <Route path='/user'>
            <Header userHeader />
            <User />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}
  

export default App;
