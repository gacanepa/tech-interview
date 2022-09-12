import React, { useState, useEffect } from 'react';

const outerDivStyle = {
  border: '2px dotted dodgerblue',
  margin: '3rem auto',
  width: '40%',
};

const innerDivStyle = {
  fontSize: '4rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 0',
}

const App = () => {
  const [count, setCount] = useState(1);

  // We are using the state in these two functions incorrectly.
  // What is the problem and how do we fix it?

  const increment = () => {
    setCount(count + 1);
    console.log({ count });
  };

  const decrement = () => {
    setCount(count - 1);
    console.log({ count });
  }

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://data.nba.net/prod/v1/current/standings_division.json');
      const teams = await response.json();
      // Explore the API response and get the team name and nickname where winPct is > 0.6 (southwest conference)
      console.log({ teams });
    }

    fetchTeams();
  }, [count]);

  return (
    <div style={{ ...outerDivStyle }}>
      <div style={{ ...innerDivStyle }}>
        <button id="decrement" onClick={decrement}>-</button>
        {count}
        <button id="increment" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
