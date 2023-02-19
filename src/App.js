import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
          {" "}
          <Search />
        </h1>
        <WeatherSearch city="Lisbon" />
        <p>Coded by Angie</p>
        <a href="https://github.com/Angie11111/Weather-react">
          {" "}
          Open coded source
        </a>
      </header>
    </div>
  );
}

export default App;
