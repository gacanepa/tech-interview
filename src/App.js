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

  /*  
  QUESTION #1:
  Compare the count inside of these two functions and the value in line 59.
  What causes the difference between the output of the console.log and the state?
  */

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

      // Write functions to perform the following. Place them outside the useEffect and use them here.
      /*
      QUESTION #2:
      Explore the API response and get the team name(s) and nickname(s) where winPct is > 0.6 (southwest conference)
      */
      /*
      QUESTION #3:
      Get the team with teamId 1610612748 (southeast conference)
      */
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
