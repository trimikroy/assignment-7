import logo from '../assets/logo.png'

const Header = ({ credit }) => {
  return (
    <div className='  flex justify-between items-center '>
      <div className="">
        <img src={logo} />
      </div>


      <div className='list-none flex gap-4  items-center'>
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
        <div className='inline-block  border-2 border-[#E7FE29] text-center py-2 rounded-lg px-3 font-bold'><button>{credit} Coin <i className="fa-solid fa-coins text-yellow-500"></i></button>
        </div>
      </div>
    </div>

  );
};

export default Header;