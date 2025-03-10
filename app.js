import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggingPage from './components/LoggingPage';
import GuestPage from './components/GuestPage';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the QoS UI</h1>
        {/* Navigation links to the different sections */}
        <nav>
          <a href="/">Logging</a> | <a href="/guest">Guest</a> | <a href="/admin">Admin</a>
        </nav>

        {/* Dynamic Routing */}
        <Switch>
          <Route exact path="/" component={LoggingPage} />
          <Route path="/guest" component={GuestPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


