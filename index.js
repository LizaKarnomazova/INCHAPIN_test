Scrollbar.init(document.querySelector('#scroll-container'), {
    damping: 0.07
  });

function makeTextUppercase(node = document.body) {
  for (let child of node.childNodes) {
    if (
      child.nodeType === Node.ELEMENT_NODE &&
      child.classList.contains('no-uppercase')
    ) {
      continue;
    }

    if (child.nodeType === Node.TEXT_NODE) {
      child.textContent = child.textContent.toUpperCase();
    } else {
      makeTextUppercase(child);
    }
  }
}
  
  makeTextUppercase();

  const playBtn = document.getElementById('videoPlayBtn');
  const video = document.getElementById('introVideo');
  
  playBtn.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
  
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(phoneInput);
  });

  const openBtns = document.querySelectorAll('.header__open-form-button');
  const closeBtn = document.getElementById('closeForm');
  const formOverlay = document.getElementById('formOverlay');
  const scrollContainer = document.getElementById('scroll-container');
  
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formOverlay.classList.add('active');
      scrollContainer.classList.add('scroll-container--no-scroll');
    });
  });
  
  closeBtn.addEventListener('click', () => {
    formOverlay.classList.remove('active');
    scrollContainer.classList.remove('scroll-container--no-scroll');
  });

  const form = document.querySelector('.callback-form');
  const submitButton = document.querySelector('.callback-form__submit');

  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const email = form.querySelector('[name="email"]').value;

    console.log({
      name: name,
      phone: phone,
      email: email
    });

    form.reset();
  });

  