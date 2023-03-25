

  const form = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  
  form.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();
    
    // Validate password
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 8 || !/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/\d/.test(passwordValue) || !/[^A-Za-z0-9]/.test(passwordValue)) {
      passwordInput.setCustomValidity('Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      passwordInput.setCustomValidity('');
      form.submit();
    }
  });
