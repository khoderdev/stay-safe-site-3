import React, { useState } from "react";
import "./LuckySpin.css";

// Define symbols and rewards for combinations
const symbols = ["🍒", "🍋", "🔔", "💎", "🍉"];
const rewardTable = {
  "🍒🍒🍒": 10,
  "🍋🍋🍋": 20,
  "🔔🔔🔔": 50,
  "💎💎💎": 100,
  "🍉🍉🍉": 200,
  "🍒🍋🍒": 5,
  "🔔🍉🔔": 10,
  "🍒🍒🍋": 15,
  "🍋🍋🍎": 15,
  "🍉🍉🍋": 30,
  "🔔🔔🍒": 25,
};

function JackpotMachine() {
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(["🍒", "🍋", "🔔"]);
  const [reward, setReward] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lastCombination, setLastCombination] = useState("");
  const [betAmount, setBetAmount] = useState(5);
  const [userBalance, setUserBalance] = useState(0);
  const [spinCount, setSpinCount] = useState(0); // Track number of spins
  const [winningPriority, setWinningPriority] = useState(true); // Track if winning priority is active

  // Spin reels and determine outcome
  const spinReels = () => {
    if (spinning || userBalance < betAmount) return; // Prevent spin if already in progress or insufficient balance

    setSpinning(true);
    setReward(0);
    setUserBalance(prev => prev - betAmount); // Deduct bet amount from user balance
    setSpinCount(prev => prev + 1); // Increment spin count

    setTimeout(() => {
      const newReels = generateReels();
      setReels(newReels);

      // Calculate reward based on the new reels combination
      const result = determineReward(newReels);
      setReward(result);
      setTotalPoints(prevPoints => prevPoints + result);
      setLastCombination(newReels.join("")); // Set last combination
      setSpinning(false);
    }, 2000); // Spin duration in milliseconds
  };

  // Function to generate reels with priority logic
  const generateReels = () => {
    const newReels = [];
    for (let i = 0; i < 3; i++) {
      const randomValue = Math.random();
      if (winningPriority && spinCount < 5) {
        // Higher chance of winning for the first 5 spins
        newReels.push(symbols[Math.floor(Math.random() * 3)]); // Higher chance for winning symbols
      } else {
        if (randomValue < 0.25) newReels.push(symbols[0]); // Higher chance for 🍒
        else if (randomValue < 0.5) newReels.push(symbols[1]); // Higher chance for 🍋
        else if (randomValue < 0.7) newReels.push(symbols[2]); // Some chance for 🔔
        else newReels.push(symbols[Math.floor(Math.random() * symbols.length)]); // Random for rest
      }
    }
    return newReels;
  };

  // Determine reward based on the outcome of the reels
  const determineReward = (reels) => {
    const combination = reels.join("");
    return rewardTable[combination] || 0; // Return 0 if no winning combination
  };

  // Function to purchase points
  const purchasePoints = (amount) => {
    setUserBalance(prev => prev + amount);
  };

  return (
    <div className="jackpot-machine">
      <h1>Jackpot Machine</h1>
      <div className="reels">
        {reels.map((symbol, index) => (
          <div key={index} className={`reel ${spinning ? "spinning" : ""}`}>
            {symbol}
          </div>
        ))}
      </div>
      <div className="betting-controls">
        <label>
          Bet Amount:
          <input
            type="number"
            min="1"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
          />
        </label>
        <button className="spin-button" onClick={spinReels} disabled={spinning}>
          {spinning ? "Spinning..." : "Spin"}
        </button>
      </div>
      <div className="result">
        {reward > 0 ? (
          <p>🎉 You won {reward} points! 🎉</p>
        ) : (
          <p>Try your luck!</p>
        )}
      </div>
      <h2>Total Points: {totalPoints}</h2>
      <h3>User Balance: {userBalance}</h3>
      <div className="purchase-points space-y-2 flex flex-col w-full items-center mt-5">
        <h4>Purchase Points</h4>
        <button className="hover" onClick={() => purchasePoints(5)}>Buy 5 Points for $5</button>
        <button className="" onClick={() => purchasePoints(10)}>Buy 10 Points for $10</button>
        <button className="btn-1 hover hover:bg-white" onClick={() => purchasePoints(15)}>Buy 15 Points for $15</button>
      </div>
      <h3>Last Combination: {lastCombination}</h3>
    </div>
  );
}

export default JackpotMachine;
