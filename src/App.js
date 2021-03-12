import logo from './logo.svg';
import './App.css';
import { NavBar } from "./Components/NavBar"
import { ApplicationViews } from "./Components/ApplicationViews"
import { Login } from './Components/auth/Login';
import { Register } from './Components/auth/Register';
import { Redirect, Route } from 'react-router';
import { EnvelopeProvider } from './Components/envelopes/EnvelopeProvider';

function App() {
  return (
    <>
      <Route render={() => {
        if (localStorage.getItem("budget_user_id")) {
          return <>
            <EnvelopeProvider>
              <NavBar />
            </EnvelopeProvider>
            <ApplicationViews />
          </>
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/login" render={() => {
        if (localStorage.getItem("budget_user_id")) {
          return <Redirect to="/" />
        } else {
          return <Login />
        }
      }} />
      <Route path="/register" render={() => {
        if (localStorage.getItem("budget_user_id")) {
          return <Redirect to="/" />
        } else {
          return <Register />
        }
      }} />
    </>
  );
}

export default App;
