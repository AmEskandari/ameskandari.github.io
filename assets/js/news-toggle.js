// Configurable number of initially visible news items
const VISIBLE_NEWS_COUNT = 4;

function toggleNews() {
  const hiddenItems = document.querySelectorAll('.news-item.hidden');
  const toggleBtn = document.getElementById('news-toggle');
  
  if (hiddenItems.length > 0) {
    // Show all hidden items
    hiddenItems.forEach(item => {
      item.classList.remove('hidden');
    });
    toggleBtn.textContent = 'Show less';
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    // Hide items beyond the visible count
    const allItems = document.querySelectorAll('.news-item');
    for (let i = VISIBLE_NEWS_COUNT; i < allItems.length; i++) {
      allItems[i].classList.add('hidden');
    }
    toggleBtn.textContent = 'Show more';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
}

// Initialize the toggle button functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('news-toggle');
  const allNewsItems = document.querySelectorAll('.news-item');
  
  // Hide the toggle button if there are not enough items to warrant it
  if (allNewsItems.length <= VISIBLE_NEWS_COUNT) {
    if (toggleBtn) {
      toggleBtn.style.display = 'none';
    }
    return;
  }
  
  // Add event listeners
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleNews);
    
    toggleBtn.addEventListener('keydown', function(event) {
      // Handle keyboard accessibility (Enter and Space keys)
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleNews();
      }
    });
  }
});
