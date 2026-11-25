const sections = [
    document.getElementById('section-1'),
    document.getElementById('section-2'),
    document.getElementById('section-3'),
    document.getElementById('section-4'),
    document.getElementById('section-5'),
    document.getElementById('section-6')
];
const btn = document.getElementById('navBtn');
let current = 0;

btn.addEventListener('click', () => {
    current = (current + 1) % sections.length;
    sections[current].scrollIntoView({ behavior: 'smooth' });
    btn.classList.toggle('up', current === sections.length - 1);
});


const scene = document.getElementById('scene');

scene.addEventListener('click', e => {
  if (e.target.closest('a')) return;
  scene.classList.toggle('open');
  const hint = document.querySelector('.hint');
  if (hint) hint.style.opacity = 0;

  if (scene.classList.contains('open')) {
    const r = scene.getBoundingClientRect();
    for (let i = 0; i < 14; i++) {
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = ['^_^', '❤️', '≧∇≦', '⭐'][i % 4];
      h.style.left = (r.left + r.width / 2 + (Math.random() - .5) * 160) + 'px';
      h.style.top = (r.top + r.height / 2) + 'px';
      h.style.animationDelay = (Math.random() * .8) + 's';
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 3600);
    }
  }
});




const photos = document.querySelectorAll(".photo");

let currentIndex = 0;

photos[currentIndex].classList.add("active");

document.getElementById("gallery").addEventListener("click", () => {

    photos[currentIndex].classList.remove("active");

    currentIndex++;

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    photos[currentIndex].classList.add("active");

});


// Счётчик времени с 13 июля 2024, 23:12 (польское время, CEST = UTC+2)
(function () {
    const START = new Date('2024-07-13T23:12:00+02:00');

    const elDays = document.getElementById('t-days');
    const elHours = document.getElementById('t-hours');
    const elMinutes = document.getElementById('t-minutes');
    const elSeconds = document.getElementById('t-seconds');

    if (!elDays || !elHours || !elMinutes || !elSeconds) return;

    const pad = (n) => String(n).padStart(2, '0');

    function update() {
        let diff = Math.max(0, Math.floor((Date.now() - START.getTime()) / 1000));

        const days = Math.floor(diff / 86400);
        diff %= 86400;
        const hours = Math.floor(diff / 3600);
        diff %= 3600;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;

        elDays.textContent = days;
        elHours.textContent = pad(hours);
        elMinutes.textContent = pad(minutes);
        elSeconds.textContent = pad(seconds);
    }

    update();
    setInterval(update, 1000);
})();




