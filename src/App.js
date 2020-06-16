import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'


import Header from './common/Header'
import Navbar from './common/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
