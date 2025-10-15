const logo = document.querySelector('.nav__logo');

const heroName = document.getElementById("hero__name");
const fullName = "Arnold\u00A0Santiago\u00A0Gil\u00A0Maldonado";
const heroDegree = document.getElementById("hero__degree");
const heroFrase = document.getElementById("hero__frase");
const heroText = document.getElementById("hero__text");
const heroButton = document.querySelectorAll('.hero__button');
const heroImagen = document.querySelector(".hero__imagen");
const heroContacts = document.querySelector(".hero__contacts");
const heroArrow = document.getElementById("hero__arrow");

const buttonDemoVideo = document.querySelector('.house__button');
const video = document.getElementById("video");


let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video');
}

onYouTubeIframeAPIReady();

logo.addEventListener('animationend', (e) => {
  if (e.animationName === 'afuera') {
    logo.style.animation = 'vida 2s ease-in-out 0s 1 forwards';
  }
});

logo.addEventListener('mouseenter', () => {
  logo.style.animation = 'scan 2s ease-in 0s infinite';
});

logo.addEventListener('mouseleave', () => {
  logo.style.animation = 'vida 2s ease-in-out 0s 1 forwards';
});

window.addEventListener('DOMContentLoaded', () => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index === fullName.length) {
      clearInterval(intervalId);
      heroDegree.style.animation = "fade_in_degree 1.2s ease-in-out normal forwards";
      heroImagen.style.animation = "fade_in 1.2s ease-in-out normal forwards";
    } else {
      heroName.innerHTML += fullName[index];
      index++;
    }
  }, 120);
});

heroImagen.addEventListener('animationend', (e) => {
  if (e.animationName === 'fade_in') {
    heroContacts.style.animation = "fade_in_contact 1.2s ease-in-out normal forwards";
  }
});

heroDegree.addEventListener('animationend', (e) => {
  if (e.animationName === 'fade_in_degree') {
    heroFrase.style.animation = "fade_in_frase 1s ease-in-out forwards";
  }
});

heroFrase.addEventListener('animationend', (e) => {
  if (e.animationName === 'fade_in_frase') {
    heroText.style.animation = "fade_in 1s ease-in-out forwards";
  }
});

heroText.addEventListener('animationend', (e) => {
  if (e.animationName === 'fade_in') {
    heroButton.forEach(button => {
      button.style.animation = "fade_in_button 1s ease-in-out forwards";
    });
  }
});

heroButton.forEach((e) => {
  e.addEventListener('animationend', (e) => {
    if (e.animationName === 'fade_in_button') {
      heroArrow.style.visibility = "visible";
      heroArrow.style.animation = "fade_in 1s ease-in-out forwards";
      heroArrow.addEventListener('animationend', (e) => {
        if (e.animationName === "fade_in") {
          heroArrow.style.animation = "arrow 2s ease-in-out infinite forwards";
        }
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const sectionAboutMe = document.querySelector('.about__me__container');
  const sectionProject = document.getElementById('project__general__container');
  const positionAboutMe = sectionAboutMe.getBoundingClientRect().top;
  const positionProject = sectionProject.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (positionAboutMe < screenHeight * 0.5) {
    sectionAboutMe.style.animation = "show 2s ease-in-out 1 forwards";
  }

  if (positionProject < screenHeight * 0.5) {
    sectionProject.style.animation = "show__p 2s ease-in-out 1 forwards";
  }
});

buttonDemoVideo.addEventListener('click', () => {
  const domoticHouseContainer = document.querySelector(".domotic__house__video__container");
  const exitVideo = document.querySelector(".exit__domotic__video");
  player.playVideo();
  
  domoticHouseContainer.style.display = "block";
  exitVideo.addEventListener('click', () => {
    closeVideo();
  })
  domoticHouseContainer.addEventListener('click', () => {
    closeVideo();
  })

  function closeVideo() {
    domoticHouseContainer.style.display = "none";
    player.pauseVideo();
  }
});