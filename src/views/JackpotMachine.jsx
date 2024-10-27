// // Define symbols and rewards for combinations
// const symbols = ["🍒", "🍋", "🔔", "💎", "🍉"];
// const rewardTable = {
//   "🍒🍒🍒": 10,
//   "🍋🍋🍋": 20,
//   "🔔🔔🔔": 50,
//   "💎💎💎": 100,
//   "🍉🍉🍉": 200,
//   "🍒🍋🍒": 5,   // Partial matches for smaller rewards
//   "🔔🍉🔔": 10,
// };

// function JackpotMachine() {
//   const [spinning, setSpinning] = useState(false);       // Track if reels are spinning
//   const [reels, setReels] = useState(["🍒", "🍋", "🔔"]); // Current symbols on the reels
//   const [reward, setReward] = useState(0);               // Points won in the current spin
//   const [totalPoints, setTotalPoints] = useState(0);     // Accumulated points for the user

//   // Spin reels and determine outcome
//   const spinReels = () => {
//     if (spinning) return; // Prevent spin if already in progress

//     setSpinning(true);
//     setReward(0);

//     setTimeout(() => {
//       // Increase chances of winning by introducing a bit of weighted randomness
//       const newReels = reels.map(() => {
//         const randomValue = Math.random();
//         if (randomValue < 0.3) return symbols[0]; // Higher chance of getting 🍒
//         else if (randomValue < 0.5) return symbols[1]; // Slightly lower chance of 🍋
//         else if (randomValue < 0.7) return symbols[2]; // Chance for 🔔
//         else return symbols[Math.floor(Math.random() * symbols.length)]; // Random for rest
//       });
//       setReels(newReels);

//       // Calculate reward based on the new reels combination
//       const result = determineReward(newReels);
//       setReward(result);
//       setTotalPoints(totalPoints + result);
//       setSpinning(false);
//     }, 2000); // Spin duration in milliseconds
//   };

//   // Determine reward based on the outcome of the reels
//   const determineReward = (reels) => {
//     const combination = reels.join("");
//     return rewardTable[combination] || 0; // Return 0 if no winning combination
//   };

//   return (
//     <div className="jackpot-machine">
//       <h1>Jackpot Machine</h1>
//       <div className="reels">
//         {reels.map((symbol, index) => (
//           <div key={index} className={`reel ${spinning ? "spinning" : ""}`}>
//             {symbol}
//           </div>
//         ))}
//       </div>
//       <button className="spin-button" onClick={spinReels} disabled={spinning}>
//         {spinning ? "Spinning..." : "Spin"}
//       </button>
//       <div className="result">
//         {reward > 0 ? <p>🎉 You won {reward} points! 🎉</p> : <p>Try your luck!</p>}
//       </div>
//       <h2>Total Points: {totalPoints}</h2>
//     </div>
//   );
// }

// export default JackpotMachine;