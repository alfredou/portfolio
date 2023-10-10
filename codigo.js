//show menu and hidden
const navMenu = document.getElementById("nav-menu"), 
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close"); 

//show the dinamic home texts type.js
const typed = new Typed(".typed", {
    strings: [
        '<i class="codigo">Web Developer</i>',
        '<i class="codigo">FullStack Developer</i>',
        '<i class="codigo">Frontend Developer</i>'
    ],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackSpace: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
})
//menu show
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    })
}
//menu hidden 
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu"); 
    })
}
//remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//cards info
const cardData = [
    {
        title: "News_App 📰",
        description: "A News_App is a online platform that allows users see the news it is created in nextjs13 using graphql and typescript and graphcms as a cms for the data.",
        imageUrl: "img/assets/news_app.PNG",
        alt: "news_app",
        technologies: ["img/assets/nextjs.png", "img/assets/express-original.png", "img/assets/graphql.png", "img/assets/typescript.png", "img/assets/tailwind.png"],
        linkCode: "https://github.com/alfredou/news_app",
        linkLiveProject: "https://news-app-eta-gilt.vercel.app/"
    },
    {
      title: "Bookstore 📚",
      description: "A bookstore is an online platform that allows users buy books this website provides an interface for searching and buying books using stripe.",
      imageUrl: "img/assets/Bookstore.PNG",
      alt: "bookstore",
      technologies: ["img/assets/react.png", "img/assets/express-original.png", "img/assets/formik.png", "img/assets/stripe.png", "img/assets/mongodb.png"],
      linkCode: "https://github.com/alfredou/bookstore/tree/main",
      linkLiveProject: "https://bookstore-gamma-eosin.vercel.app/"
    },
    {
        title: "Portfolio 🗃️",
        description: "The is my personal portfolio to build it, I used html, css, javascript and a service to send emails called email.js",
        imageUrl: "img/assets/portfolio.PNG",
        alt: "portfolio",
        technologies: ["img/assets/html.png", "img/assets/css.png", "img/assets/javascript.png"],
        linkCode: "https://github.com/alfredou/portfolio",
        linkLiveProject: "https://alfredou.github.io/portfolio/"
    },  
    {
      title: "Quiz ❓",
      description: "The Quiz Project is a project that I did when I was learning javascript I used an API to integrate random Questions",
      imageUrl: "img/assets/Quiz.PNG",
      alt: "quiz",
      technologies: ["img/assets/html.png", "img/assets/css.png", "img/assets/javascript.png"],
      linkCode: "https://github.com/alfredou/Quiz.github.io",
      linkLiveProject: "https://alfredou.github.io/Quiz.github.io/"
    },
  ];

  // dinamic project cards code
  const cardContainer = document.getElementById("projects__container");
  const fragment = document.createDocumentFragment();
  
  cardData.forEach(data => {
    const technologiesContainer = document.createElement("div");
    technologiesContainer.classList.add("technologies__list")
    
    const card = document.createElement("div");
    card.className = "projects__card";
    
    const projectInfo = document.createElement("div");
    projectInfo.className = "project__info"

    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = data.imageUrl;
    image.className = "project__img"
    image.setAttribute("alt", data.alt)
    imageContainer.className = "project__containerimg"
    imageContainer.appendChild(image)
    
    const title = document.createElement("h2");
    title.textContent = data.title;
    
    const description = document.createElement("p");
    description.textContent = data.description;
    
    const technologiesList = data.technologies.map(item=>{
        const image = document.createElement("img");
        image.src = item
        image.className = "technology__img"
        image.setAttribute("alt","technology")
        return image
    })

    technologiesList.forEach(technologyImage => {
        technologiesContainer.appendChild(technologyImage)
    })
    const buttonsContainer = document.createElement("div")
    buttonsContainer.classList.add("project__buttons")

    const codeButton = document.createElement("a");
    codeButton.innerHTML = "code <i class='uil uil-github-alt'></i>"
    codeButton.setAttribute("target","_blank")
    codeButton.href = data.linkCode

    const demoButton = document.createElement("a");
    demoButton.innerHTML = "Live Demo <i class='fa-solid fa-arrow-up-right-from-square'></i>"
    demoButton.setAttribute("target","_blank")
    demoButton.href = data.linkLiveProject
    
    
    card.appendChild(imageContainer);
    projectInfo.appendChild(title);
    projectInfo.appendChild(description);
    projectInfo.appendChild(technologiesContainer);
    buttonsContainer.appendChild(codeButton)
    buttonsContainer.appendChild(demoButton)
    projectInfo.appendChild(buttonsContainer);
    card.appendChild(projectInfo)
    fragment.appendChild(card);
  });

  cardContainer.appendChild(fragment);


//this add a border in the top part of the header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//show scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560){
          scrollUp.classList.add('show-scroll'); 
    } else {
          scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


//send mail email.js
const btn = document.getElementById("button")

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   console.log("enviando mensaje")

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_whdhcti';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');

      const nameInput = document.getElementById("from_name")
      const nameEmailInput = document.getElementById("email_id")
      const nameProjectInput = document.getElementById("project")
      const nameMessageInput = document.getElementById("message")
      nameInput.value = ""
      nameEmailInput.value = ""
      nameProjectInput.value = ""
      nameMessageInput.value = ""
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

//Scroll to sections and put the active link 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){ 
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




