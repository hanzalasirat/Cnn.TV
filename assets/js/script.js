function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const megaToggle = header.querySelector(".mega-toggle");
  const megaMenu = header.querySelector(".mega-menu");
  const searchToggle = header.querySelector(".search-toggle");
  const searchInput = megaMenu?.querySelector("input[name='q']");

  if (!megaMenu) return;

  function openMegaMenu() {
    megaMenu.classList.add("mega-menu-open");
    searchInput?.focus();
  }

  function closeMegaMenu() {
    megaMenu.classList.remove("mega-menu-open");
  }

  if (megaToggle) {
    megaToggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      megaMenu.classList.toggle("mega-menu-open");
    });
  }

  if (searchToggle) {
    searchToggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      openMegaMenu();
    });
  }

  document.addEventListener("click", e => {
    if (!megaMenu.contains(e.target) &&
        !megaToggle.contains(e.target) &&
        !searchToggle.contains(e.target)) {
      closeMegaMenu();
    }
  });

  header.querySelectorAll('.mega-menu form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('You searched for: ' + form.q.value);
    });
  });
}
