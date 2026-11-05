import { useState } from 'react';

// Call to the database
const API_URL = 'http://localhost:3001/api/messages';

export default function App() {
  // Return from database
  const [messages, setMessages] = useState([]);
  // Error check
  const [error, setError] = useState('');

  // Button
  async function handleClick() {
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setMessages(await res.json());
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <button onClick={handleClick}>hello from database</button>

      {/*Values from databasae*/}
      {messages.map((m) => (
        <p key={m.id}>
          id: {m.id} | text: {m.text} | created_at:{' '}
          {new Date(m.created_at).toLocaleString()}
        </p>
      ))}

      {/*Error*/}
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
    </div>
  );
}
