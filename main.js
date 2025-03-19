let icon ="";
let month = "";
let day = "";

const iconImage = document.getElementById("icon_img");
const iconName = document.getElementById("icon_name");
const iconIntro = document.getElementById("icon_intro");
const iconDescrip = document.getElementById("description");

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

function findBday(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        icon = "margo";
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
        icon = "mallow";
    }
    showIconDetail(icon)
};

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

function showClickedIcon(button) {
    const icon = button.id;
    const mainIcon = iconData.filter(
        item => item.id === icon
    )[0]
    console.log(mainicon)
    dishImage.src = mainIcon.image;
    dishName.innerText = mainIcon.name;
    dishIntro.innerText = mainIcon.intro;
    dishDescrip.innerText = mainIcon.description;

    playsound(mainIcon.sound);
}

const iconData = [
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
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/chunk.png',
        sound: 'sounds/chunk.wav',
        id: "chunk",
    },
    {
        name: "Mallow",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/mallow.png',
        sound: 'sounds/mallow.wav',
        id: "mallow",
    },
    {
        name: "Margo",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/margo.png',
        sound: 'sounds/margo.wav',
        id: "margo",
    },
    {
        name: "Charlee",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/charlee.png',
        sound: 'sounds/charlee.wav',
        id: "charlee",
    },
    {
        name: "Neon",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/neon.png',
        sound: 'sounds/neon.wav',
        id: "neon",
    },
    {
        name: "Sparkle",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/sparkle.png',
        sound: 'sounds/sparkle.wav',
        id: "sparkle",
    },
    {
        name: "Taglo",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/taglo.png',
        sound: 'sounds/taglo.wav',
        id: "taglo",
    },
    {
        name: "Glup",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/glup.png',
        sound: 'sounds/glup.wav',
        id: "glup",
    },
    {
        name: "Cider",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/cider.png',
        sound: 'sounds/cider.wav',
        id: "cider",
    },
    {
        name: "Pumpkin",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/pumpkin.png',
        sound: 'sounds/pumpkin.wav',
        id: "pumpkin",
    },
    {
        name: "Ranch",
        intro: "Capricorn",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'characters/ranch.png',
        sound: 'sounds/ranch.wav',
        id: "ranch",
    }];
    


    const helpButton = document.getElementById('help-button');

    if (helpButton) {
        helpButton.addEventListener('click', () => {
            iconImage.src = 'image-asset/icon-mainicon.png';
            iconName.innerText = 'Instruction';
            icon.style.paddingTop = '1.2rem';
            Intro.innerText = 'Welcome to the icon Generator!';
            descrip.innerText = 'Enter your birthday above to discover whichicon is your new friend! You can also click on buttons on the side to read about other icons and corresponding characters.';
        }, false);
    }