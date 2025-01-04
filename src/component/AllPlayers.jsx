import Available from '../component/SinglePlayer'
import { useEffect, useState } from "react";


const AllPlayers = ({handleselectedPlayers}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./Players.json')
      .then(res => res.json())
    .then(data=> setPlayers(data))
  }, [])
  
  
  return (
    <div>
      
    <div className='grid lg:grid-cols-3 gap-8'>
      {
          players.map((player =><Available handleselectedPlayers={handleselectedPlayers} key={player.player_Id} player={player}></Available>))

        }
        </div>
        </div>

    
    
  );
};

export default AllPlayers;