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
// function multiplyS(list) {
//     for(let mail of list) {
//         const mailTime = mail.date.toLocaleString('en-US', {
//             hour: 'numeric',
//             minute: 'numeric',
//             hour12: true,
//           });
//         const mailsList = `<li id="${mail.id}>
//             <div class="mails-inbox-icons">
//                 <i class="fa-regular fa-square-full"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-head-side-mask"></i>
//             </div>
//             <p class='sender'>${mail.senderName}</p>
//             <p class='message'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab repellendus nemo officia. Adipisci, esse.</p>
//             <p id='time-date'>${mailTime}</p>
//         </li>`;
//         mails.innerHTML += mailsList;
//     }
// }
window.addEventListener('click', function(el) {
    if(el.target.className = 'socialBtn') {
        
    }
    else if(el.target.className = 'promoBtn') {
        mails.innerHTML = '';
        multiplyP(promotions);
    } 
    else if(el.target.className = 'primaryBtn') {
        mails.innerHTML = '';
        multiplyP(primary);
    }
})

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
