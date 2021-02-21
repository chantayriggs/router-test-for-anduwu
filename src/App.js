import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./home"
import About from "./about"

const App = () => {
  return (
    <Router>
      <div className="App">
        hello
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
      </Switch>
    </Router>
  );
}

export default App;
