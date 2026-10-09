(function () {
  var box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-open'));
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var current = 0;
  function show(i) {
    current = (i + items.length) % items.length;
    var b = items[current];
    img.src = b.getAttribute('data-full');
    img.alt = b.querySelector('img').alt;
    cap.textContent = b.getAttribute('data-caption') || '';
  }
  items.forEach(function (b, i) {
    b.addEventListener('click', function () { show(i); box.showModal(); });
  });
  box.querySelector('.lb-close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
