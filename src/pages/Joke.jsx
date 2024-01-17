import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();

      let jokeText;
      
      if (data.punchline) {
        jokeText = `${data.setup} ${data.punchline}`;
      } else {
        jokeText = data.setup;
      }

      setJoke(jokeText);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container">
      <h2 className="joke">{joke}</h2>
      <button className="button" onClick={fetchJoke}>
        Get Joke
      </button>
    </div>
  );
};

export default Joke;
