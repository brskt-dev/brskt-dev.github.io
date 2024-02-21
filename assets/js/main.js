class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header-socials wow fadeInLeft" data-wow-delay=".60s">
      <ul>
        <li><a href="https://www.linkedin.com/company/ativvustecnologia" target=”_blank”><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://www.instagram.com/ativvus/" target=”_blank”><i class="fa-brands fa-square-instagram"></i></a></li>
        <li><a href="https://www.facebook.com/ativvustecnologia" target=”_blank”><i class="fa-brands fa-square-facebook"></i></a></li>
      </ul>
    </div>
    <header class="header navbar-area wow fadeInDown" data-wow-delay=".30s">
        <div class="container-fluid header-padding">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="nav-inner">
                        <!-- Start Navbar -->
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/logos/ativvus_branco.svg" alt="Logo">
                            </a>
                            <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>
                            
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a id="home-header" href="index.html" class="page-scroll"
                                            aria-label="Toggle navigation">Início</a>
                                    </li>
                                    <li>
                                      <div class="navbar-divider"></div>
                                    </li>
                                    <li class="nav-item">
                                        <a id="product-header" href="product.html" class="page-scroll"
                                            aria-label="Toggle navigation">Soluções</a>
                                    </li>
                                    <li>
                                      <div class="navbar-divider"></div>
                                    </li>
                                    <li class="nav-item">
                                        <a id="about-header" href="about.html" class="page-scroll" 
                                            aria-label="Toggle navigation">Sobre</a>
                                    </li>
                                    <li>
                                      <div class="navbar-divider"></div>
                                    </li>
                                    <li class="nav-item">
                                        <a id="contact-header" href="contact.html" class="page-scroll"
                                            aria-label="Toggle navigation">Contato</a>
                                    </li>
                                    <li class="nav-item custom-item">
                                        <a href="https://webapp.ativvus.com.br/" class="page-scroll"
                                            aria-label="Toggle navigation" target=”_blank”><i class="fa-solid fa-up-right-from-square"></i>&nbsp Acesse o app</a>
                                    </li>
                                </ul>
                            </div> <!-- navbar collapse -->

                            <div class="button add-list-button">
                                <a href="https://webapp.ativvus.com.br/" target=”_blank” class="btn "><i class="fa-solid fa-up-right-from-square"></i>Acesse o WebApp</a>
                            </div>
                        </nav>
                        <!-- End Navbar -->
                    </div>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </header>`;
  }
}

customElements.define("main-header", MainHeader);

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <!-- Start Footer Top -->
    <div class="footer-wave"></div>
    <div class="footer-top">
        <div class="container">
            <div class="row">

                <div class="col-lg-5 col-md-6 col-12" id="logo-container">
                  <a class="footer-brand" href="index.html">
                    <img src="assets/img/logos/ativvus_branco.svg" alt="Logo">
                  </a>
                  <div class="slogan">
                    <h3>impulsionados por&nbsp</h3>
                    <h3 style="color: #28a8a5ff">dados</h3>
                    <h3>,&nbsppessoas e ações</h3>
                    <h3 style="color: #28a8a5ff">_</h3>
                  </div>
                  <div class="footer-socials">
                  <ul>
                    <li><a href="https://www.linkedin.com/company/ativvustecnologia" target=”_blank”><span class="social-icon"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/ativvus/" target=”_blank”><span class="social-icon"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/ativvustecnologia" target=”_blank”><span class="social-icon"><i class="fa-brands fa-square-facebook"></i></a></li>
                  </ul>
                  </div>
                </div>

                  <div class="col-lg-1 col-md-6 col-12" id="menu-container">
                    <div class="row">
                      <div class="footer-menu">
                        <a id="home-footer" href="index.html"><span>Início</span></a>
                        <a class="product-footer" id="product-footer" href="product.html"><span>Soluções</span></a>
                        <a id="about-footer" href="about.html"><span>Sobre</span></a>
                        <a id="contact-footer" href="contact.html"><span>Contato</span></a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12 col-12" id="news-container">
                    <div class="row">
                      <div class="footer-news">
                        <div class="news-call">
                          <h3>em breve nossa newsletter, aguarde...</h3>
                        </div>
                        <div class="news-input">
                          <input type="input" class="form-field" placeholder="Email" name="email" id='email' required disabled/>
                          <a id="send-button" href="" ><i class="fa-solid fa-paper-plane"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-12" id="copy-container">
                    <div class="row">
                      <div class="copy">
                        <h3 class="copy-slogan">Copyright 2023 Ativvus - Leia nossos  <a href="policy.html">Termos e Condições</a></h3>
                      </div>
                    </div>
                  </div>

            </div>
        </div>
    </div>
    <!--/ End Footer Top -->
</footer>`;
  }
}

customElements.define("main-footer", MainFooter);

var mailInput = document.getElementById("email");

/* Função de registro de um email na newsletter */
function send() {
  const sendButton = document.getElementById('send-button');
  sendButton.classList.add('send-animation');

  setTimeout(() => {
    sendButton.classList.remove('send-animation');
  }, 1000); 
}

/* Adiciona um Event Listener de cliques no botão de envio */
const sendButton = document.getElementById("send-button");
if (sendButton) {
  sendButton.addEventListener('click', send);
}

/* Adiciona um Event Listener para envios com a tecla enter */
mailInput.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-button").click();
  }
});


(function () {

 //===== Current Page
 function setActivePage() {
  var currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('.footer-menu a').forEach(function (link) {
    link.classList.remove('active-page');
  });

  document.getElementById('home-header').classList.remove('active-page');
  document.getElementById('product-header').classList.remove('active-page');
  document.getElementById('about-header').classList.remove('active-page');
  document.getElementById('contact-header').classList.remove('active-page');

  if (currentPage === 'index.html') {
    document.getElementById('home-footer').classList.add('active-page');
    document.getElementById('home-header').classList.add('active-page');
  } else if (currentPage === 'product.html') {
    
    var footerLinks = document.querySelectorAll('.product-footer');
    footerLinks.forEach(function(link){
      link.classList.add('active-page');
    });
    document.getElementById('product-header').classList.add('active-page');
  } else if (currentPage === 'about.html') {
    document.getElementById('about-footer').classList.add('active-page');
    document.getElementById('about-header').classList.add('active-page');
  } else if (currentPage === 'contact.html') {
    document.getElementById('contact-footer').classList.add('active-page');
    document.getElementById('contact-header').classList.add('active-page');
  } else {
    document.getElementById('home-footer').classList.add('active-page');
    document.getElementById('home-header').classList.add('active-page');
  }
}
window.onload = setActivePage();

  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    var logo = document.querySelector(".navbar-brand img");
    if (window.scrollY > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/logos/ativvus_branco.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/logos/ativvus_branco.svg";
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };


  // WOW active
  new WOW().init();

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });
})();
