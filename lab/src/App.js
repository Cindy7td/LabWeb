import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.css';
import TasksContainer from './Componentes/TasksContainer'
import CatalogProjects from './Componentes/CatalogProjects'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Projects">
         <CatalogProjects ></CatalogProjects>
        </Route>
        <Route path="/Tasks">
          <TasksContainer ></TasksContainer>
        </Route>
        <Route path="/login">
          <TasksContainer ></TasksContainer>
        </Route>
        <Route path="/signin">
          <TasksContainer ></TasksContainer>
        </Route>
        <Route path="/">
          <TasksContainer ></TasksContainer>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
