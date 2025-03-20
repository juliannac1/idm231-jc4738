
function enterBday(event) {
    event.preventDefault();
    const bday = document.getElementById('bday-input');

    if (bday.value.length <= 0) return;
    month = parseInt(Number(bday.value.substring(5, 7)));
    day = parseInt(Number(bday.value.substring(8, 10)));
    findBday(month, day)
};

const form = document.querySelector('#bday-generator');
if (form) {
    form.addEventListener('submit', enterBday, false);
} else {
    console.log('no form found')
}

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else return null;
  }

function showIconDetail(icon) {
    const icon = iconData.filter(
        item => item.name === icon
    )[0]
    console.log(icon)
    iconImage.src = icon.image;
    iconName.innerText = icon.name;
    Intro.innerText = icon.intro;
    Descrip.innerText = icon.description;

    playsound(); //add sound
}
const iconbutton = document.getElementsByClassName('icon-button');

for (const button of iconButton) {
    button.addEventListener('click', () => {
        showClickedIcon(button); 
    }, false);
}

function getInfo(zodiac) {
    for (let icon of icons) {
        if (icon.zodiac == zodiac) {
            let info = [icon.name, icon.intro, icon.image, icon.sound, album.descrip];
            return info;
        }
    }
}

const icons= [
    {
        name: 'Boom',
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/boom.png',
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
    
    

    const helpButton = document.getElementById('help-button');
    const help_container = document.querySelector('#help-container');
   
    if (helpButton) {
        helpButton.addEventListener('click', () => {
            iconImage.src = 'image-asset/icon-mainicon.png';
            iconName.innerText = 'Instruction';
            icon.style.paddingTop = '1.2rem';
            Intro.innerText = 'Welcome to the icon Generator!';
            descrip.innerText = 'Enter your birthday above to discover whichicon is your new friend! You can also click on buttons on the side to read about other icons and corresponding characters.';
        }, false);
    }

    const help_close_btn = document.querySelector('.help-close-button')

if (help_close_btn) {}
  help_close_btn.addEventListener ('click', () => {
    if (help_container.style.display === 'flex') {
      help_container.style.display = 'none';
}})

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    if (form) {
        form.addEventListener('submit', handle_submit);
      } 
      