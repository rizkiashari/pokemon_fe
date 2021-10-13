import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import List from "./pages/List";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={List} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
