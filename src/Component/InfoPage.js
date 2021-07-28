import React from 'react'
import humidity from '../icons/humidity.svg'
import wind from '../icons/wind.svg'
import pressure from '../icons/pressure.svg'
import temperature from '../icons/temp.svg'
import Zones from './Zones'

const InfoPage = (props) => {
    const{weather}=props    
    const isDay=weather?.weather[0].icon?.includes("d");
    const getTime=(timeStamp)=>{
        return `${new Date(timeStamp*1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`;
    }
    function toDegreesMinutesAndSeconds(coordinate) {
        var absolute = Math.abs(coordinate);
        var degrees = Math.floor(absolute);
        var minutesNotTruncated = (absolute - degrees) * 60;
        var minutes = Math.floor(minutesNotTruncated);
        var seconds = Math.floor((minutesNotTruncated - minutes) * 60);
    
        return degrees + "°" + minutes + "'" + seconds+`"`;
    }
    
    function convertLati(lat) {
        var latitude = toDegreesMinutesAndSeconds(lat);
        var latitudeCardinal = lat >= 0 ? "N" : "S";    
        return latitude  + latitudeCardinal;
    }
    function convertLong(lng) {
        var longitude = toDegreesMinutesAndSeconds(lng);
        var longitudeCardinal = lng >= 0 ? "E" : "W";  
        return longitude + longitudeCardinal;
    }
    return (
        <>
            <div className="infopage">
                <div className="cityheading">
                    <h1 className="cityhead">{weather?.name}</h1>
                    <h1 className="cityhead">, {weather?.sys?.country}</h1>
                </div>
                <div className="middlepart">
                    <div className="temp">
                        <h1 className="tempvalue">{`${(weather?.main?.temp-273).toFixed(1)}°C`}</h1>
                        <h5 className="tempdescrp">{weather?.weather[0].description}</h5>
                      <div className="minmaxtemp">
                        <div className="max">Maximum : <span>{`${(weather?.main?.temp_max-273).toFixed(1)}°C`}</span></div>
                        <div className="min">Minimum : <span>{`${(weather?.main?.temp_min-273).toFixed(1)}°C`}</span></div>
                      </div>
                    </div>
                    <div className="weatherimage">
                        
                        <img className="middleimage" src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                        {/* <img className="middleimage" src={zero} alt="" /> */}
                    </div>
                    <div className="coordinate">
                        <div className="leftcoor">
                           <div className="longitude">Longitude</div>
                           <div className="latitude"> Latitude</div>
                        </div>
                        <div className="rightcoor">
                           <div className="longitude"><span>{`: ${convertLong(weather?.coord?.lon)}`}</span></div>
                           <div className="latitude"><span>{`: ${convertLati(weather?.coord?.lat)}`}</span></div>
                        </div>
                    </div>
                </div>
                <div className="belowpart">
                    <div className="left">

                    <Zones image={temperature} descp={isDay?"Sunset":"Sunrise"} value={getTime(weather?.sys[isDay ? "sunset":"sunrise"])}/>
                    <Zones image={humidity} descp="humidity" value={weather?.main?.humidity}/>
                    </div>
                    <div className="right">
                    <Zones image={wind} descp="wind" value={weather?.wind?.speed}/>
                    <Zones image={pressure} descp="pressure" value={weather?.main?.pressure}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPage
