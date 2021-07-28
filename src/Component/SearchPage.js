import React from 'react'
import { NavLink } from "react-router-dom";

const SearchPage = (props) => {
    const{updateCity,getWeather}=props;
    return (
        <div className="page">
        <div className="searchpage">
            <h1 className="searchhead">Find the weather of your City Here</h1>
            <div className="seachbar" >
               <input className="cityname" type="text" placeholder="Enter Your City Name" onChange={(e)=>{updateCity(e.target.value) }}/>
               <button className="submit" onClick={getWeather}>Submit</button>
               <NavLink to="/info" className="submitlink">View Information</NavLink>
            </div>
        </div>
        </div>
    )
}

export default SearchPage
