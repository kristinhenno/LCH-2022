import './App.css';
import Instafeed from './Instafeed'
import Nav from './Nav'
import Home from './Home'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;