import { useContext, useState } from "react";
import Context from "../Context";

const Nav = () => {
    const {locationBox,setLocationBox,setAddLocationModal,locations,setLocations,currentCity,setCurrentCity} = useContext(Context);
    
    const [isDel,setIsDel] = useState('');

    const changeCity = (city) => {
        setCurrentCity(city);
        localStorage.setItem('mycurcity',city);
        setLocationBox(false);
    }

    const openDel = (val) => {
        isDel == val ? setIsDel('') : setIsDel(val);

        setTimeout(() => {
            setIsDel('');
        }, 3000);
    }

    const delCity = (city) => {
        const citys = locations.filter(val => val != city);
        setLocations(citys);
        localStorage.setItem('mylocations',JSON.stringify(citys));
        resetCity(citys);
        setIsDel('');
        setLocationBox(false);
    }

    const resetCity = (ncity) => {
        const cc = ncity.length > 0 ? ncity[ncity.length - 1] : 'yangon';
        setCurrentCity(cc);
        localStorage.setItem('mycurcity',cc);
    }

  return (
    <>
        {/* ========================================= nav ======================================= */}
        <div className="flex justify-between items-start px-3 sm:px-6 mx-auto bg-slate-950/[0.1]">
            <div className="flex justify-center items-center group">
                <a href="/" className="hover:opacity-90 duration-200 hover:scale-95 block">
                    <img className="w-[58px] md:w-[65px]" src="/images/weather_logo.png" alt="logo" />
                </a>
                <span className="hidden sm:inline sm:opacity-0 -translate-x-[80%] group-hover:translate-x-0 relative -z-10 group-hover:opacity-100 font-medium text-myblue f-tilt-neon duration-300">Tenki Weather</span>
            </div>

            <div className="mt-1 scale-[0.89] sm:scale-100 relative z-40">
                <h1 className="f-poppins text-xs text-white/90 tracking-wide mb-[2px] font-light">Current City</h1>
                <div className="">
                    <button onClick={() => setLocationBox(pre => !pre)} className="w-[195px] sm:w-[225px] px-12 sm:px-20 pt-[3px] pb-[5px] rounded border border-white/10 font-semibold shadow bg-slate-700/50 text-white hover:bg-slate-900/30">{ currentCity || 'Yangon'}</button>
                    <i onClick={() => setLocationBox(pre => !pre)} className="absolute right-[10px] top-[24px] bi bi-caret-down-fill text-white cursor-pointer"></i>
                    
                    <div className={locationBox ? 'absolute w-[195px] sm:w-[225px] duration-200 top-[51px] left-0 bg-[#232742] rounded-b-md shadow border border-white/10 overflow-hidden' : 'hidden'}>
                        <h1 className="f-poppins text-sm text-center text-white/95 font-light py-2 border-b border-slate-700/70"><i className="bi bi-crosshair me-2 text-sm text-myblue"></i>Change Location</h1>
                        {
                            locations.map((val,index) => (
                            <div key={index} className="relative text-center font-light w-full border-b border-slate-700/70 text-white hover:bg-slate-900/30 flex justify-between items-center">
                                <button key={val} onClick={() => changeCity(val)} className="flex-1 py-[6px] ps-4 text-start">
                                    <span className=" font-semibold">{val}</span>
                                    <span className={currentCity == val ? '' : 'opacity-0'}><i className="bi bi-check-circle-fill text-myyellow text-sm drop-shadow ms-3"></i></span>
                                </button>
                                <button onClick={() => openDel(val)} className="px-1 rounded-full hover:bg-slate-700/70 duration-150 me-2">
                                    <i className="bi bi-three-dots-vertical"></i>
                                </button>
                                <button onClick={() => delCity(val)} className={isDel == val ? "absolute z-40 right-9 top-[5px] flex cursor-pointer bg-slate-900 px-3 py-[3px] rounded-sm text-sm pb-1 hover:bg-slate-700 border border-white/[0.15]" : 'hidden'}>
                                    <i className="bi bi-trash3 text-white/80 me-2"></i>Delete
                                </button>
                            </div>
                            ))
                        }
                        <div>
                            <button onClick={() => setAddLocationModal(true)} className="w-full text-center text-white text-[15px] font-semibold tracking-wide f-poppins py-1 bg-myblue hover:bg-myyellow textshadow"><i className="bi bi-plus-circle-fill text-lg me-2 textshadow"></i>Add location</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Nav