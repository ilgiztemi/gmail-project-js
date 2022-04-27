import { primary } from './primary.js';
import { promotions } from './promotions.js';
import { social } from './social.js';

const mails = document.querySelector('.mails-inbox');
const leftMenuBar = document.getElementById('left-menu-btn');
const leftPart = document.querySelector('.left-bar');
const leftMenu = document.querySelectorAll('#left-menu');
const compose = document.querySelector('.compose');
const socialBtn = document.querySelector('.socialBtn');
const promoBtn = document.querySelector('.promoBtn');
const primaryBtn = document.querySelector('.primaryBtn');

//right icons
const supportIcon = document.querySelector('.fa-circle-question');
const supportDiv = document.getElementById('support');
const bars = document.querySelector('.fa-buromobelexperte');
const extensions = document.getElementById('extensions');
const accountIcon = document.querySelector('.account-icon');
const account = document.getElementById('account');
const rightBar = document.querySelector('.right-bar');
const rightBarBtn = document.querySelector('.fa-angle-right');
let clicked = false;

//support function
supportIcon.addEventListener("click", function() {
    if (clicked === true) {
        supportDiv.style.display = "block";
        clicked = false;
    } else {
        supportDiv.style.display = "none";
        clicked = true;
    }
})

bars.addEventListener("click", function() {
    if (clicked === true) {
        extensions.style.display = "block";
        clicked = false;
    } else {
        extensions.style.display = "none";
        clicked = true;
    }
})

accountIcon.addEventListener("click", function() {
    if (clicked === true) {
        account.style.display = "block";
        clicked = false;
    } else {
        account.style.display = "none";
        clicked = true;
    }
})

rightBarBtn.addEventListener("click", function() {
    if (clicked === true) {
        rightBar.style.display = "none";
        clicked = false;
    } else {
        rightBar.style.display = "block";
        clicked = true;
    }
})



function multiplyP(list) {
    for(let mail of list) {
        const mailTime = mail.date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });
        const mailsList = `<li id="${mail.id}>
            <div class="mails-inbox-icons">
                <i class="fa-regular fa-square-full"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-head-side-mask"></i>
            </div>
            <p class='sender'>${mail.senderName}</p>
            <p class='message'>${mail.messages[0].message}</p>
            <p id='time-date'>${mailTime}</p>
        </li>`;
        mails.innerHTML += mailsList;
    }
}
multiplyP(primary);
multiplyP(promotions);
console.log(multiplyP(promotions))

// window.addEventListener('click', function(el) {
//     if(clicked === true && el.target.className === 'socialBtn') {
//         clicked = false;
//         multiplyP(social);
//         console.log(social)
//     }
//     else if(el.target.className = 'promoBtn') {
//         mails.innerHTML = '';
//         multiplyP(promotions);
//     } 
//     else if(el.target.className = 'primaryBtn') {
//         mails.innerHTML = '';
//         multiplyP(primary);
//     }
// })


leftMenuBar.addEventListener('click', function() {
    // compose.style.width = '3%';
    // compose.children[1].innerHTML = '';
    // // compose.secondChildElement = 'none';
    // leftPart.style.flexBasis = '2%';
    // for (let i = 0; i < leftMenu.length; i++) {
    //         leftMenu[i].style.display = 'none';
    //  }
    //  if(compose.children[1].innerHTML = '') {
    //     leftMenu.children.style.display = 'block'
    //  }
})

socialBtn.addEventListener('click', () => {
    mails.innerHTML = '';
    multiplyP(social);
})

