import React from "react";
import {Routes as ReactRouterRoutes,Route} from "react-router-dom";
import '~@/App.css';
import LoginForm from './components/login-form.component';
import RegisterForm from './components/register-form.component';
import Backend from "./components/Backend.component";
import Dashboard from "./components/Dashboard";
function App() {
  
  return (
    <ReactRouterRoutes>
      <Route path="login" element = {<LoginForm/>}/>
      <Route path="register" element = {<RegisterForm/>}/>
      <Route path="Backend" element = {<Backend/>}/>
      <Route path="dashboard" element = {<Dashboard/>}/>
    </ReactRouterRoutes>
  )
}

export default App;
