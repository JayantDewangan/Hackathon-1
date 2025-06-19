// Theme Toggle
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

let isDark = false;

toggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  body.classList.toggle('dark-theme', isDark);
  body.classList.toggle('light-theme', !isDark);
  toggleBtn.innerHTML = isDark ? '☀️' : '🌙';
});

// Shrink Navbar on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Page Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});

// Fade-In on Scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

faders.forEach(el => observer.observe(el));

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});

// Loader with delay
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Wait 1.5 seconds before hiding loader
  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 4000); // 1500 milliseconds = 1.5 seconds
});

// "Get Started" Button Logic
document.getElementById("getStartedBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Optional: show loader before redirect
  const loader = document.getElementById("loader");
  loader?.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "contact.html";
  }, 1200); // simulate loading time before redirect
});


const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "contact.html";
    }, 1500); // 1.5 seconds
  });
}

// Hamburger menu functionality
const hamburger1 = document.querySelector('.hamburger');
const mobileNav1 = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  
  // Toggle hamburger animation
  if (hamburger.classList.contains('active')) {
    hamburger.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamburger.querySelectorAll('span')[1].style.opacity = '0';
    hamburger.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    hamburger.querySelectorAll('span')[0].style.transform = 'none';
    hamburger.querySelectorAll('span')[1].style.opacity = '1';
    hamburger.querySelectorAll('span')[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.querySelectorAll('span')[0].style.transform = 'none';
    hamburger.querySelectorAll('span')[1].style.opacity = '1';
    hamburger.querySelectorAll('span')[2].style.transform = 'none';
  });
});
// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body1 = document.body;

// Check for saved theme preference or use preferred color scheme
const currentTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.classList.add(currentTheme + '-theme');

// Update button text based on current theme
if (currentTheme === 'dark') {
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

// Theme toggle button click event
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
  
  // Update charts when theme changes
  updateChartThemes();
});

// Function to update chart themes
function updateChartThemes() {
  const isDarkTheme = body.classList.contains('dark-theme');
  const textColor = isDarkTheme ? '#fff' : '#666';
  const gridColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  
  // Update carbon chart
  carbonChart.options.scales = carbonType !== 'pie' ? {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Embodied Carbon (kgCO₂e/m²)",
        color: textColor
      },
      grid: {
        color: gridColor
      },
      ticks: {
        color: textColor
      }
    },
    x: {
      grid: {
        color: gridColor
      },
      ticks: {
        color: textColor
      }
    }
  } : {};
  
  carbonChart.options.plugins.legend.labels = {
    color: textColor
  };
  carbonChart.update();
  
  // Update user chart
  userChart.options.scales = {
    y: {
      beginAtZero: true,
      grid: {
        color: gridColor
      },
      ticks: {
        color: textColor
      }
    },
    x: {
      grid: {
        color: gridColor
      },
      ticks: {
        color: textColor
      }
    }
  };
  userChart.update();
}

// Initialize charts with correct theme
document.addEventListener('DOMContentLoaded', function() {
  updateChartThemes();
});

