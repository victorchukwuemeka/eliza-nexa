import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
    // Add API call for authentication
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>Login</button>
    </div>
  );
};

export default Auth;
