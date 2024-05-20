import Signup from "./sections/auth/Signup"


function App() {
 

  return (
    <>
    <div className="flex justify-center items-center">
    <div className="w-[30%] h-screen bg-red-300 bg-gradient-to-b from-[#59599B] to-[#0F0C29]
    via-[#24243E] flex items-center justify-between flex-col text-white p-10">
    <img 
    src="../assets/logo.jpg"
    alt="logo"
    width={146}
    height={86}
    className=""
    />
    <img 
    src="../assets/handshake.png"
    alt="logo"
    className="w-[1100px] h-[600px] absolute top-0"
    />
    <div className="text-center">
    <h2 className="text-3xl leading-[46px] text-bold font-[Zen Kaku Gothic Antique]">
    Partnership for Business Growth
    </h2>
    <p className="text-sm">
    Partnerships are pivotal for business growth, 
    enabling companies to leverage mutual strengths, share risks, and capitalize on opportunities.
    </p>
    </div>
   
    </div>
    <div className="w-[70%] h-screen bg-[#F9F9FA] z-20"></div>
    </div>
    </>
  )
}

export default App
