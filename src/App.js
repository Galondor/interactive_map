import './App.css';
import map from './map.jpg';
import ZoomableMap from './components/zoom';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="container">
          <div className="map_container">
          <ZoomableMap>
            <img className="map" src={map} alt="Placeholder" />
          </ZoomableMap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
