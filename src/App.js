import "./App.css";
import React from "react";

export default function App() {
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
        <p>
          Hellow <code>React</code>'s World
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
