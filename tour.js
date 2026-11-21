// Guided tour: advances through the screens; pauses on interaction or when off-screen.
(function () {
  var tour = document.querySelector('.tour');
  if (!tour) return;
  var steps = tour.querySelectorAll('.tour-step');
  var imgs = tour.querySelectorAll('.tour-screen img');
  var path = tour.querySelector('.tour-path');
  var btn = tour.querySelector('.tour-play');
  var DURATION = 7000;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0, timer = null, playing = !reduce, visible = false;
  tour.style.setProperty('--tour-ms', DURATION + 'ms');

  function show(i) {
    current = (i + steps.length) % steps.length;
    steps.forEach(function (s, n) {
      var on = n === current;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-pressed', on ? 'true' : 'false');
      s.classList.remove('is-playing');
    });
    imgs.forEach(function (im, n) { im.classList.toggle('is-active', n === current); });
    path.textContent = steps[current].getAttribute('data-path');
    schedule();
  }

  function schedule() {
    clearTimeout(timer);
    var s = steps[current];
    s.classList.remove('is-playing');
    if (playing && visible) {
      void s.offsetWidth; // restart the progress bar animation
      s.classList.add('is-playing');
      timer = setTimeout(function () { show(current + 1); }, DURATION);
    }
  }

  function setPlaying(p) {
    playing = p;
    btn.textContent = p ? 'Pause' : 'Play';
    btn.setAttribute('aria-label', p ? 'Pause tour' : 'Play tour');
    schedule();
  }

  steps.forEach(function (s, n) {
    s.addEventListener('click', function () { setPlaying(false); show(n); });
  });
  btn.addEventListener('click', function () { setPlaying(!playing); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.35 }).observe(tour);
  } else {
    visible = true;
  }
  setPlaying(playing);
})();
