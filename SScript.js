
const tooltip = document.getElementById('tooltipText');

// Left chamber → Categories
document.getElementById('region1').addEventListener('mouseenter', () => {
  tooltip.textContent = 'Good Vibes';//Browse Categories
});

// Right chamber → Game
document.getElementById('region2').addEventListener('mouseenter', () => {
  tooltip.textContent = 'Constellation Maker';//Play Game
});

// Reset tooltip when mouse leaves any region
document.querySelectorAll('.heart-region').forEach(el => {
  el.addEventListener('mouseleave', () => {
    tooltip.textContent = 'Hover over a realm';//Hover over a realm
  });
});



document.getElementById('region1').addEventListener('click', () => {
   location.href = 'good-vibes.html';
});


document.getElementById('region2').addEventListener('click', () => {
  location.href = 'constellation-maker.html';
});



document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});


// ====================================
// 4. FEEDBACK NOTEPAD (Toggle open/close)
// ====================================
const feedbackBtn = document.getElementById('feedback-btn');
const feedbackForm = document.getElementById('feedback-form');
const closeBtn = document.getElementById('close-feedback');

// Toggle form
feedbackBtn.addEventListener('click', () => {
  feedbackForm.classList.toggle('hidden');
});

// Close form
closeBtn.addEventListener('click', () => {
  feedbackForm.classList.add('hidden');
});

// ===== AUTO HIGHLIGHT ACTIVE NAV LINK =====
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  const navLinks = document.querySelectorAll(".nav a");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});