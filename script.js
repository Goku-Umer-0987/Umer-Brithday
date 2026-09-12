// ===== Embers (fire particles) =====
const embersContainer = document.getElementById('embers');

function createEmber() {
  const e = document.createElement('div');
  e.className = 'ember';
  e.style.left = Math.random() * 100 + 'vw';
  e.style.animationDuration = (Math.random() * 6 + 5) + 's';
  e.style.animationDelay = Math.random() * 5 + 's';
  e.style.width = e.style.height = (Math.random() * 3 + 2) + 'px';
  embersContainer.appendChild(e);
  setTimeout(() => e.remove(), 12000);
}

for (let i = 0; i < 40; i++) createEmber();
setInterval(createEmber, 400);

// ===== URL Parameters =====
const params = new URLSearchParams(window.location.search);
const name = params.get('name') || 'Umer';
const msg  = params.get('msg')  || 'May your day be filled with laughter, love, and everything your heart desires. You deserve all the happiness in the world — today and always. 🌟';
const from = params.get('from') || 'Your Bro Umer 🤝';

document.getElementById('greeting').textContent = `Happy Birthday, ${name}!`;
document.getElementById('message').textContent  = msg;
document.getElementById('from').textContent     = `— With love, ${from}`;

// ===== Show Wish Screen =====
function showWish() {
  const q = document.getElementById('questionScreen');
  const w = document.getElementById('wishScreen');
  q.style.transition = 'opacity 0.5s, transform 0.5s';
  q.style.opacity = '0';
  q.style.transform = 'scale(0.9)';
  setTimeout(() => {
    q.style.display = 'none';
    w.style.display = 'block';
    w.style.animation = 'cardIn 0.8s ease';
    launchConfetti();
    setInterval(launchConfetti, 3500);
  }, 500);
}

// ===== Wrong Friend =====
function wrongFriend(e) {
  const btn = e.target;
  btn.classList.add('shake');
  btn.textContent = 'Are you sure? 🥺';
  setTimeout(() => btn.classList.remove('shake'), 500);
  setTimeout(() => { btn.textContent = 'Try again? 😅'; }, 1500);
}

// ===== Confetti =====
function launchConfetti() {
  const colors = ['#ff2b2b','#8b0000','#ffcc00','#ffffff','#ff6600','#000000'];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (Math.random() * 2 + 3) + 's';
    c.style.animationDelay = Math.random() * 1.5 + 's';
    c.style.width = c.style.height = (Math.random() * 8 + 6) + 'px';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.boxShadow = '0 0 8px rgba(255,50,50,0.6)';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
}