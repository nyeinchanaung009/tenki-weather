import { useContext, useEffect, useState } from "react"
import Context from "../Context"
import { useNavigate } from "react-router-dom";

const CardForecast = ({day,date,icon,condition,lowtemp_c,lowtemp_f,hightemp_c,hightemp_f}) => {

  const navigate = useNavigate();

  const {isC} = useContext(Context);
  const [fdate,setFDate] = useState();
  const [fday,setFDay] = useState();

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
  ];

  const getDate = () => {
    const dd = new Date(date);
    setFDay(days[dd.getDay()]);
    setFDate(dd.getDate());
  }

  const goDetail = (date) => {
    navigate('/forecast/'+date);
  }

  useEffect(() => {
    getDate();
  },[]);

  return (
    <>
      <div onClick={() => goDetail(day)} className="mb-4 me-2">
        <div className="relative w-[285px] overflow-hidden bg-slate-700/30 shadow-md p-4 border border-white/[0.09] rounded cursor-pointer group hover:border-white/[0.13] hover:scale-[1.02] duration-300 text-poppins text-center mb-2 flex justify-around items-center">
          <h1 className="absolute top-2 left-3 f-teko text-xl leading-6 text-myblue">{fday} <span className="ms-1">{fdate}</span></h1>
          <button onClick={() => goDetail(day)} className="absolute bottom-2 left-3 f-poppins text-[13px] leading-6 text-slate-300/80 font-light hover:text-myyellow">more detail <i className="bi bi-arrow-right"></i></button>
          <div className="pb-3">
            <img src={icon} className="mx-auto opacity-95" alt="" />
            <h1 className="text-white font-light f-poppins text-xs mt-1">{condition}</h1>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-xs text-white/90 font-light"><i className="bi bi-thermometer-sun text-sm me-1 text-myyellow"></i>highest Temp</h1>
              <h1 className="text-myblue f-bebas-neue text-[22px]">{isC ? lowtemp_c+'°C': lowtemp_f+'°F'}</h1>
            </div>
            <div>
              <h1 className="text-xs text-white/90 font-light"><i className="bi bi-thermometer-half text-sm me-1 text-myyellow"></i>Lowest Temp</h1>
              <h1 className="text-myblue f-bebas-neue text-[22px]">{isC ? hightemp_c+'°C': hightemp_f+'°F'}</h1>
            </div>
          </div>
          <div id="bg-ball-b" className="absolute -z-10 -bottom-4 -right-4 w-[95px] h-[95px] rounded-full bg-[#00bbff55] blur-md opacity-30 group-hover:opacity-20 group-hover:w-[125px] group-hover:h-[125px] duration-300"></div>
        </div>  
      </div>
    </>
  )
}

export default CardForecast