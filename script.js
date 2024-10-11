// Add event listener to LinkedIn link
document.querySelector('header a').addEventListener('click', function(event) {
  event.preventDefault();
  window.open('https://www.linkedin.com/in/soha-sultana/', '_blank');
});

// Add animation to specialized skills
document.querySelectorAll('.specialized-skills li').forEach(function(li) {
  li.addEventListener('mouseover', function() {
    li.style.transform = 'translateY(-5px)';
    li.style.transition = 'transform 0.3s ease';
  });
  li.addEventListener('mouseout', function() {
    li.style.transform = 'translateY(0)';
  });
});
