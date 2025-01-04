import backgroundImage from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'


const Banner = ({ handleBannerBtn }) => {
  return (
    <div className='bg-black lg:h-[500px] h-72 mt-6 rounded-2xl relative ' style={{ backgroundImage: `url(${backgroundImage})` }}>

      <div className=" flex flex-col justify-center  items-center space-y-4">
        <img className='w-[100px] md:w-[200px] md:mt-12' src={banner} />
      
        <h1 className='text-white w-[280px] md:w-full text-center font-bold  text-lg lg:text-3xl mr-7'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-gray-500 text-xl mr-3'>Beyond Boundaries Beyond Limits</p>
        <div className=' flex justify-center rounded-lg p-2  border border-[#E7FE29] '>
          <button onClick={handleBannerBtn} className=' btn font-bold  bg-[#E7FE29] '>Claim Free Credit
          </button>
        </div>

      </div>

    </div>

  );
};

export default Banner;