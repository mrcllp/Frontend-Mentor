const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Emal validation check
    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if(!emailValue) {
        email.classList.add('error');
        small.innerText = 'Please provide a valid email address';
        small.style.display = 'inline-block';
    } else if(!validEmail(emailValue)) {
        email.classList.add('error');
        small.innerText = 'Email invalid';
        small.style.display = 'inline-block'
    } else {
        email.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none'
    } 
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}