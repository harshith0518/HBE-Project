import React from "react";
import {Routes as ReactRouterRoutes,Route} from "react-router-dom";
import '~@/App.css';
import LoginForm from './components/auth/login-form.component';
import RegisterForm from './components/auth/register-form.component';

function App() {
  
  return (
    <ReactRouterRoutes>
      <Route path="login" element = {<LoginForm/>}/>
      <Route path="register" element = {<RegisterForm/>}/>
    </ReactRouterRoutes>
  )
}

export default App;
