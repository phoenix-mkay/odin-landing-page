const mainContainer =document.createElement('main')
mainContainer.setAttribute('id','main')
const featuresContainer = document.createElement('div')
featuresContainer.classList.add('features-container')
const testimonialsContainer =  document.createElement('div')
testimonialsContainer.classList.add('testimonials-container')
const ctaContainer = document.createElement('div')
ctaContainer.classList.add('cta')
const footerContainer = document.createElement('footer')
footerContainer.setAttribute('id','footer')
dynamicContent()

//  Toggle navbar
const navbar = document.getElementById('navbar')
const toggle = document.querySelector('.togglemenu')

toggle.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})


function dynamicContent(){
    const divContainer = document.createElement('div')
    divContainer.classList.add('container')
    divContainer.innerHTML = `
    <!-- Header -->
    <header id="header">
        <div class="flex-logo-toggle">
            <div class="logo">
                <img src="./images/logo.png" alt="">
            </div>
            <div class="togglemenu">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
        </div>

        <!-- Navbar -->
        <nav id="navbar">
            <ul>
                <li><a href="#welcome">Welcome</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="welcome">
        <article class="welcome-flex-left">
            <h1>Our App Is Ready For You! Take A Look & Enjoy. </h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button class="btn"> <a href="#">Learn More</a></button>
        </article>
        <article class="welcome-flex-right">
            <img src="./images/poster.jpg" alt="">
        </article>
    </section>
    `
    document.body.appendChild(divContainer)
    mainContent()
}

function mainContent(){
   
    mainContainer.innerHTML=`
<h2 id="features">Work</h2>
    ${featuresContent()}
    ${testimonialsContent()}
`
    mainContainer.appendChild(featuresContainer)
    mainContainer.appendChild(testimonialsContainer)
    ctaContainer.innerHTML = `
    <div class="cta-center">
        <div class="cta-info">
            <h3>Call to action! It's time!</h3>
            <p>Sign up for that product by clicking that button right over there!</p>
        </div>
        <button class="cta-btn btn">
            <a href="#">Sign up</a>  
        </button>
    </div>`
    mainContainer.appendChild(ctaContainer)
    document.body.appendChild(mainContainer)
    footerContainer.innerHTML = footerContent()
    document.body.appendChild(footerContainer)
}



function featuresContent(){
  //  features
  const features = [
    {
        img:'./images/icon1.png',
        title:'Good Design',
        info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley."
    },
    {
        img:'./images/icon2.png',
        title:'Well Protected',
        info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley."
    },
    {
        img:'./images/icon3.png',
        title:'High Class',
        info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley."
    },
    {
        img:'./images/icon4.png',
        title:'Responsive',
        info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley."
    },
]
   
    features.forEach(feature => {
        let article = document.createElement('article')
        article.classList.add('feature')
        article.innerHTML = `
        <div class="feature-icon">
        <img src="${feature.img}" alt="feature icon">
    </div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-info">
           ${feature.info}
        </p>
        `
        featuresContainer.appendChild(article)
    })
    return '';
}
function testimonialsContent(){
    testimonialsContainer.innerHTML = `
    <div class="client-photo">
    <img src="./images/person1.jpg" alt="">
</div>
<h4 class="client-name">Sarah Shmidt</h4>
<p class="testimonial">
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
</p>
    `
        
    return '';
}

function footerContent(){
    return ` <p>Copyright &copy; The Odin Project <span class="year">2021</span></p>`
}