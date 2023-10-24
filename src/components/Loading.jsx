import {Loadericon} from '../icons/Loadericon.jsx'
const Loading = () => {
  return (
    <>
        <div className="fixed w-full h-screen top-0 z-50 left-0 bg-slate-900/80 flex justify-center items-center">
            <div className='flex justify-center items-center flex-col'>
                <Loadericon className="text-white/90 text-4xl" />
                <h1 className='f-poppins tracking-wide text-white/90 font-light mt-5'>Please wait</h1>
            </div>
        </div>   
    </>
  )
}

export default Loading