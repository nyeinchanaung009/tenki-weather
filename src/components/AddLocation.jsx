import { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";

const AddLocation = () => {
  const inputRef = useRef();
  const {setLocationBox,addLocationModal,setAddLocationModal,setLocations,locations,setCurrentCity} = useContext(Context);
    
  const close = () => {
    setAddLocationModal(false);
    setLocationBox(false);
    inputRef.current.value = '';
  }

  const addCity = (city) => {
    setLocations([...locations,city]);
    setCurrentCity(city);
    inputRef.current.value = '';
    localStorage.setItem('mylocations',JSON.stringify([...locations,city]));
    localStorage.setItem('mycurcity',city);
    close();
  }

  const addByEnter = (e) => {
    if(e == 'Enter'){
      addCity(inputRef.current.value);
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
        {/* ========================================= add location modal ======================================= */}
        <div className={addLocationModal ? "fixed z-50 top-0 w-full h-full bg-slate-900/50 flex justify-center items-start pt-20 backdrop-blur-[4px]" : 'hidden'}>
            <div className="w-[95%] sm:w-[420px] bg-slate-800/80 rounded-md border border-white/10 shadow p-4 pb-1">
                <input ref={inputRef} onKeyUp={(e) => addByEnter(e.key)} className="w-full px-3 py-2 rounded bg-slate-900/60 mx-auto block border border-white/10 text-white f-poppins text-sm font-light outline-none focus:border-myblue" placeholder="Enter City" type="text" />
                <div className="w-full mx-auto flex justify-end items-center space-x-3 mt-3">
                    <button onClick={close} className="px-5 my-2 py-1 text-white shadow font-semibold text-sm bg-slate-700/50 hover:bg-white/20 rounded">Cancel</button>
                    <button onClick={() => addCity(inputRef.current.value)} className="px-5 my-2 py-1 text-white font-semibold text-sm bg-myblue hover:bg-myyellow rounded">Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddLocation