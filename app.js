// 

// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeAString = myArray.join(' ');
// console.log(madeAString);

// function displayMessage(msgText, msgType) {
//     const html = document.querySelector('html');

//     const panel = document.createElement('div');
//     panel.setAttribute('class', 'msgBox');
//     html.appendChild(panel);
    
//     const msg = document.createElement('p');
//     msg.textContent = msgText;
//     panel.appendChild(msg);
    
//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = 'x';
//     panel.appendChild(closeBtn);
    
//     closeBtn.onclick = function() {
//       panel.parentNode.removeChild(panel);
//     }
// }

// const btn = document.querySelector('.btn');
// btn.onclick = function() {
//     displayMessage('woo, this is a different message!!!')
// } 

// let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// let para = document.createElement('p');
// const btn = document.querySelector('.btn');
// const html = document.querySelector('html')

// btn.addEventListener('click', randomName)

// function randomName() {
//     const random = Math.floor(Math.random() * names.length) ;
//     para.textContent = names[random];
//     html.appendChild(para)

// }

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onmouseover  = bgChange;
