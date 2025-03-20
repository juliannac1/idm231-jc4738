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
      icon = "blup";
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
        iconImage.src = 'image-asset/icon-maindish.png';//change this part
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
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'images/characters/boom.capricornus.png',
        sound: 'sounds/boom.wav',
        id: "boom",
    },
    {
        name: 'Chunk',
        intro: "Aquarius",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/chunk.png',
        sound: 'sounds/chunk.wav',
        id: "chunk",
    },
    {
        name: "Mallow",
        intro: "Pisces",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/mallow.png',
        sound: 'sounds/mallow.wav',
        id: "mallow",
    },
    {
        name: "Margo",
        intro: "Aries",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/margo.png',
        sound: 'sounds/margo.wav',
        id: "margo",
    },
    {
        name: "Charlee",
        intro: "Taurus",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/charlee.png',
        sound: 'sounds/charlee.wav',
        id: "charlee",
    },
    {
        name: "Neon",
        intro: "Gemini",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/neon.png',
        sound: 'sounds/neon.wav',
        id: "neon",
    },
    {
        name: "Sparkle",
        intro: "Cancer",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/sparkle.png',
        sound: 'sounds/sparkle.wav',
        id: "sparkle",
    },
    {
        name: "Taglo",
        intro: "Leo",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/taglo.png',
        sound: 'sounds/taglo.wav',
        id: "taglo",
    },
    {
        name: "Glup",
        intro: "Virgo",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/glup.png',
        sound: 'sounds/glup.wav',
        id: "glup",
    },
    {
        name: "Cider",
        intro: "Libra",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/cider.png',
        sound: 'sounds/cider.wav',
        id: "cider",
    },
    {
        name: "Pumpkin",
        intro: "Scorpio",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/pumpkin.png',
        sound: 'sounds/pumpkin.wav',
        id: "pumpkin",
    },
    {
        name: "Ranch",
        intro: "Sagittarius",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/ranch.png',
        sound: 'sounds/ranch.wav',
        id: "ranch",
    }];
  
    
