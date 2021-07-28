import './App.css';
import './styles/searchpage.css';
import './styles/infopage.css';
import './styles/zones.css';
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";
import React,{useState} from 'react'
import SearchPage from './Component/SearchPage';
import InfoPage from './Component/InfoPage';
import About from './Component/About';
import Error from './Component/Error';
import axios from 'axios';
const key="20b5bf555710aaddce743a7b8845a021";

function App() {
  const[city,updateCity]=useState();
  const[weather,updateWeather]=useState();

const getWeather=async (e)=>{
  e.preventDefault();
  const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  updateWeather(response.data);
}
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="heading">Weather App</h2>
        <div className="nav">
           <NavLink className="navbar-item navitem1" activeClassName="is-active" to="/" exact>Home</NavLink>
           <NavLink className="navbar-item navitem2" activeClassName="is-active" to="/about" >About</NavLink>
        </div>
      </div>
      <div className="info">
      <Switch>
          <Route path="/"><SearchPage updateCity={updateCity} getWeather={getWeather}/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/info">{weather!=null?<InfoPage weather={weather}/>:<Error/>}</Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
