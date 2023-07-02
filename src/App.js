

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/mbaliyezwe-nomkitha-ndzaba-31a7331b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mbaliyezwe Nzaba
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/imbaliyezwe/the-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://tangerine-yeot-5ea4e9.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
