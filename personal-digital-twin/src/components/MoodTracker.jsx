import React, { useState } from 'react';

const MoodTracker = ({ onMoodChange }) => {
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMoodChange(mood); // Pass the mood to the parent component
    setMood('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How are you feeling?
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MoodTracker;
