function showHome() {
    showSection('home');
  }
  
  function showNews() {
    showSection('news');
  }
  
  function showContact() {
    showSection('contact');
  }
  
  function showAbout() {
    showSection('about');
  }
  
  function showLogin() {
    showSection('login');
  }
  
  function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  