let icon = "";
let month = "";
let day = "";

const iconImage = document.getElementById("icon-img");
const iconName = document.getElementById("icon-name");
const iconIntro = document.getElementById("icon-intro");
const iconDescrip = document.getElementById("description");

function enterBday(event) {
    event.preventDefault();
    const bday = document.getElementById('bday-input');

    if (bdayValue.length < 3) return; 
    month = parseInt(Number(bdayValue[1],10));
    day = parseInt(Number(bdayValue[2],10));
    findBday(month, day)
};

const form = document.querySelector('#birthday-form');
if (form) {
    form.addEventListener('submit', enterBday, false);
} else {
    console.log('no form found')
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#birthday-form');
  if (form) {
      form.addEventListener('submit', enterBday, false);
  } else {
      console.error('Birthday form not found.');
  }
});



function showIconDetail(icon) {
  console.log("Selected icon:", icon); // Log the icon being passed to the function
  const mainIcon = iconData.filter(bud => bud.name === icon)[0]; // Use [0] to access the first result

  if (!mainIcon) {
      console.error("Icon not found:", icon); // Log error if icon is not found
      console.log("Available icon names:", iconData.map(bud => bud.name)); // Log all the names in iconData
      return;
  }

  console.log(mainIcon); // Check the details of the mainIcon
  iconImage.src = mainIcon.image;
  iconName.innerText = mainIcon.name;
  iconIntro.innerText = mainIcon.intro;
  iconDescrip.innerText = mainIcon.description;

  playsound(mainIcon.sound);
}

function findBday(month, day) {
  console.log("Month:", month, "Day:", day); // Log the month and day to check the values
  if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      icon = "Margo";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      icon = "Charlee";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      icon = "Neon";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      icon = "Sparkle";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      icon = "Taglo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      icon = "Blup";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      icon = "Cider";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
      icon = "Pumpkin";
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      icon = "Ranch";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      icon = "Boom";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
      icon = "Chunk";
  } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
      icon = "Mallow";
  }

  console.log("Icon set to:", icon); // Log the icon value set
  showIconDetail(icon);
}

function showIconDetail(icon) {
  console.log("Selected icon:", icon); // Check the value of icon being passed
  const mainIcon = iconData.filter(bud => bud.name === icon)[0]; // Use [0] to access the first result

  if (!mainIcon) {
      console.error("Icon not found:", icon); // Log error if icon is not found
      return;
  }
    console.log(mainIcon);
    iconImage.src = mainIcon.image;
    iconName.innerText = mainIcon.name;
    iconIntro.innerText = mainIcon.intro;
    iconDescrip.innerText = mainIcon.description;

    playsound(mainIcon.sound);
}

function playsound(sound) {
    const audioElement = document.getElementById('audioplayer');
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = sound;
    audioElement.play();
}

const iconButton = document.getElementsByClassName('icon-button');

for (const button of iconButton) {
    button.addEventListener('click', () => {
        showClickedIcon(button); 
    }, false);
}


function showClickedIcon(button) {
    const buddy = button.id;
    const mainIcon = iconData.filter(
        bud => bud.id === buddy
    )[0]
    console.log(mainIcon)
    iconImage.src = mainIcon.image;
    iconName.innerText = mainIcon.name;
    iconIntro.innerText = mainIcon.intro;
    iconDescrip.innerText = mainIcon.description;

    playsound(mainIcon.sound);
}

const helpButton = document.getElementById('help-button');

if (helpButton) {
    helpButton.addEventListener('click', () => {
        iconImage.src = 'images/icon.png';
        iconName.innerText = 'Instructions';
        iconName.style.paddingTop = '1.2rem';
        iconIntro.innerText = 'Welcome to ByteBuds!';
        iconDescrip.innerText = 'Enter your birthday above to find out which ByteBud represents you! You can also explore the buttons on the side to learn about other Buddies and their descriptions.';
    }, false);
}


