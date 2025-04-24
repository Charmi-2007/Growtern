// Handle Apply Now button functionality
document.addEventListener('DOMContentLoaded', function () {
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        alert('Thank you for your interest in the HR Internship! We will contact you soon.');
      });
    });
  });
  