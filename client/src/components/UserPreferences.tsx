import React, { useState } from 'react';

interface Props {
  onSavePreferences: (prefs: any) => void;
}

const UserPreferences: React.FC<Props> = ({ onSavePreferences }) => {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');

  const handleSave = () => {
    const preferences = { niche, audience, goal };
    onSavePreferences(preferences);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h3>Set Your Preferences</h3>
      <input
        type="text"
        placeholder="Niche (e.g., fitness, tech)"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <input
        type="text"
        placeholder="Target Audience"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <textarea
        placeholder="Goals (e.g., increase followers, engagement)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <button onClick={handleSave} style={{ padding: '0.5rem 1rem' }}>Save Preferences</button>
    </div>
  );
};

export default UserPreferences;
