import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/natalia-bay/dictionary-app"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/natalia-bayduraeva-metaxa/"
              target="_blank"
              rel="noreferrer"
            >
              natalia
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
