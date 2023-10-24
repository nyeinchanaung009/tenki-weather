import React, { useContext } from 'react'
import Context from '../Context'

const Error = () => {
    const {SetIsError} = useContext(Context);
    
  return (
    <>
        <div className="fixed top-6 w-full">
            <div className="w-[275px] bg-red-600 rounded-sm shadow mx-auto px-3 py-2 flex justify-between items-center fadein">
                <h1 className="font-bold text-white/90"><i className="bi bi-exclamation-triangle me-2"></i>Location Error, Try again</h1>
                <button onClick={() => SetIsError(false)} className="text-white/90 text-lg hover:text-white/60"><i className="bi bi-x-lg"></i></button>
            </div>
        </div>
    </>
  )
}

export default Error