import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState(['hey', 'hello', 'test']);

  console.log(input);
  console.log(messeges);

  const sendMessege = (event) => {
    setMesseges([...messeges, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello Facebook Messenger</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={sendMessege}>Send Messenge</button>
      </form>

      {/* messege themselves */}

      {messeges.map((messege) => (
        <p>{messege}</p>
      ))}
    </div>
  );
}

export default App;
