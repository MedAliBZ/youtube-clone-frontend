import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import App from './App'


export default function Routing() {
    return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/search' component={App}/>
    </Switch>
    )
}
