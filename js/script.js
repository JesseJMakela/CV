// Interactive helpers for the CV site with Tailwind dark mode
document.addEventListener('DOMContentLoaded', function(){
  // Set copyright year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle with Tailwind's dark mode class
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  
  // Apply stored theme or detect system preference
  if(stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }

  function updateThemeUI(){
    const isDark = document.documentElement.classList.contains('dark');
    if(themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
  updateThemeUI();

  if(themeToggle){
    themeToggle.addEventListener('click', function(){
      const isDark = document.documentElement.classList.contains('dark');
      
      if(isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      
      updateThemeUI();
    });
  }

  // Print / Download PDF
  const printBtn = document.getElementById('printBtn');
  if(printBtn){
    printBtn.addEventListener('click', function(){
      window.print();
    });
  }
});
