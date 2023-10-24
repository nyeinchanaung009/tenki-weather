import { useEffect, useState } from "react";

const Sunrise = ({uptime,sunrise,sunset,moonrise,moonset,chance_rain,chance_snow}) => {
  const [isSun,setIsSun] = useState(true);
  const [updatetime,setUpdateTime] = useState('');

  const computeTime = () => {
    const gethour = uptime.split(' ')[1].split(':');
    if(gethour[0] > 12){
      setUpdateTime((gethour[0] - 12) + ':' + gethour[1] + ' pm');
    }else{
      setUpdateTime(gethour[0] + ':' + gethour[1] + ' am');
    }
  }

  useEffect(() => {
    computeTime();
  },[]);
  
  return (
    <>
      {/* =========================================== detail info ======================================== */}
      <div className="w-full sm:w-6/12 md:w-7/12 lg:w-8/12 xl:w-[73%] xl:ms-4">
        {/* ===================================== sunrise and sunset ======================================= */}
        <div className="w-full sm:w-[99.5%] ms-auto md:ms-0 md:w-full relative overflow-hidden p-4 rounded border border-white/[0.09] backdrop-blur-sm bg-slate-700/30 shadow-md">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="font-light text-white/80 f-poppins text-[12px]"><i className="bi bi-arrow-counterclockwise me-1 text-slate-300/50"></i>Updated at {updatetime}</h1>
            <div className="mt-1 sm:mt-0">
              <button onClick={() => setIsSun(pre => !pre)} title="Sunrise & Sunset" className="px-2 sm:px-3 rounded-l border border-white/20 bg-slate-700/40 hover:bg-slate-800/40 group"><i className={isSun ? "bi bi-sun text-[16px] text-myyellow group-hover:text-myblue shadow" : "bi bi-sun text-[16px] text-white/70 group-hover:text-myblue shadow"}></i></button>
              <button onClick={() => setIsSun(pre => !pre)} title="Moonrise & Moonset" className="px-2 sm:px-3 rounded-r border border-white/20 bg-slate-700/40 hover:bg-slate-800/40 group"><i className={!isSun ? 'bi bi-moon text-sm text-myyellow group-hover:text-myblue shadow' : 'bi bi-moon text-sm text-white/70 group-hover:text-myblue shadow'}></i></button>
            </div>
          </div>
            
          {isSun && (
          <div className="flex justify-between items-center md:w-[90%] lg:w-[80%] mx-auto mt-9 py-3 sm:py-[32px] md:py-[26px]">
            <div className="">
              <img className="w-[50px] sm-[60px] md:w-[75px] opacity-80 mx-auto" src="/images/sun (1).png" alt="sunrise" />
              <h1 className="text-white text-[11px] font-light sm:text-[13px] mt-3 f-poppins text-center px-2">Sunrise at <br/> {sunrise}</h1>
            </div>
            <div className="flex-1 border-t border-dashed border-white/40 py-4 md:py-3 lg:py-8 rounded-[50%] lg:mx-6"></div>
            <div className="">
              <img className="w-[50px] sm-[65px] md:w-[79px] opacity-80 mx-auto" src="/images/sun.png" alt="sunset" />
              <h1 className="text-white text-[11px] font-light sm:text-[13px] mt-3 f-poppins text-center px-2">Sunset at <br/> {sunset}</h1>
            </div>
          </div>
          )}
            
          {!isSun && (
          <div className="flex justify-between items-center sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto mt-9 py-3 sm:py-[32px] md:py-[26px]">
            <div className="">
              <img className="w-[50px] sm-[60px] md:w-[75px] opacity-80 mx-auto" src="/images/full-moon (1).png" alt="sunrise" />
              <h1 className="text-white text-[11px] font-light sm:text-[13px] mt-3 f-poppins text-center px-1">Moonrise at <br/> {moonrise}</h1>
            </div>
            <div className="flex-1 border-t border-dashed border-white/40 py-4 md:py-3 lg:py-8 rounded-[50%] lg:mx-6"></div>
            <div className="">
              <img className="w-[50px] sm-[65px] md:w-[79px] opacity-80 mx-auto" src="/images/full-moon.png" alt="sunset" />
              <h1 className="text-white text-[11px] font-light sm:text-[13px] mt-3 f-poppins text-center px-1">Moonset at <br/> {moonset}</h1>
            </div>
          </div>
          )}

          <div className="flex justify-center sm:justify-start items-center space-x-3 sm:space-x-7 md:space-x-10 f-poppins text-sm text-white/90 mt-4">
            <h1 className="text-xs font-light"><i className="bi bi-umbrella bg-slate-500/20 px-[6px] py-[2px] rounded me-2 border border-white/[0.05] text-sm text-white/80"></i>Chance of Rain<span className="f-bebas-neue text-[19px] text-myyellow ms-1">{chance_rain}%</span></h1>
            <h1 className="text-xs font-light"><i className="bi bi-snow3 bg-slate-500/20 px-[6px] py-[2px] rounded me-2 border border-white/[0.05] text-sm text-white/80"></i>Chance of Snow<span className="f-bebas-neue text-[19px] text-myyellow ms-1">{chance_snow}%</span></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sunrise