import { useContext, useEffect } from "react";
import useFetch from '../useFetch.js';
import Master from "../layout/Master.jsx";

import CardWeather from "../components/CardWeather.jsx";
import Sunrise from "../components/Sunrise.jsx";
import CardInfo from "../components/CardInfo.jsx";
import CardCarousel from "../components/CardCarousel.jsx";
import CardForecast from "../components/CardForecast.jsx";
import Context from "../Context.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";

const Home = () => {
    const {data,setData,currentCity,setCurrentCity,setLocationBox,loading,setLoading,setAddLocationModal,locations,setLocations,isError,SetIsError} = useContext(Context);

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

    useEffect(() => {
        getData();
    },[currentCity]);
    
    return (
        <Master>
            {/* =========================================== current weather ======================================== */}
            <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto flex justify-start xl:justify-start items-end sm:space-x-2 md:space-x-3 flex-wrap mt-5">
                {/*current weather card*/}
                {data && !data.error && (
                <CardWeather 
                    date={data.location.localtime}
                    city={data.location.region}
                    country={data.location.country}
                    temp_c={data.current.temp_c}
                    temp_f={data.current.temp_f}
                    icon={data.current.condition.icon}
                    condition={data.current.condition.text}
                    feel_c={data.current.feelslike_c}
                    feel_f={data.current.feelslike_f}
                    lowtemp_f={data.forecast.forecastday[0].day.mintemp_f}
                    lowtemp_c={data.forecast.forecastday[0].day.mintemp_c}
                    hightemp_c={data.forecast.forecastday[0].day.maxtemp_c}
                    hightemp_f={data.forecast.forecastday[0].day.maxtemp_f}  
                />
                )}

                {/*current weather sunrise*/}
                {data && !data.error && (
                <Sunrise
                    uptime={data.current.last_updated}
                    sunrise={data.forecast.forecastday[0].astro.sunrise}
                    sunset={data.forecast.forecastday[0].astro.sunset}
                    moonrise={data.forecast.forecastday[0].astro.moonrise}
                    moonset={data.forecast.forecastday[0].astro.moonset}
                    chance_rain={data.forecast.forecastday[0].day.daily_chance_of_rain}
                    chance_snow={data.forecast.forecastday[0].day.daily_chance_of_snow}
                />
                )}
            </div>

            {/*current weather detail*/}
            {data && !data.error && (
            <CardInfo  
                windspeed_m={data.current.wind_mph}
                windspeed_k={data.current.wind_kph}
                winddeg={data.current.wind_degree}
                pressure={data.current.pressure_mb}
                humidity={data.current.humidity}
                vis_k={data.current.vis_km}
                vis_m={data.current.vis_miles}
                uv={data.current.uv}
                gust_m={data.current.gust_mph}
                gust_k={data.current.gust_kph}
            />
            )}

            {/*today weather by hour*/}
            {data && !data.error && (
            <CardCarousel hours={data.forecast.forecastday[0].hour} />
            )}

            {/* =========================================== froecasting next days ======================================== */}
            {data && !data.error && (
                <h1 className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto f-poppins text-white font-extralight mt-8 text-sm tracking-wide"><i className="bi bi-cloud-haze2 me-[6px] text-[16px] text-slate-300/60"></i>Weather Forecasting for next 2 Days</h1>
            )}
            <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto flex justify-center md:justify-start flex-wrap items-center sm:space-x-4 mt-3">

                {data && !data.error && [1,2].map(val => (
                    <CardForecast 
                        key={val}
                        day={val}
                        date={data.forecast.forecastday[val].date}
                        icon={data.forecast.forecastday[val].day.condition.icon}
                        condition={data.forecast.forecastday[val].day.condition.text}
                        lowtemp_c={data.forecast.forecastday[val].day.mintemp_c}
                        lowtemp_f={data.forecast.forecastday[val].day.mintemp_f}
                        hightemp_c={data.forecast.forecastday[val].day.maxtemp_c}
                        hightemp_f={data.forecast.forecastday[val].day.maxtemp_f}
                    />
                ))
                }
                
            </div>

            {/* =========================================== loading ======================================== */}
            {loading && (
                <Loading />
            )}

            {/* =========================================== error ======================================== */}
            {/* {data && data.error && (
                <div className="w-full min-h-[70vh] flex justify-center items-center">
                    <div className="text-center">
                        <img className="w-[80px] sm:w-[95px] brightness-150 opacity-30 mx-auto" src="./images/cloud.png" alt="fail to load" />
                        <h1 className="f-poppins text-slate-200/90 font-semibold me-3 text-[17px] mb-3"><i className="bi bi-exclamation-circle text-lg me-2"></i>Location Error</h1>
                        <div>
                            <button onClick={() => setLocationBox(pre => !pre)} className="f-poppins text-slate-200/90 py-1 font-light text-sm me-1 underline underline-offset-2 hover:text-myyellow">Change Location</button>
                            <span className="f-poppins text-slate-200/90 font-light text-sm me-1">or</span>
                            <button onClick={() => setAddLocationModal(true)} className="f-poppins text-sm text-myblue py-1 underline underline-offset-2 hover:text-myyellow">Add new Location</button>
                        </div>    
                    </div>
                </div>
            )} */}

            {/* =========================================== error ======================================== */}
            {isError && (
                <Error />
            )}
            
        </Master>
    )
}

export default Home;

