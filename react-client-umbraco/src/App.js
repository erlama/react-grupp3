import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Employee} from './Pages/Empoyee';
import {Country} from './Pages/Country';
import {Company} from './Pages/Company';
import {NavBar} from './Components/NavBar';
import {Layout} from './Components/Layout';
import {Jumbotron} from './Components/Jumbotron';

class App extends Component {
  render() {
     return (
      <React.Fragment>
        <NavBar/>
        <Jumbotron/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/employee" component={Employee} />
              <Route path="/country" component={Country} />
              <Route path="/company" component={Company} />
            </Switch>
          </Layout>
      </React.Fragment>
  )
  }
 
}

export default App;