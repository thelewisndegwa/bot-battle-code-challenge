import React, { useEffect, useState } from 'react';

function AllBots(props) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://bots-database.onrender.com/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="card-container">
        {bots.map(bot => (
          <div key={bot.id} className="card" onClick={() => props.onEnlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="card-content">
              <h2>{bot.name}</h2>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBots;