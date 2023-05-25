import './App.css';
import Navigation from "./navigation/Navigation";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter basename='/example'>
        <Navigation/>
      </BrowserRouter>


  );
}

export default App;
