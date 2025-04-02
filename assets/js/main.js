/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
 e.preventDefault()

  emailjs.sendForm('service_xhlvdx1', 'template_86v0c9m', '#contact-form', 'msXkSttQgvZdmu52D')

    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
        }, ()=> {
            contactMessage.textContent = 'Message not sent (service error) ❌'
            })
contactForm.addEventListener('submit', sendEmail)
        }
/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}   
window.addEventListener('scroll', scrollActive)            

/*=============== SCROLL REVEAL ANIMATION ===============*/
