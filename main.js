// Compton Leak Repair Pros - nav interactions (vanilla, globally scoped)
function clrpToggleMenu() {
  var menu = document.getElementById('nav-menu');
  var btn = document.getElementById('hamburger');
  if (!menu || !btn) { return; }
  var open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function clrpToggleDropdown(btn) {
  var li = btn.parentElement;
  var wasOpen = li.classList.contains('dd-open');
  var all = document.querySelectorAll('.nav-menu li.dd-open');
  var i;
  for (i = 0; i < all.length; i++) { all[i].classList.remove('dd-open'); }
  var toggles = document.querySelectorAll('.dropdown-toggle');
  for (i = 0; i < toggles.length; i++) { toggles[i].setAttribute('aria-expanded', 'false'); }
  if (!wasOpen) {
    li.classList.add('dd-open');
    btn.setAttribute('aria-expanded', 'true');
  }
}
document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
    var all = document.querySelectorAll('.nav-menu li.dd-open');
    for (var i = 0; i < all.length; i++) { all[i].classList.remove('dd-open'); }
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var all = document.querySelectorAll('.nav-menu li.dd-open');
    for (var i = 0; i < all.length; i++) { all[i].classList.remove('dd-open'); }
  }
});
