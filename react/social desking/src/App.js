import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/homepage" exact component={Homepage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
