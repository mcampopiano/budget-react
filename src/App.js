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
          {/* wrap everything in envelope provider since NavBar needs access to it. If a separate 
          provider was invoked in application views, the state changes would be specific to that provider. */}
            <EnvelopeProvider>
              <NavBar />
              <ApplicationViews />
            </EnvelopeProvider>
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
