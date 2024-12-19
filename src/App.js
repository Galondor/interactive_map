import './App.css';
import 'leaflet/dist/leaflet.css';
import Map from './components/map';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="container">
        <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