const iconData= [
    {
        name: 'Boom',
        intro: "Capricorn",
        description: "The hardworking and responsible bestie who takes their role seriously. Probably listens well, follows commands, and always knows when it’s time for a snack. A little serious, but deep down, they’re a big softie.",
        image: 'characters/boom.capricornus.png',
        sound: 'sounds/capricorn.mp3',
        id: "boom",
    },
    {
        name: 'Chunk',
        intro: "Aquarius",
        description: "They love doing their own thing, sometimes staring off into space, but will randomly come up and give you the biggest, weirdest, most adorable hug.",
        image: 'characters/chunk.aquarius.png',
        sound: 'sounds/aquarius.mp3',
        id: "chunk",
    },
    {
        name: "Mallow",
        intro: "Pisces",
        description: "Loves naps, daydreaming, and being as close to you as possible. They probably give the sweetest, most soulful looks and always sense when you need a little extra love.",
        image: 'characters/mallow.pisces.png',
        sound: 'sounds/pisces.mp3',
        id: "mallow",
    },
    {
        name: "Margo",
        intro: "Aries",
        description: "Your bold and adventurous bestie! This Bytebud is always ready for action, they’re energetic, fearless, and always up for a challenge",
        image: 'characters/margo.aries.png',
        sound: 'sounds/aries.mp3',
        id: "margo",
    },
    {
        name: "Charlee",
        intro: "Taurus",
        description: "Loves treats, naps, and sitting right by your side. Stubborn when it comes to getting up, but endlessly loyal and protective. Their love language? Snacks and belly rubs!",
        image: 'characters/charlee.taurus.png',
        sound: 'sounds/taurus.mp3',
        id: "charlee",
    },
    {
        name: "Neon",
        intro: "Gemini",
        description: "The playful, talkative ByteBud that always keeps things interesting! One second they’re zooming around, the next they’re curling up next to you for a nap",
        image: 'characters/neon.gemini.png',
        sound: 'sounds/gemini.mp3',
        id: "neon",
    },
    {
        name: "Sparkle",
        intro: "Cancer",
        description: "The emotional support bestie who always knows when you need a cuddle. Loves sitting on your lap, following you everywhere, and giving you big, loving eyes. Would rather stay in with you than go outside—pure fluffball of love!",
        image: 'characters/sparkle.cancer.png',
        sound: 'sounds/cancer.mp3',
        id: "sparkle",
    },
    {
        name: "Taglo",
        intro: "Leo",
        description: "The sassy, confident ByteBud that struts around like they own the place. Loves attention, posing for pictures, and showing off their best tricks. They’re affectionate, fiercely loyal, and definitely the star of your heart!",
        image: 'characters/taglo.leo.png',
        sound: 'sounds/leo.mp3',
        id: "taglo",
    },
    {
        name: "Blup",
        intro: "Virgo",
        description: "Probably organizes their toys and loves a routine. Super smart, loves learning new things, and always watches over you like a tiny guardian.",
        image: 'characters/blup.virgo.png',
        sound: 'sounds/virgo.mp3',
        id: "blup",
    },
    {
        name: "Cider",
        intro: "Libra",
        description: "The friendly, charming ByteBud who loves everyone! They just want peace, harmony, and all the love and attention they can get.",
        image: 'characters/cider.libra.png',
        sound: 'sounds/libra.mp3',
        id: "cider",
    },
    {
        name: "Pumpkin",
        intro: "Scorpio",
        description: "They act independent but secretly want to be your shadow. If you’re their person, they’ll be loyal to the end, with big soulful eyes that say “I love you.”",
        image: 'characters/pumpkin.scorpio.png',
        sound: 'sounds/scorpio.mp3',
        id: "pumpkin",
    },
    {
        name: "Ranch",
        intro: "Sagittarius",
        description: "The adventurous, goofy ByteBud that is always on the move. Loves road trips, long walks, and anything exciting. They’ll push you to be more spontaneous and will always be your little explorer buddy!",
        image: 'characters/ranch.sag.png',
        sound: 'sounds/sagittarius.mp3',
        id: "ranch",
    }];
  
    
    function enterBday(event) {
      event.preventDefault();
      console.log("Birthday form submitted!"); // ✅ Check if function runs
  
      const bday = document.getElementById('bday-input');
      if (!bday || bday.value.length === 0) {
          console.log("No birthday input detected."); // ✅ Check if input exists
          return;
      }
  
      const bdayValue = bday.value.split("-");
      if (bdayValue.length < 3) {
          console.log("Invalid date format:", bday.value); // ✅ Check input format
          return;
      }
  
      month = parseInt(bdayValue[1], 10);
      day = parseInt(bdayValue[2], 10);
      console.log("Extracted month:", month, "Extracted day:", day); // ✅ Check extracted values
  
      findBday(month, day);
  }