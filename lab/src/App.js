import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import TasksContainer from './Componentes/TasksContainer';
import CatalogProjects from './Componentes/CatalogProjects';

import SignUp from './Componentes/Sigin';
import Login from './Componentes/Login';
import TaskForm from './Componentes/TaskForm';
import ProjectForm from './Componentes/ProjectForm';
import  {AuthProvider}  from "./AuthProvider";
function App() {

  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route path="/Projects">
         <CatalogProjects username="user1" ></CatalogProjects>
        </Route>
        <Route path="/Tasks">
          <TasksContainer ></TasksContainer>
        </Route>
        <Route path="/login">
          <Login>
          </Login>
        </Route>
        <Route path="/signin">
          <SignUp ></SignUp>
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
    </AuthProvider>
  );
}

export default App;
