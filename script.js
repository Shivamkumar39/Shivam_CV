 
      function Send(){
        var text = document.getElementById('text').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('phone').value;
        var mess = document.getElementById('message').value;
        var subject = document.getElementById('subject').value;

        var body = 'text: ' + text + "<br> email:"+ email + "<br> phone: " + number + "<br> message " + mess ;
        console.log(body);
      Email.send({
      SecureToken : '93649e3e-fac5-4a22-bdcc-d983aa6b134b',
    //  Host : "smtp.elasticemail.com",
    // Username : "shivamsingh9865321@gmail.com",
    // Password : "D7520B685325F924111007423BFF5DDE5409",
    To : 'singhshivam950835@gmail.com',
    From : "shivamsingh9865321@gmail.com",
    Subject : subject,
    Body : body
}).then(
  // message => alert('sucessefully sended!')
  message => {
    if(message == 'OK'){
      swal("Suceesfull Submit !", "Thanks for connect me", "success");
    }
    else{
      swal("somthing error!", "Thanks for connect me", "error");
    }
  }
);
      }

 
 //toggle icon navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  
  //scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        }
       
    });
    // sticky header
    let Headers = document.querySelector('header');

    Headers.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}

// scroll point

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.portfolio-container , .title, .aboutinfo', { origin: 'left'  });
ScrollReveal().reveal('.profession-box img, .aboutimg img, .input-box, .portfolio-box, .textarea-field, .skills-box, .skills-colum, .skills-content, .education-content,  .skills-colum', { origin: 'bottom' });


