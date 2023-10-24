import { useContext, useEffect, useState } from "react"
import Context from "../Context"

const CardHour = ({time,temp_c,temp_f,icon,condition}) => {
  const {isC} = useContext(Context);  
  const [hourtime,setHourTime] = useState('');

  const computeHour = () => {
    const gethour = time.split(' ')[1].split(':');
    if(gethour[0] > 12){
      setHourTime((gethour[0] - 12) + ':' + gethour[1] + ' pm');
    }else{
      setHourTime(gethour[0] + ':' + gethour[1] + ' am');
    }
  }

  useEffect(() => {
    computeHour();
  },[]);

  return (
    <>
      <div className="bg-slate-700/30 px-2 pt-2 pb-2 rounded border border-white/[0.09] shadow text-center f-poppins text-white/90 text-xs">
        <h1 className="font-light">{hourtime}</h1>
        <img className="w-[55px] mx-auto my-2 opacity-95" src={icon} alt="icon" />
        <h1 className="f-bebas-neue text-2xl text-myyellow">{isC ? temp_c+'°C' : temp_f+'°F' }</h1>
        <h1 className="font-light h-[64px] sm:h-[48px] mt-[6px] text-white/95">{condition}</h1>
      </div>
    </>
  )
}

export default CardHour