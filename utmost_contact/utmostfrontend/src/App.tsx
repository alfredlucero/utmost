import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://example.com/user").then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log("Data: ", data);
      }
    });
  }, []);

  return (
    <>
      <h1>Utmost</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current contact count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
