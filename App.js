import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if(input.trim() !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  return (
    <div className="app">
      <h1>Arthive App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a note"
      />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;