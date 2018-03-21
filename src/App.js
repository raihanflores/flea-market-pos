import React from "react";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Requests from "./pages/Requests";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/announcements" component={Announcements} />
      <Route exact path="/requests" component={Requests} />
    </div>
  </Router>
);

export default App;
