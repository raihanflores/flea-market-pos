import React from "react";
import Staff from "./pages/Staff";
import Sick from "./pages/Sick";
import Vacation from "./pages/Vacation";
import Announcements from "./pages/Announcements";
import Requests from "./pages/Requests";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Staff} />
      <Route exact path="/vacation" component={Vacation} />
      <Route exact path="/sick" component={Sick} />
      <Route exact path="/announcements" component={Announcements} />
      <Route exact path="/requests" component={Requests} />
    </div>
  </Router>
);

export default App;
