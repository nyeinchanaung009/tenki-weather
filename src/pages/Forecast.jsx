import { lazy, useContext, useEffect, useState } from "react"
import useFetch from '../useFetch.js';
import Master from "../layout/Master.jsx";
import Context from "../Context"
import Loading from "../components/Loading";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardWeather from "../components/CardWeather.jsx";
import Sunrise from "../components/Sunrise.jsx";
import CardInfo from "../components/CardInfo.jsx";
import CardCarousel from "../components/CardCarousel.jsx";
import Error from "../components/Error.jsx";

const Forecast = () => {

  const {data,setData,currentCity,setCurrentCity,locations,setLocations,isError,SetIsError} = useContext(Context);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {param} = useParams();
  const datapath = data?.forecast?.forecastday[param];

  const getData = async () => {
      setLoading(true);
      const {location,current,forecast,error} = await useFetch(currentCity);
      setData({location,current,forecast,error});
      setLoading(false);
      
      if(error){
        resetLocation();
      }
  }

  const resetLocation = () => {
    const locat = locations;
    const updatelocat = locat.slice(0,locat.length-1);

    setLocations(updatelocat);
    localStorage.setItem('mylocations',JSON.stringify(updatelocat));

    setCurrentCity(updatelocat[0]);
    localStorage.setItem('mycurcity',updatelocat[0]);

    SetIsError(true);
    setTimeout(() => {
        SetIsError(false);
    },5000);
  }

  const isData = () => {
    if(!['1','2'].includes(param)){
      navigate('/');
      return;
    }else{
      getData();
    }
  }

  useEffect(() => {
    isData();
  },[]);

  useEffect(() => {
    getData();
  },[currentCity]);

  return (
    <Master>
      {loading && (
          <Loading />
      )}

      <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto mt-7 mb-6">
        <Link to='/' className="text-white/90 text-[15px] f-poppins p-1 hover:text-myblue"><i className="bi bi-chevron-left me-2 text-slate-400/70"></i>Back</Link>
      </div>

      {/* =========================================== current weather ======================================== */}
      <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto flex justify-start xl:justify-start items-end sm:space-x-2 md:space-x-3 flex-wrap mt-3  border-red-500">
        {/*current weather card*/}
        {data && !data.error && (
        <CardWeather 
            date={datapath.date}
            city={data.location.region}
            country={data.location.country}
            temp_c={datapath.day.avgtemp_c}
            temp_f={datapath.day.avgtemp_f}
            icon={datapath.day.condition.icon}
            condition={datapath.day.condition.text}
            feel_c={'N/A'}
            feel_f={'N/A'}
            lowtemp_f={datapath.day.mintemp_f}
            lowtemp_c={datapath.day.mintemp_c}
            hightemp_c={datapath.day.maxtemp_c}
            hightemp_f={datapath.day.maxtemp_f}  
        />
        )}

        {/*current weather sunrise*/}
        {data && !data.error && (
        <Sunrise
            uptime={data.current.last_updated}
            sunrise={datapath.astro.sunrise}
            sunset={datapath.astro.sunset}
            moonrise={datapath.astro.moonrise}
            moonset={datapath.astro.moonset}
            chance_rain={datapath.day.daily_chance_of_rain}
            chance_snow={datapath.day.daily_chance_of_snow}
        />
        )}
      </div>

      {/*current weather detail*/}
      {data && !data.error && (
      <CardInfo  
          windspeed_m={datapath.day.maxwind_mph}
          windspeed_k={datapath.day.maxwind_kph}
          winddeg={'N/A'}
          pressure={'N/A'}
          humidity={datapath.day.avghumidity}
          vis_k={datapath.day.avgvis_km}
          vis_m={datapath.day.avgvis_miles}
          uv={datapath.day.uv}
          gust_m={'N/A'}
          gust_k={'N/A'}
      />
      )}

      {/*today weather by hour*/}
      {data && !data.error && (
        <CardCarousel hours={datapath.hour} />
      )}

      <div className="mt-10 mb-6">
          <Link to="/" className="text-white/90 f-poppins text-sm font-light block hover:text-myblue p-1 w-fit mx-auto"><i className="bi bi-house-door bg-slate-500/30 px-2 py-1 rounded me-2 border border-white/[0.06] shadow"></i>Go Home</Link>
      </div>

      {/* =========================================== error ======================================== */}
      {isError && !data.error && (
          <Error />
      )}
    </Master>
  )
}

export default Forecast