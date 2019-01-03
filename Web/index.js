var champions = {
    0: 'Androxus' ,
    1: 'Ash' ,
    2: 'Barik' ,
    3: 'Bomb King' ,
    4: 'Buck' ,
    5: 'Cassie' ,
    6: 'Dredge' ,
    7: 'Drogoz' ,
    8: 'Evie' ,
    9: 'Fernando' ,
    10: 'Furia' ,
    11: 'Grohk' ,
    12: 'Grover' ,
    13: 'Inara' ,
    14: 'Jenos' ,
    15: 'Khan' ,
    16: 'Kinessa' ,
    17: 'Koga' ,
    18: 'Lex' ,
    19: 'Lian' ,
    20: 'Maeve' ,
    21: 'Makoa' ,
    22: 'Maldamba' ,
    23: 'Moji' ,
    24: 'Pip' ,
    25: 'Ruckus' ,
    26: 'Seris' ,
    27: 'Shalin' ,
    28: 'Skye' ,
    29: 'Strix' ,
    30: 'Talus' ,
    31: 'Terminus' ,
    32: 'Torvald' ,
    33: 'Tyra' ,
    34: 'Viktor' ,
    35: 'Vivian' ,
    36: 'Willo' ,
    37: 'Ying' ,
    38: 'Zhin' ,
};

var lc = {
    0 : ['Cursed Cylinder', 'Dark Stalker', 'Defiant Fist', 'Godslayer'] ,
    1 : ['Rally Here', 'Fortress Breaker', 'Slug Shot', 'Battering Ram'] ,
    2 : ['Tinkerin', 'Fortify', 'Hair Trigger', 'Architectonics'] ,
    3 : ['Accelerant', 'Demolition', 'Royal Subjects', 'Chain Reaction'] ,
    4 : ['Bulk Up', 'Bounce House', 'Bucking Madness', 'Ensnare'] ,
    5 : ['Exaction', 'Big Game', 'Just Breathe', 'Impulse'] ,
    6 : ['Scuttle', 'Abyss Spike', 'Hurl', 'Freebooter'] ,
    7 : ['Fusillade', 'Combustible', 'Reign of Terror', 'W.Y.R.M. Jets'] ,
    8 : ['Over the Moon', 'Reprieve', 'Snow Globe', 'Wormhole'] ,
    9 : ['Scorch', 'Formidable', 'Dragonfire Lance', 'Aegis'] ,
    10 : ['Solar Blessing', 'Celerity', 'Cherish', 'Exterminate'] ,
    11 : ['Maelstrom', 'Wraith', "Spirit's Domain", 'Totemic Ward'] ,
    12 : ['Ferocity', 'Deep Roots', 'Efflorescence', 'Rampant Blooming'] ,
    13 : ["Mother's Grace", 'Tremors', 'Wrath of the Stagalla', 'Treacherous Ground'] ,
    14 : ['Celestial Touch', 'Luminary', 'Binary Star', 'The Power Cosmeum'] ,
    15 : ["Lian's Shield", 'Storm of Bullets', 'Vortex Grip', 'Firing Line'] ,
    16 : ['Suppression', 'Steady Aim', 'Reposition', 'Eagle Eye'] ,
    17 : ['Adrenaline Junkie', 'Blood Reaper', 'Master of Arms', 'Dragon Fangs'] ,
    18 : ['Death Hastens', 'Discovery', 'The Law Won', 'Heroism'] ,
    19 : ['Eminence', 'Precision', 'Death and Taxes', 'Alacrity'] ,
    20 : ["Rogue's Gambit", 'Artful Dodger', 'Street Justice', 'Cat Burglar'] ,
    21 : ['Pluck', 'Half Shell', 'Davey Jones Locker', 'Leviathan'] ,
    22 : ["Wekono's Wrath", "Spirit's Chosen", "Wekono's Curse", 'Ripened Gourd'] ,
    23 : ['Yummy', 'Boom Boom', 'Toot', 'Snack Attack'] ,
    24 : ['Catalyst', 'Combat Medic', 'Mischief', 'Mega Potion'] ,
    25 : ['Aerial Assault', 'Overdrive', 'Rocket Barrage', 'Flux Generator'] ,
    26 : ['Mortal Reach', 'Soul Collector', 'The Void Abides', 'Agony'] ,
    27 : ['Shifting Sands', 'Recurve', 'Explosive Arrows', 'Desert Shadow'] ,
    28 : ['Preparation', 'Surprise Attack', 'Smoke and Dagger', 'Debilitate'] ,
    29 : ['Nocturnal', 'Crack Shot', 'Unauthorized Use', 'Ambush'] ,
    30 : ['Inner Strength', 'Faustian Bargain', 'Nothing Personal', 'Raging Demon'] ,
    31 : ['Undying', 'Crush', 'Seething Rage', 'Decimation'] ,
    32 : ['Field Study', 'Alternating Current', 'Thanks Grandpa', 'Direct Current'] ,
    33 : ['Mercy Kill', 'Hunting Party', 'Burn Monster!', 'First Blood'] ,
    34 : ['Cardio', 'Firefight', 'Shrapnel', 'Burst mode'] ,
    35 : ['Suspect Everyone', 'Opportunity in Chaos', 'Booby Trap', 'Sapper Rounds'] ,
    36 : ['Scorched Earth', 'Blastflower', 'Nightshade', 'Scorn'] ,
    37 : ['Lifelike', 'Resonance', 'Life Exchange', 'Focusing Lens'] ,
    38 : ['Guillotine', 'Retaliation', 'Yomi', 'Smolder'] ,
};

