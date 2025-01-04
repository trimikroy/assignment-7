// import {toast } from 'react-toastify';
import Header from "./component/Header"
import Banner from "./component/Banner"
import Footer from "./component/Footer"
import PlayersCard from './component/PlayersCard'
import { useState } from "react"
import {toast } from 'react-toastify';




function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'Available'
  })
  const [selectedPlayer, setselectePlayers] = useState([])
  const [credit, setCreditBtn] = useState(0)

   const handleBannerBtn = () => {
    const balange = 600000;
    setCreditBtn(credit + balange)

  } 
   const handleDicasePrice = (price) => {
    if (credit < price) {
      toast.error('Balance is Low')
    } else {
      setCreditBtn(credit - price)
    }
   }
  
  const handleRemoveBtn = (player_Id) => {
    
    const newRemovePlayers = selectedPlayer.filter((player) => player.player_Id != player_Id)
    setselectePlayers(newRemovePlayers)

  }
  
  const handleselectedPlayers = (player) => {
    const isExist = selectedPlayer.find((p) => p.player_Id == player.player_Id);

    if (isExist) {
  toast.error('already Exist');
    } else {
     handleDicasePrice(player.bidding_price)
      const newPlayer = [...selectedPlayer, player]
    setselectePlayers(newPlayer);
}
}

const handleIsActiveStatus = (status) => {
    if (status == "cart") {
      setIsActive({
      cart: true,
    status: 'Available'
    })
    } else {
        setIsActive({
      cart: false,
    status: 'selected'
    })
    }
  }

  return (
    <div className="">
      <section className="w-10/12 mx-auto mt-5">
        {/* header section */}
      <Header credit={credit}></Header>
      {/* banner section */}
      <Banner handleBannerBtn={handleBannerBtn}></Banner>
      </section>
      {/* Card area */}
      <div className="w-10/12 mx-auto">
        <PlayersCard 
          handleRemoveBtn={handleRemoveBtn }
          handleIsActiveStatus={handleIsActiveStatus}
          isActive={isActive}
          handleselectedPlayers={handleselectedPlayers}
        selectedPlayer={selectedPlayer}></PlayersCard>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  )
}

export default App
