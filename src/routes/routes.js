import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Personagens }  path="/Personagens" />
       </BrowserRouter>
   )
}

export default Routes;