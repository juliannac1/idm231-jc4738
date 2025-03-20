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

    if (bday.value.length <= 0) return;
    month = parseInt(Number(bday.value.substring(5, 7)));
    day = parseInt(Number(bday.value.substring(8, 10)));
    findBday(month, day)
};

const form = document.querySelector('#birthday-form');
if (form) {
    form.addEventListener('submit', enterBday, false);
} else {
    console.log('no form found')
}



function findBday(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      intro = "margo";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      icon = "charlee";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      icon = "neon";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      icon = "sparkle";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      icon = "taglo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      icon = "glup";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      icon = "cider";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
      icon = "pumpkin";
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      icon = "ranch";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      icon = "boom";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
      icon = "chunk";
  } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
      dish = "mallow";
  }
  showIconDetail(icon)
};


function showIconDetail(icon) {
    const mainIcon = iconData.filter(
        bud => bud.name === icon
    )[0]
    console.log(mainIcon)
    iconImage.src = mainIcon.image;
    iconName.innerText = mainIcon.name;
    iconIntro.innerText = mainIcon.intro;
    iconDescrip.innerText = mainIcon.description;

    playsound(Icon.sound);
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
        iconName.innerText = 'Instruction';
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
        sound: 'sounds/boom.wav',
        id: "boom",
    },
    {
        name: 'Chunk',
        intro: "Aquarius",
        description: "They love doing their own thing, sometimes staring off into space, but will randomly come up and give you the biggest, weirdest, most adorable hug.",
        image: 'characters/chunk.aquarius.png',
        sound: 'sounds/chunk.wav',
        id: "chunk",
    },
    {
        name: "Mallow",
        intro: "Pisces",
        description: "Loves naps, daydreaming, and being as close to you as possible. They probably give the sweetest, most soulful looks and always sense when you need a little extra love.",
        image: 'characters/mallow.pisces.png',
        sound: 'sounds/mallow.wav',
        id: "mallow",
    },
    {
        name: "Margo",
        intro: "Aries",
        description: "Your bold and adventurous bestie! This Bytebud is always ready for action, they’re energetic, fearless, and always up for a challenge",
        image: 'characters/margo.aries.png',
        sound: 'sounds/margo.wav',
        id: "margo",
    },
    {
        name: "Charlee",
        intro: "Taurus",
        description: "Loves treats, naps, and sitting right by your side. Stubborn when it comes to getting up, but endlessly loyal and protective. Their love language? Snacks and belly rubs!",
        image: 'characters/charlee.taurus.png',
        sound: 'sounds/charlee.wav',
        id: "charlee",
    },
    {
        name: "Neon",
        intro: "Gemini",
        description: "The playful, talkative ByteBud that always keeps things interesting! One second they’re zooming around, the next they’re curling up next to you for a nap",
        image: 'characters/neon.gemini.png',
        sound: 'sounds/neon.wav',
        id: "neon",
    },
    {
        name: "Sparkle",
        intro: "Cancer",
        description: "The emotional support bestie who always knows when you need a cuddle. Loves sitting on your lap, following you everywhere, and giving you big, loving eyes. Would rather stay in with you than go outside—pure fluffball of love!",
        image: 'characters/sparkle.cancer.png',
        sound: 'sounds/sparkle.wav',
        id: "sparkle",
    },
    {
        name: "Taglo",
        intro: "Leo",
        description: "The sassy, confident ByteBud that struts around like they own the place. Loves attention, posing for pictures, and showing off their best tricks. They’re affectionate, fiercely loyal, and definitely the star of your heart!",
        image: 'characters/taglo.leo.png',
        sound: 'sounds/taglo.wav',
        id: "taglo",
    },
    {
        name: "Blup",
        intro: "Virgo",
        description: "Probably organizes their toys and loves a routine. Super smart, loves learning new things, and always watches over you like a tiny guardian.",
        image: 'characters/blup.virgo.png',
        sound: 'sounds/blup.wav',
        id: "blup",
    },
    {
        name: "Cider",
        intro: "Libra",
        description: "The friendly, charming ByteBud who loves everyone! They just want peace, harmony, and all the love and attention they can get.",
        image: 'characters/cider.libra.png',
        sound: 'sounds/cider.wav',
        id: "cider",
    },
    {
        name: "Pumpkin",
        intro: "Scorpio",
        description: "They act independent but secretly want to be your shadow. If you’re their person, they’ll be loyal to the end, with big soulful eyes that say “I love you.”",
        image: 'characters/pumpkin.scorpio.png',
        sound: 'sounds/pumpkin.wav',
        id: "pumpkin",
    },
    {
        name: "Ranch",
        intro: "Sagittarius",
        description: "The adventurous, goofy ByteBud that is always on the move. Loves road trips, long walks, and anything exciting. They’ll push you to be more spontaneous and will always be your little explorer buddy!",
        image: 'characters/ranch.sag.png',
        sound: 'sounds/ranch.wav',
        id: "ranch",
    }];
  
    
