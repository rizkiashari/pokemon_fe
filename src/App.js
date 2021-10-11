import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List";
import myList from "./pages/myList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/pokemon/my-pokemon' component={myList} />
      </Switch>
    </Router>
  );
}

export default App;
