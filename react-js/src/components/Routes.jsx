import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import AuxContaktor from "../pages/Auxcontactor"

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/adige' component={Customers}/>
            <Route path='/auxkontaktor' component={AuxContaktor}/>
        </Switch>
    )
}

export default Routes