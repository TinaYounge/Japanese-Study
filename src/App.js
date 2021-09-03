import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbo from "./Components/NavBo/NavBo";
import Homepage from "./Page/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Navbo />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
