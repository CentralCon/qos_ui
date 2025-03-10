import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import GuestPage from "./pages/GuestPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SiteMapPage from "./pages/SiteMapPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sitemap" element={<SiteMapPage />} />
      </Routes>
    </div>
  );
}



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




import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(""); // State to manage input value

  // Handle change function
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>React Form Example</h1>
     
      <form>
        {/* Label and Input */}
        <div>
          <label htmlFor="username">Username:</label> {/* Linking label to input */}
          <input
            type="text"
            id="username" // Same as htmlFor in label
            name="username"
            value={inputValue} // Binding state to input field
            onChange={handleChange} // Update state on input change
          />
        </div>

        {/* Another Label and Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;




