let contactForm = document.querySelector("#contact-form");

contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let contactName = document.querySelector('contact-name');
    let contactEmail = document.querySelector('contact-email');
    let contactMessage = document.querySelector('contact-message');

    if(contactName !== '' && contactEmail !== '' && contactMessage !== ''){
        let p = document.querySelector('#contact-me > p');
        p.textContent = "Thank you for your message! I will get back to you as soon as posssible.";
        p.style.color = 'brown';

    }

})

    
    

