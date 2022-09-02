import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { loadDataMain } from '../actions/loadData';
import { CuentaScreen } from '../components/CuentaScreen';
import { LateralbarComponent } from '../components/LateralBar/LateralbarComponent';
import { MainComponent } from '../components/MainComponent';
import { ProductsScreen } from '../components/ProductsScreen';
import { PurchaseScreen } from '../components/PurchaseScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( loadDataMain() );
    }, [ dispatch ]);

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
                    <Route path="/account">
                        <CuentaScreen /> 
                    </Route>

                    <Redirect to="/main" />
                </Switch>
            </div>
        </Router>
    )
}
