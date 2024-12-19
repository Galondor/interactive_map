import map from '../map.jpg';
import Marker from './marker';

const Map = () => {
    return (
        <>
            <figure className="map_wrapper">
                <img className="map" src={map} alt="Map" />
                <Marker 
                   top='75%'
                   left='75%'
                   locName="Khar'goth"
                   locDesc='Description'
                />
                <Marker 
                   top='44%'
                   left='76.5%'
                   locName="Castle Deliverance"
                   locDesc='Description'
                />
                <Marker 
                   top='56%'
                   left='65%'
                   locName="Horizon's Edge"
                   locDesc='Description'
                />
                <Marker 
                   top='63%'
                   left='47%'
                   locName="Eldoria"
                   locDesc='Description'
                />
                <Marker 
                   top='69%'
                   left='53.5%'
                   locName="Hearthwood"
                   locDesc='Description'
                />
                <Marker 
                   top='69%'
                   left='25%'
                   locName="Bastion"
                   locDesc='Description'
                />
                <Marker 
                   top='88%'
                   left='25.5%'
                   locName="Polaris Lumina"
                   locDesc='Description'
                />
                <Marker 
                   top='17%'
                   left='17.5%'
                   locName="Dragon's Crucible"
                   locDesc='Description'
                />
                <Marker 
                   top='34%'
                   left='40.5%'
                   locName="Siren's Call"
                   locDesc='Description'
                />
                <Marker 
                   top='22%'
                   left='77.7%'
                   locName='Redcliff'
                   locDesc='Description'
                />
                <Marker 
                   top='17%'
                   left='83%'
                   locName='Stonehaven'
                   locDesc='Description'
                />
            </figure>
        </>
    );
};

export default Map;