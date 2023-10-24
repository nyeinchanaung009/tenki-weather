import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Swiches from '../components/Swiches.jsx';
import AddLocation from '../components/AddLocation.jsx';

const Master = ({children}) => {

  return (
    <>
      <Nav/>

      {/* ==================================== container ================================================= */}
      <div className="flex justify-center items-center min-h-[95vh]">
        <div className="w-screen bg-white/[0.0] mx-auto min-h-[87vh] rounded-md p-3 md:p-6 md:pt-2">

          <Swiches/>

          {children}

        </div>
        <AddLocation/>
      </div>

      <Footer/>
    </>
  )
}

export default Master