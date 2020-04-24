// Checkbox
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
  // if this is checked, it will toggle to dark 
  if (this.checked) {
    transition();
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    transition();
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

let transition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

