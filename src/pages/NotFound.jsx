import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="f-poppins font-medium text-lg text-white/90 text-center bg-slate-700/30 p-5 rounded-md shadow-md border border-white/[0.09]">
            <h1 className="mb-3 text-white/80"><i className="bi bi-exclamation-circle text-2xl me-2 text-white/50"></i>Page Not Found</h1>  
            <Link to={-1} className="hover:text-myyellow"><i className="bi bi-chevron-left me-1 text-sm"></i>Go back</Link>      
        </div>
    </div>
  )
}

export default NotFound