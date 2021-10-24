import React from 'react'

// @components
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// @pages
import Home from './Pages/Home/Home'
import ProductFocused from './Pages/ProductFocused/ProductFocused'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={ProductFocused}/>
            </Switch>
        </BrowserRouter>
    )
}
