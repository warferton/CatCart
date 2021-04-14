import {BrowserRouter as Router, Route} from "react-router-dom";
import CatalogPage from "./components/pages/catalog.page"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={() => <CatalogPage/>}/>
      </div>
    </Router>
  );
}

export default App;
