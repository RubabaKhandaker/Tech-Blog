const userLogout = async () => {

    const logoutResponse = await fetch('/api/users/logout', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

    });
  
    if (logoutResponse.ok) {
  
      document.location.replace('/login');

    } else {

      alert('Uh oh! We have failed to log you out, please try again.');

    }

  };
  
  document.querySelector('#userLogout').addEventListener('click', userLogout);