var cards = {
    0 : ['Abyss Walker', 'Abyssal Touch', 'Buying Time', 'Disrupt', 'Elusive', 'Equivalent Exchange', 'Featherweight', 'Marksman', 'Power of the Abyss', 'Quick Draw', 'Seething Hatred', 'Sleath of the Hand', 'Spiteful', 'Through the Warp', 'Vengeance', 'Watchful'] ,
    1 : ['Battlement', 'Brawl', 'Castle', 'Fervor', 'Furious', 'Gate Crasher', 'Heavy Metal', 'Indomitable', 'Percussion', 'Ramparts', 'Siege Engine', 'Thrive', 'Trebuchet', 'Vanguard', 'War Machine', 'Watchtower'] ,
    2 : ['Accelerator Field', 'Bowling Ball', 'Brave and Bold', 'Bunker', 'Combat Repair', 'Double Time', 'Failsafe', 'Field Deploy', 'Forged Alloy', 'Foundation', 'Fuel Efficiency', 'Healing Station', "One Man's Scrap", "One Man's Treasure", 'Palisade', 'Red Streak'] ,
    3 : ['Ablative Coating', 'Air Blast', 'Backdraft', 'Bomb Shelter', 'Countdown', 'Doomsday', 'Explosive Entrance', 'Fallout', 'Jolt', "King's Court", "King's New Cloak", 'Mad Bomber', 'Reinforced Casing', 'Royal Decree', 'Shock and Awe', 'Uncontrolled'] ,
    4 : ['Bully', 'Concussion', 'Deep Breath', 'Exhilarate', 'Giga Siphon', 'Gotcha', 'Leg Day', 'Momentum', 'No Escape', 'Rapid Sustain', 'Reconstruction', 'Seismic Wave', 'Stomping Ground', 'Street Sweeper', 'Tangled', 'Vigor'] ,
    5 : ['Blast Shower', 'Drain Life', 'Excitement', 'Fatal Sign', 'Incitement', 'Intense Training', 'Kinetics', 'Lunge', 'Megaton', 'Onslaught', 'Quiver', 'Raze', 'Sky Warden', 'Somersault', 'Territorial', 'Tumble'] ,
    6 : ['Abyss Cannon', 'Blow the Man Down', 'Cursed Weaponry', 'Dark Bargain', 'Dreadnought', 'Expansive Vault', 'Gun Deck', "Hangman's Ire", 'Haul on the Bowline', 'Heave Away', 'Hull Piercer', 'Mortal Skewer', 'Plank Walker', 'Reckless Barrage', 'Sea Dogs', 'Spy Glass'] ,
    7 : ['Altitude', 'Apex Predator', 'Bask', 'Condescension', 'Decimate', 'Follow the Scent', 'Fuel Tank', 'Hot Swap', 'Hyper Boost', 'Lung Capacity', 'Masterful', 'Propel', 'Rain of Fire', 'Spitfire', 'Survival', 'Thrill of the Hunt'] ,
    8 : ['Avalanche', 'Biting Cold', 'Cantrip', 'Chilled', 'Cold Acclimation', 'Cold Blooded', 'Flicker', 'Frigid Field', 'Great Distance', 'Howling Gale', 'Impact', 'Keep Moving', 'Killing Frost', 'Riftwalk', 'Swift Witch', 'Teleport'] ,
    9 : ['Brand', 'Cavalier', 'Dire Need', 'Fearless Leader', 'Heat Transfer', 'Hot Pursuit', 'Immovable Object', 'Incinerate', 'Last Stand', 'Launch', 'Looks That Kill', 'Pyre', 'Running Start', 'Safe Travel', 'Towering Barrier', 'Unstoppable Force'] ,
    10 : ['Burning Oath', 'Conviction', 'Devout Dexterity', 'Fire Siphon', 'Hallowed Sight', 'Ignition', 'Incandescent Being', 'Inner Fire', 'Light Forge', 'Light of Dawn', 'Pyre Walker', 'Pyretic Dynamo', 'Righteous Path', 'Ruthless', 'Solar Flare', 'Stoke the Fire'] ,
    11 : ['Arc Lightning', 'Astral Traveler', 'Conduit', 'Crackle', 'Electrostatic', 'Gale', 'Haunting', 'Healing Rain', 'Lightning Rod', 'Monolith Totem', 'Outreach', 'Phantom', 'Shamanic Might', 'Thunderlord', 'Thunderstruck', 'Totemic Rescue'] ,
    12 : ['Adrenaline', 'Barkskin', 'Chop Down', 'Chopper', 'Fatalis', 'Force of Nature', 'Gentle Breeze', 'Heavenly Agility', "Nature's Quickness", 'Over Growth', 'Perennial', 'Pick Up', 'Rebound', 'Unstoppable', 'Verdant Expanse', 'Vine Grasp'] ,
    13 : ['Caretaker', 'Cloudbreaker', 'Crag', 'Geomancer', 'Insurmountable', 'Living Stone', 'Lodestone', 'Plateau', 'Rolling Stones', 'Sacred Ground', 'Shear', 'Standing', 'Steadfast', 'Stone Bulkwark', 'Summit', 'Whetstone'] ,
    14 : ['Astral Cycle', 'Cosmic Barrier', 'Eclipse', 'Falling Star', 'Heavenly Pull', 'Inertia', 'Inner Peace', 'Lightyears', 'Lorentz', 'Penumbra', 'Relativity', 'Retrograde', 'Sidereal', 'Solar Sails', 'Space Jam', 'Star Seeker'] ,
    15 : ['Bloodthirst', 'Chokehold', 'Close and Personal', 'Excessive Force', 'Hold The Line!', 'Hopeguard', 'Hulking Strength', 'Into The Breach!', 'Lifetaker', 'Martial Law', 'Never Surrender!', 'Open Fire!', 'Platemail', 'Ready For War', 'Shield Wall', 'Vigorous Defense'] ,
    16 : ['Amplitude', 'Beam Me Up', 'Bob and Weave', 'Calibrate', 'Generator', 'Headstrong', 'Lie in Wait', 'Octoppressor', 'Open Season', 'Power Supply', 'Prodigy', 'Quick Scope', 'Reconfigure', 'Restore', 'True Grit', 'Well Stocked'] ,
    17 : ['Criminal Record', 'Gale Storm', 'Guild Tactics', 'Harsh Training', 'Memento', 'Raw Talent', 'Something To Prove', 'Surprise!', 'Swift Hands', 'Tenacious', 'Trained Killer', 'Trespasser', 'Trigger Happy', 'Unyielding', 'Wanted', "Wind's Embrace"] ,
    18 : ['Assail', 'Commencement', 'Compel', 'Conditioned', 'Fortitude', 'Hardiness', 'Inescapable', 'Juke Boots', 'Justice Served', 'Keen Sight', 'Requip', 'Restock', 'The Hunted', 'Warrants Out', 'Well Oiled', "Wicked Don't Rest"] ,
    19 : ['Bloodline', 'Divine Right', "Eagle's Emerald", 'Heir to the Throne', 'Heraldry', 'Highborn', 'Inheritance', 'Manifest Destiny', 'Noble Crest', 'Present Arms', 'Revitalizing Gem', 'Royal Seal', 'Shining Topaz', 'Signet Ring', 'Superiority', 'Swift Jade'] ,
    20 : ['Chase', 'Cut and Run', 'Featherlite', 'Fight or Flight', 'On Edge', 'Patch Up', 'Persistence', 'Predation', 'Savagery', 'Scamper', 'Scar Tissue', 'Shred', 'Sixth Sense', 'Street', 'Streetrunner', 'Walk it Off'] ,
    21 : ['Ancient Resolve', 'Barrier Reef', 'Carapace', 'Crashing Wave', 'Determination', 'Ebb and Flow', 'Harden', 'Lighter Cannonballs', 'Rampage', 'Salvage', 'Sea Legs', 'Spring Tide Grace', 'Strongarm', 'Surf', 'Tidal', 'Tsunami'] ,
    22 : ['Eerie Presence', 'Feed the Spirits', 'Fleeting', 'Incorporeal', 'Lighter Gourd', 'Liminal Passage', 'Many Gourds', 'Otherworldly', 'Possession', 'Pungent', 'Ritual Magic', 'Snake Pit', "Spirit's Touch", 'Sustenance', 'Swift Spirits', 'Venomous Gourd'] ,
    23 : ['Boop', 'Cozy', 'Dense Woods', 'Fluffy', 'Glimmer', 'Greater Good', 'Harmonious', 'Morning Breath', "Nature's Blessing", 'Peppy', 'Scoot', 'Scurry', 'Shimmering', 'Symbiotic', 'Will-o-the-Wisp', 'Wobbles'] ,
    24 : ["Acrobat's Trick", 'Acumen', 'Escape Artist', 'From Above', 'Gift Giver', 'Graviton', 'Medicinal Excellence', 'Moxie', 'Pep in the Step', 'Refreshing Jog', 'Reload', 'Shrewd Move', 'Side Tanks', 'Smithereens', 'Sprint', 'Sturdy'] ,
    25 : ['Air Cooled', 'At The Ready', 'Countermeasure', 'Crystal Capacitor', 'Dampener', 'Regenerative Alloy', 'Extended Magazines', 'Fuel Reserves', 'Metal March', 'Nanotechnology', 'No Chill', 'Opulence', 'Proximity', 'Quick Loader', 'Refraction', 'Warden'] ,
    26 : ['Bane', 'Blood Pact', 'Dark Sight', 'Dark Whisper', 'Dusk Walker', 'Ebon Dynamo', 'Essence Rip', 'Fade to Black', 'Nether Siphon', 'Revenant', 'Sorceress', 'Soul Forge', 'Spirit Leech', 'Umbral Gait', 'Veil', 'Wickedness'] ,
    27 : ['Bullseye', 'Daring Escape', 'Grounded', 'Master Archer', 'Mirage', 'Oasis', 'Poise', 'Quick Sand', 'Run Like the Wind', 'Run Them Down', 'Shimmer', 'Skewer', 'Strike True', 'Swagger', 'Wanderlust', 'Windwall'] ,
    28 : [' Cloak', 'Confound', 'Decrepify', 'Dissipate', 'Emergency Exit', 'Healing Vapors', 'Nimble Fingers', 'Ninja', 'Poisoner', 'Quick Smoker', 'Shadow Affinity', 'Slip Away', 'Specter', 'Tactical Reload', 'Twilight Armor', 'Victory Rush'] ,
    29 : ['Bushwhack', 'Cooled Mags', 'Dexterous', 'Escape Plan', 'Flare XL', 'Grizzled', 'Guerilla Tactics', 'Infused Crystals', 'Overburn', 'Relentless', 'Resourceful', 'Roost', 'Stalker', 'Tactical Retreat', 'Trigger Control', 'White Knuckle'] ,
    30 : [' Ancient Power', 'Antediluvian', 'Carry through', 'Daredevil', 'Dark Vision', 'Eternal', 'Evanescent', 'Guts', 'Last Remnant', 'Perseverance', 'Primeval Might', 'Reclamation', 'Relic Affinity', 'Revitalize', 'Spirited', 'Transient'] ,
    31 : ['Abomination', 'Blood and Stone', 'Despoiler', 'Devastation', 'Forsaken', 'Hulking Monstrosity', 'It Follows', 'It Waits', 'It Watches', 'Necromantic Might', 'Playing God', 'Powerslave', 'Strength of Stone', 'Unfeeling', 'We Can Rebuild Him', 'Wrecking Ball'] ,
    32 : ['Arcane Etching', 'Conduction', 'Eldritch Speed', 'Glyph of Freedom', 'Glyph of Health', 'Glyph of Siphoning', 'Glyph of the Fist', 'Hearthwarder', 'Induction', 'Infusion', 'Lifegiver', 'Rune Torrent', "Scribe's Wit", 'Timeshaper', 'Vital Grasp', 'Winddancer'] ,
    33 : ['Bandolier', 'Favored Quarry', 'Hunting Season', 'In The Fray', 'Incensed', 'Locked and Loaded', 'Napalm', 'Primal Might', 'Quick Release', 'Ranger', 'Salamander Hide', 'Survivalist', 'Tracker', 'Trail Blazer', 'Turn The Table', 'Volatile'] ,
    34 : ['Compensator', 'Fire in the Hole', 'Firing Stance', 'Flak Jacket', 'Grenadier', 'Guerrilla Warfare', 'Hit and Run', 'Hot Potato', 'On The Move', 'Predator', 'Reflexes', 'Run and Gun', 'Scramble', 'Second Wind', 'Speed Load', 'XL Mag'] ,
    35 : ['Contingency', 'Controlling Nature', 'Crack the Whip', 'Eyes on the Prize', 'Hidden Reserves', 'Informants', 'Joyless Eyes', 'Lightweight Alloy', 'Nowhere to Hide', 'Numbed Heart', 'One Step Ahead', 'Plans Within Plans', 'Runic Ammunition', 'Scapegoat', 'Unchecked Ambition', 'Unfair Advantage'] ,
    36 : ['Antics', 'Fauna', 'Flitter', 'Flora', 'Germination', 'Hijinks', 'Hummingbird', 'Just Believe!', 'Nectar', 'Photosynthesis', 'Pixie Dust', 'Shenanigans', 'Sparkle', 'Spritely', 'Sprouts', 'Twilight'] ,
    37 : ['Brittle', 'Carry On', 'Disappear', 'Efficiency', 'Encouragement', 'Ephemeral', 'Fracture', 'Harmony', 'Mesmerism', 'Pursuit', 'Rewind', 'Shuffle', 'Spring Bloom', 'Spring Forward', 'Squadron', 'Tangible'] ,
    38 : ['Blade Dance', 'Dragon Oil', 'Embers', 'Fan the Flames', 'Footwork', 'Fuel for the Fire', 'Heartless', 'Hideout', 'Infamy', 'Kindling', 'Malice', 'Master Stance', 'Perfect Block', 'Up in Smoke', 'Viciousness', 'Wild Fire'] ,
}

