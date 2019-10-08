import React from 'react';
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PrivateRout} from "./components/Login/PrivateRout";
import User from "./components/Data/User/User";



function App() {
  return (
      <BrowserRouter >
        <div className="app-wraper">
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRout exact path="/Account" component={Account}   />
                <Route exact path="/User" component={User} />
                {/*<PrivateRout exact path="" component={}/>*/}
                {/*<Route exact path="/Account" component={Account} />*/}
            </Switch>
        {/*<Header/>*/}
        {/*<Login/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
