// ==========================================================================
// Mobile navigation toggle
// Built on a real <button>, so Enter/Space and Tab already work with zero
// extra code. We just keep aria-expanded in sync with the visual state
// (WCAG 4.1.2 Name, Role, Value) and let Escape close the menu.
// ==========================================================================
(function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('primaryNav');

  function isMobile() {
    return window.matchMedia('(max-width: 700px)').matches;
  }

  function openMenu() {
    nav.setAttribute('data-open', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close main menu');
  }

  function closeMenu() {
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open main menu');
  }

  // Start collapsed on small screens only, so the nav still shows on desktop
  // even before JS finishes running.
  if (isMobile()) {
    closeMenu();
  }

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  // Close the mobile menu after a nav link is chosen
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (isMobile()) closeMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (!isMobile()) {
      nav.setAttribute('data-open', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ==========================================================================
// Accessible contact form validation
// - Errors are written into the same element referenced by aria-describedby,
//   so screen readers pick them up as soon as they render (role="alert").
// - aria-invalid is toggled per field so assistive tech announces the state.
// - Focus moves to the first invalid field, mirroring what sighted users see.
// - The submit result is announced through the aria-live status region
//   without stealing focus from the user.
// ==========================================================================
(function () {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('statusMsg');

  var fields = {
    name: {
      input: document.getElementById('nameField'),
      error: document.getElementById('nameError'),
      validate: function (v) {
        return v.trim().length > 0 ? '' : 'Please enter your full name.';
      }
    },
    email: {
      input: document.getElementById('emailField'),
      error: document.getElementById('emailError'),
      validate: function (v) {
        if (v.trim().length === 0) return 'Please enter your email address.';
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(v) ? '' : 'Please enter a valid email address.';
      }
    },
    message: {
      input: document.getElementById('msgField'),
      error: document.getElementById('msgError'),
      validate: function (v) {
        return v.trim().length > 0 ? '' : 'Please enter a message.';
      }
    }
  };

  function setFieldState(field, message) {
    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function announce(message, type) {
    status.textContent = message;
    status.className = 'status-msg is-visible ' + type;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstInvalid = null;

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      var message = field.validate(field.input.value);
      setFieldState(field, message);
      if (message && !firstInvalid) {
        firstInvalid = field.input;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      announce('Please fix the highlighted fields before sending.', 'error');
      return;
    }

    // Simulated send - in a real project this would be a fetch() call
    announce('Your message has been sent. We will reply within 1-2 business days.', 'success');
    form.reset();
    Object.keys(fields).forEach(function (key) {
      setFieldState(fields[key], '');
    });
  });

  // Clear a field's error as soon as the user starts correcting it
  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    field.input.addEventListener('input', function () {
      if (field.error.textContent) {
        setFieldState(field, field.validate(field.input.value));
      }
    });
  });
})();
