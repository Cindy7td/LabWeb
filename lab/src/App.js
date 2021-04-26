import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.css';
import TasksContainer from './Componentes/TasksContainer'
import CatalogProjects from './Componentes/CatalogProjects'
import Singin from './Componentes/Sigin';
import Login from './Componentes/Login';
import TaskForm from './Componentes/TaskForm';
import ProjectForm from './Componentes/ProjectForm';
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
          <Login></Login>
        </Route>
        <Route path="/signin">
          <Singin ></Singin>
        </Route>
        <Route path="/TaskForm">
          <TaskForm ></TaskForm>
        </Route>
        <Route path="/ProjectForm">
          <ProjectForm ></ProjectForm>
        </Route>
        <Route path="/">
        <Login></Login>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
