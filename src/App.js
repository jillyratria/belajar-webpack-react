import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [state, setstate] = useState("React");
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png"
          }
          className="App-logo"
          alt="logo"
        />
        <input
          type="text"
          onChange={(e) => setstate(e.target.value)}
          value={state}
        />
        <p>
          Hellow <code>{state}</code>'s World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
