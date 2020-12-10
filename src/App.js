import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/LuxuryHotels" exact component={Home} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
