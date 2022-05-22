import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { LateralbarComponent } from '../components/LateralBar/LateralbarComponent';
import { MainComponent } from '../components/MainComponent';
import { ProductsScreen } from '../components/ProductsScreen';
import { PurchaseScreen } from '../components/PurchaseScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div className="general__container">
                <LateralbarComponent />

                <Switch>
                    <Route path="/main">
                        <MainComponent />
                    </Route>
                    <Route path="/products">
                        <ProductsScreen />
                    </Route>
                    <Route path="/purchase">
                        <PurchaseScreen />
                    </Route>

                    <Redirect to="/main" />
                </Switch>
            </div>
        </Router>
    )
}
