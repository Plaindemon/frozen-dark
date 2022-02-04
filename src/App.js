import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="nav-link">Weather Dashboard</h1>
      </header>
      <div className="card-body">
        <h3 className="card-header">Search for a city: </h3>
        <input id="search" type="text" className="form-control" placeholder="input city name"
          aria-label="input city name"></input>
        <div className="input-group-append">
          <button className="btn" type="button" id="city-search-btn">Search</button>
        </div>
      </div>

      <h5 className="card-header weather-head">Todays Current Weather</h5>

      <h4 className="card-title date" id="date"><strong>DATE: (00,00,0000)</strong>

      </h4>

      <div id="location"></div>
      <div className="card-text temp-card">Temperature:
        <p className="fahrenheit" id="temp"></p>
      </div>
      <div className="card-text wind-card">Wind Speed: <p id="wind"></p>
      </div>
      <div className="card-text humid-card">Humidity Level: <p id="humid"></p>
      </div>
      <div className="card-text uv-index-card"> UV Index: <p id="uvi"></p>
      </div>
      <div className="card-text">Description:<p id="description"></p>
      </div>
      <div className="sunrise"></div>
      <div classNAme="sunset"></div>

      <div id="daily" className="card">

        <h5 className="card-header">5 Day Forecast</h5>
      </div>

      <div className="card">
        <h4 className="card-header">Search History</h4>
        <p className="card-text" id="past-city"></p>

      </div>






    </div>
  );
}

export default App;
