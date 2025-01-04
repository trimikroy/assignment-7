// import { useEffect, useState } from "react";

// const Available = ({handleselectedPlayers}) => {
// const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     fetch('./Players.json')
//       .then(res => res.json())
//     .then(data=> setPlayers(data))
//   }, [])



//   return (
//     <div className="grid lg:grid-cols-3 gap-8 mt-7">
//       {players.map(player => (
//       <div key={player.player_Id} className="">
//       <div className="card bg-base-100 shadow-xl flex  {player_Id} ">
//   <figure>
//     <img className="h-[250px] rounded-lg w-full"
//       src={player.image}
//       alt="Players img" />
//   </figure>
//    <div className="card-body">
//  <div className="flex items-center gap-5">
//      <div className="avatar">
//   <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
//     <img src={player.image} />
//   </div>
// </div>         
//   <div>
//   <h2 className="card-title font-bold">{player.name}</h2>         
//    </div>
//     </div>        
//             {/*country flag  */}
//             <div className="flex justify-between mt-3 mb-3">
//               <div className="flex items-center gap-4 text-gray-400">
//                 <i class="fa-solid fa-flag"></i>
//                 <h3> {player.country}</h3>
//               </div>
//                <div className="">
//                 <button className=" bg-gray-300 py-2 px-3 rounded-lg font-semibold">{player.role}</button>
//            </div>
//             </div>
//             <hr />
//             <h2 className="font-semibold">Rating</h2>
//     <div className="flex justify-between mt-3">
//               <div><h3 className="font-bold">{ player.batting_type}</h3></div>
//               <div><h3 className="font-bold">{ player.bowling_type}</h3></div>
//     </div>
//     <div className="flex justify-between mt-3">
//               <div><h3 className="font-bold">Price: { player.bidding_price}</h3></div>
//               <div>  <button onClick={() => handleselectedPlayers(player)} className=" bg-[#e7fe29] py-2 px-3 rounded-lg font-semibold hover:bg-yellow-200">Choose Player</button></div>
//     </div>
   
    
//   </div>
// </div>
//     </div>
    
//    ))}
//     </div>
//   );
// };

// export default Available;