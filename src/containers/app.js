import React from 'react'
import {Route, Switch } from 'react-router-dom'

import {App} from '../components/app'
import {Task1Container} from './task1'


export const AppContainer = () => {
    return(
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/task1' component={Task1Container} />
        </Switch>
    )
}