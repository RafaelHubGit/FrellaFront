import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { MainComponent } from '../components/MainComponent';

export const AppRouter = () => {

    return (
        <Router>
            <div>

                <Switch>
                    <Route path="/main">
                        <MainComponent />
                    </Route>

                    <Redirect to="/main" />
                </Switch>
            </div>
        </Router>
    )
}
