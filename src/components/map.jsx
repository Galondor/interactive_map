import React, { useState } from 'react';
import map from '../map.jpg';
import Marker from './marker';
import city from '../assets/chess-rook-solid.svg';
import town from '../assets/house-chimney-solid.svg';
import village from '../assets/tent-solid.svg';
import dungeon from '../assets/dungeon-solid.svg';
import danger from '../assets/skull-solid.svg';
import mountain from '../assets/mountain-solid.svg';
import mystery from '../assets/circle-question-solid.svg';
import poi from '../assets/circle-exclamation-solid.svg';
import pin from '../assets/location-dot-solid.svg';

const Map = () => {
   const [showMarkers, setShowMarkers] = useState(true);
   const [showCity, setShowCity] = useState(true);
   const [showTown, setShowTown] = useState(true);
   const [showVillage, setShowVillage] = useState(true);
   const [showDungeon, setShowDungeon] = useState(true);
   const [showDanger, setShowDanger] = useState(true);
   const [showMountain, setShowMountain] = useState(true);
   const [showMystery, setShowMystery] = useState(true);
   const [showPoi, setShowPoi] = useState(true);
   const [showPin, setShowPin] = useState(true);

   const getIconStyle = (show) => ({
      filter: show ? 'none' : 'grayscale(100%) invert(100%)',
      transform: show ? 'scale(1)' : 'scale(0.8)',
   });

   const toggleMarkers = () => {
      setShowMarkers(!showMarkers);
   };

   return (
      <>
         <div className="sidebar">
              <h2>Legend</h2>
              <ul className="legend">
                <li className="legend_item">
                  <span className="legend_item_name">City</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showCity} onChange={() => setShowCity(!showCity)} />
                    <img className="legend_item_icon" src={city} alt="Location Pin" style={getIconStyle(showCity)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Town</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showTown} onChange={() => setShowTown(!showTown)} />
                    <img className="legend_item_icon" src={town} alt="Location Pin" style={getIconStyle(showTown)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Village</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showVillage} onChange={() => setShowVillage(!showVillage)} />
                    <img className="legend_item_icon" src={village} alt="Location Pin" style={getIconStyle(showVillage)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Dungeon</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showDungeon} onChange={() => setShowDungeon(!showDungeon)} />
                    <img className="legend_item_icon" src={dungeon} alt="Location Pin" style={getIconStyle(showDungeon)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Danger</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showDanger} onChange={() => setShowDanger(!showDanger)} />
                    <img className="legend_item_icon" src={danger} alt="Location Pin" style={getIconStyle(showDanger)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Mountain</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showMountain} onChange={() => setShowMountain(!showMountain)} />
                    <img className="legend_item_icon" src={mountain} alt="Location Pin" style={getIconStyle(showMountain)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Mystery</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showMystery} onChange={() => setShowMystery(!showMystery)} />
                    <img className="legend_item_icon" src={mystery} alt="Location Pin" style={getIconStyle(showMystery)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Point of Interest</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showPoi} onChange={() => setShowPoi(!showPoi)} />
                    <img className="legend_item_icon" src={poi} alt="Location Pin" style={getIconStyle(showPoi)} />
                  </label>
                </li>
                <li className="legend_item">
                  <span className="legend_item_name">Pin</span>
                  <label className="legend_item_label">
                    <input className="legend_checkbox" type="checkbox" checked={showPin} onChange={() => setShowPin(!showPin)} />
                    <img className="legend_item_icon" src={pin} alt="Location Pin" style={getIconStyle(showPin)} />
                  </label>
                </li>
              </ul>
              <h4>Each Grid = One Travel Day</h4>
              <div className='divider'></div>
              <div className='controls'>
                  <button className='btn' onClick={toggleMarkers}>
                     {showMarkers ? 'Hide All' : 'Show All'}
                  </button>
               </div>
         </div>
         <figure className="map_wrapper">
            <img className="map" src={map} alt="Map" />
            {showMarkers && (
               <>
                  {/* City Markers */}
                  {showCity && (
                     <>
                        <Marker 
                           top='75%'
                           left='75%'
                           locName="Khar'goth"
                           locDesc='Description'
                           locGov="The Spawn's Replublic of Khar"
                           locPop='Population: ~12,000'
                           icon={city}
                        />
                        <Marker 
                           top='44%'
                           left='76.5%'
                           locName="Castle Deliverance"
                           locDesc='Description'
                           locGov='The Holy Order'
                           locPop='Population: ~5,000'
                           icon={city}
                        />
                        <Marker 
                           top='56%'
                           left='65%'
                           locName="Horizon's Edge"
                           locDesc='Description'
                           locGov='The Mirage Empire'
                           locPop='Population: ~8,000'
                           icon={city}
                        />
                        <Marker 
                           top='63%'
                           left='47%'
                           locName="Eldoria"
                           locDesc='Description'
                           locGov='The Eldryn Empire'
                           locPop='Population: ~45,000'
                           icon={city}
                        />
                        <Marker 
                           top='69%'
                           left='53.5%'
                           locName="Hearthwood"
                           locDesc='Description'
                           locGov='The Eldryn Empire'
                           locPop='Population: ~18,500'
                           icon={city}
                        />
                        <Marker 
                           top='69%'
                           left='25%'
                           locName="Bastion"
                           locDesc='Description'
                           locGov='The Kingdom of Ironspire'
                           locPop='Population: ~60,000'
                           icon={city}
                        />
                        <Marker 
                           top='88%'
                           left='25.5%'
                           locName="Polaris Lumina"
                           locDesc='Description'
                           locGov='The Luminari Union'
                           locPop='Population: ~6,300'
                           icon={city}
                        />
                        <Marker 
                           top='17%'
                           left='17.5%'
                           locName="Dragon's Crucible"
                           locDesc='Description'
                           locGov='The Twelve Dragonlords'
                           locPop='Population: ~20,000'
                           icon={city}
                        />
                        <Marker 
                           top='34%'
                           left='40.5%'
                           locName="Siren's Call"
                           locDesc='Description'
                           locGov='The Council of the Sea'
                           locPop='Population: ~6,000'
                           icon={city}
                        />
                        <Marker 
                           top='22%'
                           left='77.7%'
                           locName='Redcliff'
                           locDesc='Description'
                           locGov='The Alliance of Guardians'
                           locPop='Population: ~22,000'
                           icon={city}
                        />
                        <Marker 
                           top='17%'
                           left='83%'
                           locName='Stonehaven'
                           locDesc='Description'
                           locGov='The Alliance of Guardians'
                           locPop='Population: ~16,500'
                           icon={city}
                        />
                     </>
                  )}
                  {/* Town Markers */}
                  {showTown && (
                     <>
                        <Marker 
                           top='47%'
                           left='52%'
                           locName='Emerald Watch'
                           locDesc='Description'
                           locGov='The Mirage Empire'
                           locPop='Population: ~100'
                           icon={town}
                        />
                        <Marker 
                           top='43%'
                           left='49%'
                           locName='Moltenhold'
                           locDesc='Description'
                           locGov='The Brotherhood of The Forge'
                           locPop='Population: ~350'
                           icon={town}
                        />
                     </>
                  )}
                  {/* Village Markers */}
                  {showVillage && (
                     <>
                        <Marker 
                           top='44%'
                           left='62.5%'
                           locName='Droughtstone'
                           locDesc='Description'
                           locGov='Unaffiliated'
                           locPop='Population: ~12'
                           icon={village}
                        />
                        <Marker 
                           top='36%'
                           left='61.5%'
                           locName='Dunewatch'
                           locDesc='Description'
                           locGov='The Silver Ravens'
                           locPop='Population: ~63'
                           icon={village}
                        />
                        <Marker 
                           top='72%'
                           left='58%'
                           locName="Observatory #089"
                           locDesc='Description'
                           locGov='The Eldryn Empire'
                           locPop='Population: ~20'
                           icon={village}
                        />
                        {/* <Marker 
                           top='49%'
                           left='22%'
                           locName="Violet's Reach"
                           locDesc='Description'
                           locGov='Unafiiliated'
                           locPop='Population: Unknown'
                           icon={village}
                        /> */}
                     </>
                  )}
                  {/* Dungeon Markers */}
                  {showDungeon && (
                     <>
                        <Marker 
                           top='57%'
                           left='60.5%'
                           locName='The Sunken Spire'
                           locDesc='Description'
                           locGov='3 Floor Dungeon'
                           locPop='⭐ - ⭐⭐⭐'
                           icon={dungeon}
                        />
                        <Marker 
                           top='47%'
                           left='52%'
                           locName='The Emerald Mine'
                           locDesc='Description'
                           locGov='The Deep Beckons'
                           locPop='⭐'
                           icon={dungeon}
                        />
                     </>
                  )}
                  {/* Danger Markers */}
                  {showDanger && null}
                  {/* Mountain Markers */}
                  {showMountain && (
                     <>
                        <Marker 
                           top='48%'
                           left='50%'
                           locName='Jade Peaks'
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='44%'
                           left='56%'
                           locName='Mt. Riverspire'
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='42%'
                           left='69%'
                           locName='Greenwall'
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='30%'
                           left='55%'
                           locName='Mirage Watch'
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='65%'
                           left='63.5%'
                           locName="Prairie's Crown"
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='48%'
                           left='64.5%'
                           locName="Highland Peak"
                           locDesc='Description'
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                     </>
                  )}
                  {/* Mystery Markers */}
                  {showMystery && (
                     <>
                        <Marker 
                           top='27%'
                           left='46%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />  
                        <Marker 
                           top='52%'
                           left='8%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                        <Marker 
                           top='14%'
                           left='6%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                        <Marker 
                           top='54%'
                           left='90%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                        <Marker 
                           top='70.5%'
                           left='90.5%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                        <Marker 
                           top='5.5%'
                           left='90.5%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                        <Marker 
                           top='35%'
                           left='70%'
                           locName="???"
                           locDesc='N̴̵̶̶̸̢͚̯̞̬̗̤̭̹̗̟͈ͬͣ̐̆̊͗̔̀̾ͪ͐ͭͯ̊̌͘͞Ų̮̣͓ͥ̓͡_̠ͭͣL̝͚̩̥͎̩̞̣͔̏ͦͮ̏̃͠L̡̪̘͈̪͙͓̋̿̃ͫ̌̽̂ͦ̿͒̌̚͞'
                           locGov='リ╎ᓵᒷ  ℸ ̣ ∷||  ꖎ𝙹ᓭᒷ∷!'
                           locPop='ꖎ𝙹∷ᒷᒲ  ╎!¡ᓭ⚍ᒲ  ↸𝙹ꖎᔑ∷'
                           icon={mystery}
                        />
                     </>
                  )}
                  {/* Point of Interest Markers */}
                  {showPoi && (
                     <>
                        <Marker 
                           top='52%'
                           left='60%'
                           locName="Sandbreak"
                           locDesc='Description'
                           locGov='The Oasis of the Sands'
                           locPop='Population ~70 - ~250'
                           icon={poi}
                        />  
                     </>
                  )}
                  {/* Pins */}
                  {showPin && null}
               </>
            )}
         </figure>
      </>
   );
};

export default Map;