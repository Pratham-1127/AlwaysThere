// import React, { useState } from 'react';
// import MoodTracker from './MoodTracker';

// const App = () => {
//   const [mood, setMood] = useState('');

//   const handleMoodChange = (newMood) => {
//     setMood(newMood);
//     // Add logic to generate suggestions based on the new mood
//   };

//   return (
//     <div>
//       <h1>Personal Digital Twin</h1>
//       <MoodTracker onMoodChange={handleMoodChange} />
//       {mood && <p>Current Mood: {mood}</p>}
//       {/* Suggestions component can go here */}
//     </div>
//   );
// };

// export default App;


// --------------------------------------------------------------------------------------------------------------------------------- //

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Components
import Navbar from './Navbar.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

// CSS
import '../styles/App.css';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar currentPath = {location.pathname}/>
      <header className="App-header">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </header>
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Your Personal Digital Twin</h1>
        </div>
        <div className="welcome-media">
          {/* Add your GIFs, videos, or images here */}
          <img src="example.webp" alt="Buddy bot" className="buddy-media" />
        </div>
      </div>

    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;


