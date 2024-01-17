import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Joke from './pages/Joke.jsx';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Joke />} />
      </Routes>
    </div>
  )
}

export default App
