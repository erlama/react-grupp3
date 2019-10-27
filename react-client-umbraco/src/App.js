import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Employee} from './Pages/Empoyee';
import {Country} from './Pages/Country';
import {Company} from './Pages/Company';
import Navbar from './Components/NavBar';

class App extends Component {
  render() {
     return (
      <Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/employee" component={Employee} />
          <Route path="/country" component={Country} />
          <Route path="/company" component={Company} />
        </Switch>
      </Navbar>
      
  )
  }
 
}

export default App;