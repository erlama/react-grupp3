import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Employee} from './Pages/Empoyee';
import {Country} from './Pages/Country';
import {Company} from './Pages/Company';
import {NavBar} from './Components/NavBar';
import {Layout} from './Components/Layout';
import {Jumbotron} from './Components/Jumbotron';
import { getAccessToke } from './Umbraco-API';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: [],
      sponsors: []
    }
  }

  componentDidMount(){
    getAccessToke('w.tamim@hotmail.com', '1234567890')
    .then((token) => {
      this.getContent(token);
    });
  }
  render() {
     return (
      <React.Fragment>
        <NavBar/>
        <Jumbotron/>
          <Layout>
            <Switch>
              <Route data={this.state.content} exact path="/" component={Home} />
              <Route path="/employee" component={Employee} />
              <Route path="/country" component={Country} />
              <Route path="/company" component={Company} />
            </Switch>
          </Layout>
      </React.Fragment>
  )
  };

  getContent(token){
    fetch('http://localhost:65022', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      debugger
      this.setState({
        content: data._embedded.content['0'].properties,
        sponsors: JSON.parse(data._embedded.content['0'].properties.sponsors),
      });
    });
  }
}



export default App;