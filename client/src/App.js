import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import NavBar from "./components/navbar";
import login from "./views/login/login";
import register from "./views/register/register";
import profile from "./views/profile/profile";
import ProfileUpdateView from "./views/profile-update/profile-update";
import live404 from "./views/404/404";
import PrivateRoute from "./components/private-routes/private-routes.component";
import AuthUser from "./components/auth-user/auth-user.component";


// import store
import { StoreProvider } from "./store/store";


const App = (props) => {




  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <Switch>
            <AuthUser exact path="/" component={login} />
            <AuthUser exact path="/login" component={login} />
            <Route exact path="/register" component={register} />
            <Route exact path='/404' component={live404} />
            <PrivateRoute exact path="/profile" component={profile} />
            <Route exact path="/profile/update" component={ProfileUpdateView} />
            <Route component={live404} />
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );


}

export default App;
