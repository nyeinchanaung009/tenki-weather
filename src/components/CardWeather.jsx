import { useContext, useEffect, useState } from "react"
import Context from "../Context"
import { useLoaderData, useLocation } from "react-router-dom";

const CardWeather = ({date,city,country,temp_c,temp_f,icon,condition,feel_c,feel_f,lowtemp_f,lowtemp_c,hightemp_f,hightemp_c}) => {
  const {isC,isMph} = useContext(Context);
  const [generateDate,setGenerateDate] = useState('');
  const [generateTime,setGenerateTime] = useState('');
  const locae = useLocation().pathname;

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const computeDate = () => {
      const splitdate = date.split(' ');

      const today = new Date(splitdate[0]);
      setGenerateDate(`${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`);

      const gethour = splitdate[1].split(':');
      if(gethour[0] > 12){
          setGenerateTime(gethour[0] - 12 + ':' + gethour[1] + ' pm');
      }else{
          setGenerateTime(splitdate[1] + ' am');
      }
  }

  const computeDate2 = () => {
    const today = new Date(date);
    setGenerateDate(`${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`);
    setGenerateTime('');
  }

  useEffect(() => {
    if(locae == '/'){
      computeDate();
    }else{
      computeDate2();
    }
  });

  return (
    <>
    {/* sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 */}
      {/* =========================================== current info card =========================== */}
      <div className="w-full sm:w-[290px] md:w-[275px] lg:w-[290px]  mb-3 sm:mb-0 ">
        <div className="w-full sm:w-[290px] md:w-[275px] lg:w-[290px] mx-auto px-4 py-[17px] rounded border border-white/[0.09] backdrop-blur-sm bg-slate-700/30 shadow-md">
          <div className="flex justify-between px-1 items-center">
            <h1 className="text-xs text-white/80"><i className="bi bi-calendar-event me-[6px] text-slate-300/40"></i>{generateDate}</h1>
            <h1 className="text-xs text-white/80">
              {generateTime.length > 0 && (
                <i className="bi bi-clock me-[6px] text-slate-300/50"></i>
              )}
              {generateTime}
            </h1>
          </div>
          <h1 className="text-center f-poppins text-[19px] tracking-tight font-semibold text-white subpixel-antialiased py-[5px]"><i className="bi bi-geo-alt me-1 text-[15px] text-slate-300/40"></i>{city}, {country}</h1>
          <div className="flex justify-center items-center space-x-3 py-3 translate-x-3">
            <h1 className="f-bebas-neue drop-shadow-lg text-[60px] text-myblue">{isC ? temp_c+'°C' : temp_f+'°F'}</h1>
            <img className="w-[75px] opacity-95" src={icon} alt="icon" />
          </div>
          <h1 className="text-myblue f-poppins font-bold tracking-wide text-shadow text-center text-xl mb-1">{condition}</h1>
          {locae == '/' && (
            <h1 className="text-white/80 f-poppins font-light tracking-wider text-shadow text-center text-xs">Feels like : {isC ? feel_c+'°C' : feel_f+'°F'}</h1>
          )}
          {locae != '/' && (
            <div className="pb-[16px]"></div>
          )}
          <div className="flex justify-between items-center f-poppins text-[13px] text-white mt-5">
            <div className="text-center">
              <h1 className="text-myblue f-bebas-neue text-[19px] leading-5"><i className="bi bi-thermometer-half me-1 text-[16px] text-myyellow"></i>{isC ? lowtemp_c+'°C' : lowtemp_f+'°F'}</h1>
              <h1 className="font-extralight text-xs mb-1 text-white/90">Lowest Temp</h1>
            </div>
            <div className="text-center">
              <h1 className="text-myblue f-bebas-neue text-[19px] leading-5"><i className="bi bi-thermometer-sun me-1 text-[16px] text-myyellow"></i>{isC ? hightemp_c+'°C' : hightemp_f+'°F'}</h1>
              <h1 className="font-extralight text-xs mb-1 text-white/90">Highest Temp</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWeather