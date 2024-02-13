const userLogin = async (event) => {

    event.preventDefault();

    const userEmail = document.querySelector('#loginEmail').value.trim();
    const userPass = document.querySelector('#loginPass').value.trim();

    if (userEmail && userPass) {

        const loginResponse = await fetch('/api/users/login', {

            method: 'POST',
            body: JSON.stringify({ userEmail, userPass }),
            headers: { 'Content-Type': 'application/json' },

        });

        if (loginResponse.ok) {

            document.location.replace('/');

        } else {

            alert('Oh no! We have failed to log you in, please try again.');
            
        }
    }

};

document
    .querySelector('.loginForm')
    .addEventListener('submit', userLogin);