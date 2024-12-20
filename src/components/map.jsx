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
                           locDesc="The Capital city of [REDACTED], home to thousands of spawn.
                           Khar'goth is a grim and imposing city, built from the bones of the fallen and the blood of the weak.
                           It's architecture is twisted and macabre reflection of the Spawn's dark and twisted nature. The Great Arena, central
                           to the city, is where daily gladiatorial combat takes place, the spawn favor strength and combat prowess above all else.
                           This philosophy has been spearheaded by the Skullcleaver Clan, the current ruling clan of Khar and warden of [REDACTED]."
                           locGov="The Spawn's Replublic of Khar"
                           locPop='Population: ~12,000'
                           icon={city}
                        />
                        <Marker 
                           top='44%'
                           left='76.5%'
                           locName="Castle Deliverance"
                           locDesc="The Castle-City in the sky. Home to the ancient Holy Order and some of the wealthiest families in all of Iferon.
                           It's architecture is a mix of gothic and grand celestial design, with soaring spires as well as golden domes and arches.
                           One of the most notable and oldest buildings being the Holy Sancutum, home to the Holy Order. Though now the city has forsaken it's
                           religous roots and has become a haven for the rich and powerful. Few practice the old ways, and the Order's influence wanes with each passing year."
                           locGov='The Holy Order'
                           locPop='Population: ~5,000'
                           icon={city}
                        />
                        <Marker 
                           top='56%'
                           left='65%'
                           locName="Horizon's Edge"
                           locDesc="A Beacon of civilization and the capital of Ashaka. Horizon's Edge is a testament to human ingenuity and resilience.
                           Though most of the city's success can be attributed to the massive habor that connects it to the rest of the world.
                           AS a result, Central Market has become a bustling hub of trade and commerce. The city's true gem however, is the College of Archaeology and History.
                           The College has produced some of the greatest archeologists and historians in the world. The College has also unearthed countless ancient relics
                           and artifacts, which will soon populate the newly approved Museum of Antiquities."
                           locGov='The Mirage Empire'
                           locPop='Population: ~8,000'
                           icon={city}
                        />
                        <Marker 
                           top='63%'
                           left='47%'
                           locName="Eldoria"
                           locDesc="The oldest city in the known world, Eldoria is a city of magic and tranquility. Most nations have an embassy in Eldoria due to it's
                           strict neutrality and central location. The city was orignaly home to the first men and elves, and has since become a melting pot of cultures.
                           The Silver Spire, the tallest building in all of Iferon, is home to the Eldryn Academy of The Arcane Art. The most prestigious school of magic in the world.
                           Ths city is the jewel of the Eldryn Empire, and the Royal Family resides in the White Palace. Unlike most of nations in Iferon, Eldoria freely allows the practice
                           of magic. Over the centuries, the city has grown and expanded, but not every expansion proved successful. The ruins of an entire city district still
                           remains as a reminder of mankind's hubris. However all of Eldoria nearly takes up the entire continent of [REDACTED]."
                           locGov='The Eldryn Empire'
                           locPop='Population: ~45,000'
                           icon={city}
                        />
                        <Marker 
                           top='69%'
                           left='53.5%'
                           locName="Hearthwood"
                           locDesc="Once a mere city district of Eldoria, Hearthwood has since grown into a major city in it's own right. Though not without challenges.
                           Hearthwood's political landscape balances on a knife's edge, with the Royal Family of Eldoria and the Hearthwood Council constantly at odds.
                           The city is mostly comprised of the working class, and the city's economy is based on the export of Wheat and Goldleaf, a rare herb that only grows in Hearthwood soil.
                           These exports are so plentiful that the city feeds the entire Eldryn Empire and still exports to other nations. As a result the farmers of Hearthwood are some of the 
                           best paid and respected in all of Iferon. Some of her residents have started to call for independence from Eldoria, but the council doesn't believe the city is ready
                           to stand on it's own without the Empire's protection and influence."
                           locGov='The Eldryn Empire'
                           locPop='Population: ~18,500'
                           icon={city}
                        />
                        <Marker 
                           top='69%'
                           left='25%'
                           locName="Bastion"
                           locDesc="The City of Bastion is a fortress city, built to withstand any siege.
                           Surrounding the city walls are the six Spires, each looming over the city. Near the center of the city is the
                           Grand Spire, home to the Iron Keep where the King of Ironspire resides. Within the city walls, a strict order prevails.
                           The streets are patrolled by the Iron Guard, and the air is thick with a sense of obedience and conformity.
                           Magic is rigorously outlawed, even the most minor of spells can spell doom for the caster. The weekly hangings
                           serve as a stark reminder of the consequences of practicing magic or defying the King's Law.
                           Despite it's oppresive atmosphere, Bastion is prosperous thanks to the sprawling mines beneath the city,
                           paired with the city's great forges. The city is armed to the teeth, and makes a shiny zennit 
                           exporting weapons and metals. Recently the miners have delved deeper and uncovered a new mineral, it's yet to be
                           identified but it's properties are unlike anything seen before."
                           locGov='The Kingdom of Ironspire'
                           locPop='Population: ~60,000'
                           icon={city}
                        />
                        <Marker 
                           top='88%'
                           left='25.5%'
                           locName="Polaris Lumina"
                           locDesc="Established on the coast of [REDACTED], Polaris Lumina was founded as a sanctuary city
                           for the Luminari. It stands as a beacon of hope and acceptance. The city's architecture reflects its
                           connection to it's snowy surroudings and magic. Buildings are crafted form pale wood and ice, their designs
                           incorporating flowing lines and intricate carvings that evoke the beauty of the surrounding landscape. At the heart
                           of the city is a bustling marketplace, where fishermen and traders exchange goods and stories. Though things
                           are better now, the city still has scars from centuries of persecution."
                           locGov='The Luminari Union'
                           locPop='Population: ~6,300'
                           icon={city}
                        />
                        <Marker 
                           top='17%'
                           left='17.5%'
                           locName="Dragon's Crucible"
                           locDesc="Mounted upon the cliffs of Dragon's Spine, the city of Dragon's Crucible is a fierce and savage place.
                           At the heart of the city is the Colosseum of Fire and Blood, where the annual Crucible is held, in addition
                           to other gladiatorial events. For a city with such a brutal reputation, no weapons are allowed within the city.
                           The streets of Dragon's Crucible are alive with vibrant energy. Warriors from each clan proudly display their colors
                           and hone their skills in public squares specifically designed for sparring. The clans are almost always at odds with
                           each other, but they are all united by the Dragon King, the ruler of the city. The king is the champion of the annual
                           Crucible, and his word is Law. His clan also holds the most power and influence during his time as King.
                           Thanks to this ever changing power dynamic, the city is always on the brink of disaster."
                           locGov='The Twelve Dragonlords'
                           locPop='Population: ~20,000'
                           icon={city}
                        />
                        <Marker 
                           top='34%'
                           left='40.5%'
                           locName="Siren's Call"
                           locDesc="A costal city built in the sands of the [REDACTED] Desert. Siren's Call is a bustling port city that thrives
                           on the edge of two worlds. It's towering walls, bleached white by the sun. The city houses the largest market in Iferon,
                           the Grand Bazaar. A Sprawling market where exotic goods form distant lands are traded alongside the city's own.
                           Overlooking the bustling harbor stands the Citadel of the Sea, home to the Council of the Sea. The council governs the waters
                           of Iferon. The council ensures fair trading practices and the saftey of the seas. Most merchants and sailors have set foot
                           in Siren's Call at least once, and enjoyed the city's hospitality. Including a famous tavern, The Drunken Kraken."
                           locGov='The Council of the Sea'
                           locPop='Population: ~6,000'
                           icon={city}
                        />
                        <Marker 
                           top='22%'
                           left='77.7%'
                           locName='Redcliff'
                           locDesc="Perched on the edge of [REDACTED], Redcliff marks the last bastion of civilization before [REDACTED].
                           The city is a fortess second only to Bastion, and is the HQ of the Alliance of Guardians. The city was established
                           as a base both close enough to the frontlines of [REDACTED] and far enough away to be safe. As a strategic failsafe,
                           the alliance has planned to destroy the [REDACTED] Bridge, should the need arise and hopefuly buy time for the realm.
                           The surrounding mountains provide ample resources for the city's forges and economy. The mountains also provide enough
                           protection from the north. The heart of Redcliff is the Great Hall, where the leaders of the Alliance meet and plan
                           the war effort."
                           locGov='The Alliance of Guardians'
                           locPop='Population: ~22,000'
                           icon={city}
                        />
                        <Marker 
                           top='17%'
                           left='83%'
                           locName='Stonehaven'
                           locDesc="Forged from steel and blood, Stonehaven is a military city built with the sole purpose of defending Iferon from
                           [REDACTED]. The walls are specially designed to with magic to withstand the onslaught of the [REDACTED] hordes.
                           The city is home to the Guardians, highly trained soliders clad in furs and steel. These soliders are constantly alert
                           and ready for battle. These soliders are battle hardend from the horros they've faced. Despite the constant threat,
                           a strong sense of camaraderie binds the city together. A family forged in the fires of war. Thank to its strategic location,
                           Stonehaven has access to significant resources and is a key part of the war effort. Stonehaven is a city that lives and breathes
                           defiance. A symbol of hope against the enroaching darkness."
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
                           locDesc="Description"
                           locGov='The Mirage Empire'
                           locPop='Population: ~100'
                           icon={town}
                        />
                        <Marker 
                           top='43%'
                           left='49%'
                           locName='Moltenhold'
                           locDesc="Description"
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
                           locDesc="Description"
                           locGov='Unaffiliated'
                           locPop='Population: ~12'
                           icon={village}
                        />
                        <Marker 
                           top='36%'
                           left='61.5%'
                           locName='Dunewatch'
                           locDesc="Description"
                           locGov='The Silver Ravens'
                           locPop='Population: ~63'
                           icon={village}
                        />
                        <Marker 
                           top='72%'
                           left='58%'
                           locName="Observatory #089"
                           locDesc="Description"
                           locGov='The Eldryn Empire'
                           locPop='Population: ~20'
                           icon={village}
                        />
                        {/* <Marker 
                           top='49%'
                           left='22%'
                           locName="Violet's Reach"
                           locDesc="Description"
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
                           locDesc="Description"
                           locGov='3 Floor Dungeon'
                           locPop='⭐ - ⭐⭐⭐'
                           icon={dungeon}
                        />
                        <Marker 
                           top='47%'
                           left='52%'
                           locName='The Emerald Mine'
                           locDesc="Description"
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
                           locDesc="Description"
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='44%'
                           left='56%'
                           locName='Mt. Riverspire'
                           locDesc="Description"
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='42%'
                           left='69%'
                           locName='Greenwall'
                           locDesc="Description"
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='30%'
                           left='55%'
                           locName='Mirage Watch'
                           locDesc="Description"
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='65%'
                           left='63.5%'
                           locName="Prairie's Crown"
                           locDesc="Description"
                           locGov=''
                           locPop=''
                           icon={mountain}
                        />
                        <Marker 
                           top='48%'
                           left='64.5%'
                           locName="Highland Peak"
                           locDesc="Description"
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
                           locDesc="Description"
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