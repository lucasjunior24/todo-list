import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import history from './history'

import Todo from './todo/Todo'
import About from './about/About'

export default function Routes() {
    return (
        <Switch >
            <Route exact path='/' component={Todo}/>
            <Route path='/about'  component={About} />
            <Redirect from='*' to='/' />
        </Switch>
    );
}

