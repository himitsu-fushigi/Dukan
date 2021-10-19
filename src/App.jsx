import React from 'react'

// @components
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// @pages
import Home from './Pages/Home/Home'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
