const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div className="text-white/80 text-xs text-center py-[10px]">
        <span className="me-2 text-white/80"><i className="bi bi-cloud-sun text-slate-400 text-[15px] me-1"></i>Tenki Weather App, &copy; {date}, All right reserve. </span>
        <a href="https://github.com/nyeinchanaung009" target="_blank" className="block sm:inline hover:text-myblue hover:underline underline-offset-2 duration-150"> Developed by : <i className="bi bi-github mx-1 text-slate-400"></i>Nyein Chan Aung</a>
    </div>
  )
}

export default Footer