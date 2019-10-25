import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/NavBar';

export default function App() {
  return (
    <Switch>
      <Navbar/>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}