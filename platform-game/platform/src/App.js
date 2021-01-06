import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Cohort from './pages/Cohort'
import Profile from './pages/Profile'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/Profile" component={Profile} />
                <Route path="/Cohort" component={Cohort} />
                <Route path="/Games" component={Games} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App
