import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Home from "./Components/Pages/Home";
import ServerDetails from "./Components/Pages/ServerDetails";

import TableLoader from "./Components/Helpers/TableLoader";
import PrimarySearchAppBar from "./Components/Layout/PrimaryNavbar";
import GetData from "./Components/GetData";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddServer from "./Components/Pages/AddServer";
import Login from "./Components/Pages/Login";
import EditServer from "./Components/Pages/EditServer";
import ViewServer from "./Components/Pages/ViewServer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const onLogin = () => {
    setLoggedIn(true);
  };
  return (
    // <Router>
    <div className="App">
      {/* <Navbar /> */}
      {/* <PrimarySearchAppBar /> */}
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/editServer/:id" component={EditServer} />
        <Route exact path="/viewServer/:id" component={ViewServer} />
        <Route exact path="/addServer" component={AddServer} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          {loggedIn ? <Redirect to="/Home" /> : <Login />}
        </Route>
      </Switch>
      {/* <EditServer />
       */}
      {/* <AddServer /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <div className="container"></div> */}
      {/* <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12 ml-auto">
          <TableLoader />
          <GetData />
        </div>
      </div> */}
    </div>
    // </Router>
  );
}

export default App;
