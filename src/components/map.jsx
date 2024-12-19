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
                   locGov="The Spawn's Replublic of Khar"
                   locPop='Population: ~12,000'
                />
                <Marker 
                   top='44%'
                   left='76.5%'
                   locName="Castle Deliverance"
                   locDesc='Description'
                   locGov='The Holy Order'
                   locPop='Population: ~5,000'
                />
                <Marker 
                   top='56%'
                   left='65%'
                   locName="Horizon's Edge"
                   locDesc='Description'
                   locGov='The Mirage Empire'
                   locPop='Population: ~8,000'
                />
                <Marker 
                   top='63%'
                   left='47%'
                   locName="Eldoria"
                   locDesc='Description'
                   locGov='The Eldryn Empire'
                   locPop='Population: ~45,000'
                />
                <Marker 
                   top='69%'
                   left='53.5%'
                   locName="Hearthwood"
                   locDesc='Description'
                   locGov='The Eldryn Empire'
                   locPop='Population: ~18,500'
                />
                <Marker 
                   top='72%'
                   left='58%'
                   locName="Observatory #089"
                   locDesc='Description'
                   locGov='The Eldryn Empire'
                   locPop='Population: ~20'
                />
                <Marker 
                   top='69%'
                   left='25%'
                   locName="Bastion"
                   locDesc='Description'
                   locGov='The Kingdom of Ironspire'
                   locPop='Population: ~60,000'
                />
                <Marker 
                   top='88%'
                   left='25.5%'
                   locName="Polaris Lumina"
                   locDesc='Description'
                   locGov='The Luminari Union'
                   locPop='Population: ~6,300'
                />
                <Marker 
                   top='17%'
                   left='17.5%'
                   locName="Dragon's Crucible"
                   locDesc='Description'
                   locGov='The Twelve Dragonlords'
                   locPop='Population: ~20,000'
                />
                <Marker 
                   top='34%'
                   left='40.5%'
                   locName="Siren's Call"
                   locDesc='Description'
                   locGov='The Council of the Sea'
                   locPop='Population: ~6,000'
                />
                <Marker 
                   top='22%'
                   left='77.7%'
                   locName='Redcliff'
                   locDesc='Description'
                   locGov='The Alliance of Guardians'
                   locPop='Population: ~22,000'
                />
                <Marker 
                   top='17%'
                   left='83%'
                   locName='Stonehaven'
                   locDesc='Description'
                   locGov='The Alliance of Guardians'
                   locPop='Population: ~16,500'
                />
            </figure>
        </>
    );
};

export default Map;