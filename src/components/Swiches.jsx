import { useContext, useState } from "react";
import Context from "../Context";
import { useLocation } from "react-router-dom";

const Swiches = () => {
    const {data,isMph,setIsMph,isC,setIsC} = useContext(Context);
    const locae = useLocation();

  return (
    <>
        {/* ===================================== swithes ================================= */}
        {(data && !data.error &&
        <div className="w-[97%] md:w-[96%] xl:w-[93%] mx-auto f-poppins mt-4 flex justify-around md:justify-between items-center flex-wrap">
            <h1 className=" text-white text-sm ps-3 font-extralight tracking-wide px-5"><i className="bi bi-cloud-sun me-[6px] text-[16px] text-slate-300/60"></i>{locae.pathname == '/' ? 'Current Weather' : 'Weather Forecast'}</h1>
            <div className="flex justify-center items-center space-x-4 sm:space-x-7 flex-wrap mt-2 sm:mt-0 pe-2 md:pe-12">
                {/* ================= switch ==================== */}
                <div className="flex justify-center items-center space-x-2 mb-1 sm:mb-0">
                    <h1 className="text-[13px] text-white/90 font-light">Show in °C</h1>
                    <div onClick={() => setIsC(pre => !pre)} className="relative w-[26px] h-[14px] rounded-2xl border border-white/40 shadow cursor-pointer group">
                        <div className={isC ? 'absolute -top-[1px] right-0 w-[15px] h-[15px] rounded-full bg-myblue group-hover:bg-myyellow border border-myblue group-hover:border-myyellow' : 'absolute -top-[1px] left-0 w-[15px] h-[15px] rounded-full bg-white/70 group-hover:bg-myyellow border border-white group-hover:border-myyellow'}></div>
                    </div>
                </div>
                {/* ================= switch ==================== */}
                <div className="flex justify-center items-center space-x-2">
                    <h1 className="text-[13px] text-white/90 font-light">Show in Mph</h1>
                    <div onClick={() => setIsMph(pre => !pre)} className="relative w-[26px] h-[14px] rounded-2xl border border-white/40 shadow cursor-pointer group">
                        <div className={isMph ? 'absolute -top-[1px] right-0 w-[15px] h-[15px] rounded-full bg-myblue group-hover:bg-myyellow border border-myblue group-hover:border-myyellow' : 'absolute -top-[1px] left-0 w-[15px] h-[15px] rounded-full bg-white/70 group-hover:bg-myyellow border border-white group-hover:border-myyellow'}></div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Swiches