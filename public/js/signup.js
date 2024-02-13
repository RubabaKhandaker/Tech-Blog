const userSignUp = async (event) => {

    event.preventDefault();

    const username = document.querySelector('#signUpUsername').value.trim();
    const userEmail = document.querySelector('#signUpEmail').value.trim();
    const userPass = document.querySelector('#signUpPass').value.trim();
    console.log(username, userEmail, userPass);

    if (username && userEmail && userPass) {

        const signUpResponse = await fetch('/api/users', {

            method: 'POST',
            body: JSON.stringify({ username, userEmail, userPass }),
            headers: { 'Content-Type': 'application/json' },

        });

        if (signUpResponse.ok) {

            document.location.replace('/dashboard');

        } else {

            alert('Oh no! We failed to create a new profile, please try again.');
            
        }

    }

};

document
    .querySelector('.signUpForm')
    .addEventListener('submit', userSignUp);