const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle Links
        nav.classList.toggle('nav-active');

          //Animate Links
    navLinks.forEach((link, index) => {
        
        //  console.log(index / 5 + 0.2); for knowing how it works
      if(link.style.animation){
          link.style.animation = ''
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
  
}
navSlide();