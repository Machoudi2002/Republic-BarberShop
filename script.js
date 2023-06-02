
//////////////////////////////// Header //////////////////////////////////////////////////////////////////

const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

///////////////////////////////////////////////Barbers //////////////////////////////////////////////////////////////////

const barbersImg = document.querySelectorAll(".barbers-images img");

const barberNames = ["LEON NICKWELL", "JAMES ALAN", "NIKOLAS FERNANDES", "LEAM MENDI"];

let selectedImage = null;

const changeInfo = (event) => {
  const clickedImage = event.target;
  const index = Array.from(barbersImg).indexOf(clickedImage);
  console.log(index);

  if (selectedImage) {
    selectedImage.style.border = "none";
  }

  if (selectedImage !== clickedImage) {
    clickedImage.style.border = "solid 4px #FFDE59";
    selectedImage = clickedImage;

    const insta = document.querySelector("#insta")
    const barberName = document.querySelector("#barbername");
    barberName.textContent = barberNames[index];
    let instUserName = barberNames[index].replace(/\s/g, "").toLocaleLowerCase();
    console.log(instUserName)
    insta.textContent = "@" + instUserName;
    
  } else {
    selectedImage = null;
  }
};

for (let i = 0; i < barbersImg.length; i++) {
  barbersImg[i].addEventListener("click", changeInfo);
}


//////////////////////////////// header SWIPER ////////////////////////////////////////////////////


let swiper1 = new Swiper(".headerSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
  },
});



////////////////////////////////second swiper/////////////////////////////////////
let swiper;

function initSwiper() {
  swiper2 = new Swiper(".secondSwiper", {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function getSlidesPerView() {
  if (window.innerWidth < 600) {
    return 1;
  } else if (window.innerWidth < 800) {
    return 2;
  } else {
    return 3;
  }
}

function updateSwiperConfig() {
  swiper2.params.slidesPerView = getSlidesPerView();
  swiper2.update();
}

// Initialize Swiper
initSwiper();

// Listen for window resize event
window.addEventListener("resize", () => {
  updateSwiperConfig();
});


///////////////////////////////////////////Send Email ////////////////////////////////////////////////////////


const info = document.querySelectorAll("input")

let form = document.querySelector('form');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


const sendMail = () => {
  let templateParams = {
    fullname: info[0].value,
    email: info[1].value,
    date: info[2].value,
    time: info[3].value,
    numberofppl: info[4].value
  };
  
  emailjs.send('service_5lrmewg','template_jw0ikdv', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     info[5].value = "Email Recieved"
     setTimeout(() => {
      info[5].value = "Book Now"

    }, "4000");
  }, function(err) {
     console.log('FAILED...', err);
  });

}




