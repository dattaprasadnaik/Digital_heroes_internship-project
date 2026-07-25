// Client-side validation for the contact form.
// Server-side validation must also be implemented before this form
// is wired to a real backend (see README).

document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close the mobile menu after choosing a link
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  const rules = {
    name: (v) => v.trim().length > 0 || 'Please enter your name.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
    budget: (v) => v.trim().length > 0 || 'Please select a budget range.',
    message: (v) => v.trim().length >= 10 || 'Please add a few more details (10+ characters).',
  };

  function validateField(field) {
    const input = document.getElementById(field);
    const errorEl = document.getElementById(`${field}-error`);
    const result = rules[field](input.value);

    if (result === true) {
      input.closest('.field').classList.remove('invalid');
      input.setAttribute('aria-invalid', 'false');
      errorEl.textContent = '';
      return true;
    } else {
      input.closest('.field').classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
      errorEl.textContent = result;
      return false;
    }
  }

  Object.keys(rules).forEach((field) => {
    const input = document.getElementById(field);
    input.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = Object.keys(rules).map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
      status.textContent = 'Please fix the errors above.';
      status.style.color = '#b83654';
      return;
    }

    // No backend is wired up for this training task.
    // A real deployment would POST to an endpoint here.
    status.textContent = 'Thanks — this is a demo form, so nothing was actually sent.';
    status.style.color = '#131a22';
    form.reset();
  });
});