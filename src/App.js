import logo from './logo.svg';
import './App.css';
import GoogleSocialAuth from './components/Google';
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome"
function App() {
  return (
    <div className="App">
    <Route exact path="/">
    <GoogleSocialAuth/>
    </Route>
        <Route exact path="/welcome">
             <div>
               <Welcome/>
             </div>
        </Route>
       
    </div>
  );
}

export default App;
