// import Available from './Available'
// import Seleted from './Seleted'

// const PlayersCard = ({ handleIsActiveStatus, isActive, handleselectedPlayers, selectedPlayer, handleRemoveBtn }) => {

//   return (
//     <div className=''> 
      
//       <div className="flex gap-2 justify-end mt-8 ">
       
//         <div className="border border-gray-500 flex justify-center rounded-lg font-bold">
//           <button onClick={() => handleIsActiveStatus("cart")} className={`${isActive.cart ? "bg-[#e7fe29] font-bold rounded-md text-black py-3 px-3" : ""}`}>Available</button>
//         </div>
//         <div className="border border-gray-500 flex justify-center rounded-lg font-bold" >
//           <button onClick={() => handleIsActiveStatus("selected")} className={`${isActive.cart ? "" : "bg-[#e7fe29] font-bold rounded-md text-black py-3 px-3"}`}>selected ({selectedPlayer.length})</button>
//         </div>
//       </div>
//       {isActive.cart ? <Available handleselectedPlayers={handleselectedPlayers}></Available> :
//         <Seleted selectedPlayer={selectedPlayer} handleRemoveBtn={handleRemoveBtn}></Seleted>}
//     </div>
//   );
// };

// export default PlayersCard;