function hideModal() {
    $("#myModal").fadeOut(500);
}

function randomize(x=99) { 
    $("#myModal").fadeIn(500);

    var temp = {};

    if (x==99) {
        x = Math.floor(Math.random()*39);
    }

    var y = Math.floor(Math.random()*4);
    var total = 0;

    var j = Math.floor(Math.random()*16);
    for (var i = 0; i < 5; i++) {
        while(Object.keys(temp).includes(""+j+"")) {
            j = Math.floor(Math.random()*16);
        }
        var z = Math.floor(Math.random()*3)+1;
        total+=z;
        temp[j]=z;
    }

    while(total < 15){
        rand = Object.keys(temp)[Math.floor(Math.random()*5)];
        if (temp[rand] < 5) {
            temp[rand]++;
            total++;
        }
    }
    document.getElementById('result').innerHTML = "";
    document.getElementById('result').innerHTML += champions[x]+"<br>"+lc[x][y]+"<br>";

    for (var i = 0; i < 5; i++) {
        document.getElementById('result').innerHTML += ("<br>" + cards[x][Object.keys(temp)[i]] + " - " + temp[Object.keys(temp)[i]]);
    }

    window.onclick = function(event) {
      if (event.target == document.getElementById("myModal")) {
        hideModal();
      }
    }

    return false;
}

function report() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Reach me through steam or send a mail on deepme987@gmail.com (copied in clipboard).");
}