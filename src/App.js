import React, {useState} from "react";

function App() {
  // Set up state to store the user's name
  const [name, setName] = useState('');

  // Handle form submission to update name
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = e.target.name.value;
    setName(inputName);
  };
  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Greeting App</h1>

        {/* Display the greeting message */}
        <h2>{name ? `Hello, ${name}!` : 'Hello, Stranger!'}</h2>

        {/* Form to capture the user's name */}
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="name"
              placeholder="Enter your name"
              style={{ padding: '10px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '10px' }}>
            Submit
          </button>
        </form>
      </div>
  );
}

export default App;
