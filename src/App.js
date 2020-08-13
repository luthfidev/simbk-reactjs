import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Sidebar } from './components/Layout';

import NotFound from './pages/_404.jsx';
import LoginScreen from './pages/Login.jsx';
import HomeScreen from './pages/dashboard/Home.jsx';
import StudentScreen from './pages/dashboard/Student.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;
    return (
      <>
        <BrowserRouter>
          <Switch>
              {!isLogin && (<> 
                <Route exact path='/' component={LoginScreen}/>
              </>)}
              {isLogin && (<> 
                <Sidebar>
                  <Route exact path='/home' component={HomeScreen}/>
                  <Route exact path='/student' component={StudentScreen}/>
                </Sidebar>
              </>)}
              <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;