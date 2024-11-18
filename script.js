const toggleButton = () => {
    const navBarMenu = document.getElementById('nav-menus');
    const navBtn = document.getElementById('nav-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay'); // Overlay element

    const isActive = navBarMenu.classList.toggle('active'); // Toggle active class
    navBtn.classList.toggle('active', isActive);
    overlay.classList.add('active');
    closeBtn.style.display = isActive ? 'inline-block' : 'none';

    // Toggle body scroll based on navbar state
    document.body.classList.toggle('no-scroll', isActive);

    // Add a one-time event listener to close on outside click
    if (isActive) {
        document.addEventListener('click', closeOnClickOutside);
    } else {
        document.removeEventListener('click', closeOnClickOutside);
    }
};

const hideNavbar = () => {
    const navBarMenu = document.getElementById('nav-menus');
    const navBtn = document.getElementById('nav-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay'); // Overlay element

    navBarMenu.classList.remove('active');
    navBtn.classList.remove('active');
    overlay.classList.remove('active');
    closeBtn.style.display = 'none';

    // Enable scrolling when navbar is hidden
    document.body.classList.remove('no-scroll');

    // Remove event listener for outside clicks
    document.removeEventListener('click', closeOnClickOutside);
};

const closeOnClickOutside = (event) => {
    const navBarMenu = document.getElementById('nav-menus');
    const toggleBtn = document.querySelector('.toggle-btn');
    const closeBtn = document.getElementById('close-btn');

    if (
        !navBarMenu.contains(event.target) &&
        !toggleBtn.contains(event.target) &&
        !closeBtn.contains(event.target)
    ) {
        hideNavbar();
    }
};


 

  const navbar = document.querySelector('.navbar-g')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  }else {
    navbar.classList.remove('scrolled')
  }
})

const card = document.querySelector('.interactive-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position inside the card
  const y = e.clientY - rect.top;  // Y position inside the card

  const xPercent = Math.round((x / rect.width) * 100);
  const yPercent = Math.round((y / rect.height) * 100);

  card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #83ffd9, #050707, #181818)`;
});

card.addEventListener('mouseleave', () => {
  card.style.background = 'linear-gradient(#83ffd9, #181818 )';
});
const card2 = document.querySelector('.interactive-card2');

card2.addEventListener('mousemove', (e) => {
  const rect = card2.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position inside the card
  const y = e.clientY - rect.top;  // Y position inside the card

  const xPercent = Math.round((x / rect.width) * 100);
  const yPercent = Math.round((y / rect.height) * 100);

  card2.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #83ffd9, #050707, #181818)`;
});

card2.addEventListener('mouseleave', () => {
  card2.style.background = 'linear-gradient(#83ffd9, #181818)';
});
