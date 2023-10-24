import { useContext } from 'react'
import {Direction} from '../icons/Direction.jsx'
import {Gust} from '../icons/Gust.jsx'
import {Uv} from '../icons/Uv.jsx'
import Context from '../Context.js'

const CardInfo = ({windspeed_m,windspeed_k,winddeg,pressure,humidity,vis_k,vis_m,uv,gust_m,gust_k}) => {

  const {isC,isMph} = useContext(Context);
  
  return (
    <>
      {/* ======================================== info box ========================================= */}
      <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto flex justify-start items-stretch flex-wrap f-poppins mt-3">
        
        <div className="w-[120px] sm:w-[120px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-3 px-2 rounded text-white/90 me-2 mb-2">
          <h1 className="text-[13px] font-light"><i className="bi bi-wind text-[16px] me-1 text-slate-300/60"></i>Wind Speed</h1>
          <h1 className="text-xs text-center mt-2"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{isMph ? windspeed_m : windspeed_k}</span>{isMph ? ' mph' : ' kph'}</h1>
        </div>

        <div className="w-[120px] sm:w-[138px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-[13px] px-2 rounded text-white/90 me-2 mb-2">
          <div className="flex justify-center">
            <Direction className="rotate-[-45deg] text-slate-300/60 mb-2" />
            <h1 className="text-[13px] font-light ms-[6px]">Wind Direction</h1>
          </div>
          <h1 className="text-xs text-center mt-1"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{winddeg}</span></h1>
        </div>

        <div className="w-[120px] sm:w-[120px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-3 px-2 rounded text-white/90 me-2 mb-2">
          <h1 className="text-[13px] font-light"><i className="bi bi-droplet text-[16px] me-1 text-slate-300/60"></i>Humidity</h1>
          <h1 className="text-xs text-center mt-2"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{humidity}</span> %</h1>
        </div>

        <div className="w-[120px] sm:w-[120px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-[13px] px-2 rounded text-white/90 me-2 mb-2">
          <div className="flex justify-center">
            <Uv className="text-slate-300/60 mb-2" />
            <h1 className="text-[13px] font-light ms-[6px]">UV index</h1>
          </div>
          <h1 className="text-xs text-center mt-1"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{uv}</span></h1>
        </div>

        <div className="w-[120px] sm:w-[127px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-3 px-2 rounded text-white/90 me-2 mb-2">
          <h1 className="text-[13px] font-light text-center"><i className="bi bi-eye text-[16px] me-1 text-slate-300/60"></i>Visibility</h1>
          <h1 className="text-xs text-center mt-2"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{vis_k}</span> km / <span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{vis_m}</span> miles</h1>
        </div>

        <div className="w-[120px] sm:w-[120px] text-center bg-slate-700/30 border border-white/[0.09] shadow py-3 px-2 rounded text-white/90 me-2 mb-2">
          <h1 className="text-[13px] font-light"><i className="bi bi-chevron-double-down text-[15px] me-1 text-slate-300/60"></i>Pressure</h1>
          <h1 className="text-xs text-center mt-2"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{pressure}</span> mb</h1>
        </div>

        <div className="w-[120px] sm:w-[120px] text-center bg-slate-700/30 border border-white/[0.06] shadow py-[13px] px-2 rounded text-white/90 me-2 mb-2">
          <div className="flex justify-center">
            <Gust className="rotate-12 text-slate-300/60 mb-2 me-1 text-lg" />
            <h1 className="text-[13px] font-light">Gust</h1>
          </div>
          <h1 className="text-xs text-center mt-1"><span className="me-[2px] f-bebas-neue text-[22px] text-myblue">{isMph ? gust_m : gust_k}</span>{isMph ? ' mph' : ' kph'}</h1>
        </div>

      </div>
    </>
  )
}

export default CardInfo