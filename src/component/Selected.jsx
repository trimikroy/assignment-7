

const selected = ({ selectedPlayer }) => {
 

  return (
    <div className="block w-10/12 ">
      {

      selectedPlayer.map((player) => ( 
        <div key={player.player_Id}>
          <div className="mt-3">
           <div className="flex items-center gap-5">
     <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
    <img src={player.image} />
  </div>
</div>         
  <div>
  <h2 className="card-title font-bold">{player.name}</h2>         
   </div>
    </div>
          </div>
 
        </div>))
    }
    </div>
  );
};

export default selected;