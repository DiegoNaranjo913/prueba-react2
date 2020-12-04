import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'
import Car from './pages/car'
import Ship from './pages/ship'
import Plane from './pages/plane'
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/inicio" exact component={Home} />
                    <Route path="/carro" exact component={Car} />
                    <Route path="/barco" exact component={Ship} />
                    <Route path="/avion" exact component={Plane} />
                    <Redirect from="/" to="/inicio" />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;