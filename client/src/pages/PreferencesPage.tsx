import React, { useState } from 'react';
import UserPreferences from '../components/UserPreferences';

const PreferencesPage: React.FC = () => {
  const [preferences, setPreferences] = useState(null);

  const handlePreferencesSave = (prefs: any) => {
    setPreferences(prefs);
    console.log('Preferences saved:', prefs);
  };

  return (
    <div>
      <h2>Set Your Preferences</h2>
      <UserPreferences onSavePreferences={handlePreferencesSave} />
    </div>
  );
};

export default PreferencesPage;
