// Tambah bintang
const starCount = 40;
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(star);
}

// Musik kontrol
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const playIcon = document.getElementById("playIcon");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    playIcon.innerHTML = '<polygon points="5,3 19,12 5,21 5,3"/>';
  } else {
    music.play();
    playIcon.innerHTML = '<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
  }
  isPlaying = !isPlaying;
});

// Ambil nama tamu dari URL dan tampilkan
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get("nama");
if (namaTamu) {
  const target = document.getElementById("tamuNama");
  if (target) target.textContent = namaTamu;
}


