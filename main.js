let icon ="";
let month = "";
let day = "";

const iconImage = document.getElementById("icon_img");
const iconName = document.getElementById("icon_name");
const iconIntro = document.getElementById("icon_intro");
const iconDescription = document.getElementById("description");

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