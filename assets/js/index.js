// ----- START HERO AREA -----

/* Array de textos para a função de 'digitação' */
consoleText(
  [
    "INTELIGÊNCIA",
    "EFICIÊNCIA",
    "TRANSPARÊNCIA",
    "SUSTENTÁVEL"
  ],
  "text",
  ["", ""]
);

/* Implementação da função de 'digitação' */
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#454545"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 0;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 80);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
// ----- END HERO AREA -----




// ----- START INFO AREA -----

var animationRunning;

/* Animações */
function fadeIn(element, maxOpacity, displayType = '', animSpeed) {

  let opacity = 0;
  element.style.visibility = 'visible';

  if (displayType != ''){
    element.style.display = displayType;
  }
  
  let fadeIn = setInterval(() => {
    if (opacity >= maxOpacity) {
      clearInterval(fadeIn);
    }

    element.style.opacity = opacity;
    opacity += 0.01;
  }, animSpeed);
}

function darkAnimation() {
  setTimeout(() => {

    const heroLight = document.querySelector('.hero-light-point');
    const solutionLight01 = document.getElementById('light-01');
    const solutionLight02 = document.getElementById('light-02');
    const orbit = document.querySelector('.orbit-hide');
    const categorys = document.querySelector('.solution-category');
    const darkBg = document.querySelector('.active-dark-bg');
    
    
    heroLight.style.animation = 'none';
    heroLight.style.opacity = 0;

    solutionLight01.style.animation = 'none';
    solutionLight01.style.opacity = 0;

    solutionLight02.style.animation = 'none';
    solutionLight02.style.opacity = 0;

    orbit.style.filter = 'blur(5px)';

    categorys.style.filter = 'blur(5px)';
    categorys.style.opacity = 0.4;

    darkBg.style.visibility = 'visible';
    darkBg.style.opacity = 1;
    
  }, 1000);
}

function lightAnimation() {
  const animTitle01 = document.getElementById('title-01');
  animTitle01.style.opacity = 0;

  const animTitle02 = document.getElementById('title-02');
  animTitle02.style.opacity = 0;

  const darkDiv = document.querySelector(".after-dark");
  darkDiv.style.display = 'none';
  darkDiv.style.opacity = 0;

  const darkBg = document.querySelector('.active-dark-bg');
  darkBg.style.visibility = 'hidden';
  darkBg.style.opacity = 0;

  const checkButton = document.getElementById("check");
  checkButton.disabled = true;

  setTimeout(() => {
    animTitle01.textContent = 'Escolher a correta é mais fácil com';
    animTitle02.textContent = '\u00A0{clareza}';
    animTitle01.style.opacity = 1;
    animTitle02.style.opacity = 1;

    const animBtn = document.querySelector(".anim-button");
    animBtn.style.opacity = 0;
    animBtn.style.visibility = 'hidden';

    const lightSection = document.querySelector(".light-section");
    lightSection.style.opacity = 1;
    lightSection.style.display = 'block';

    const solutionLight03 = document.getElementById("light-03");
    solutionLight03.style.opacity = 0.35;

    const ligthCards = document.querySelector(".light-info");
    ligthCards.style.opacity = 1;

  }, 500);

  setTimeout(() => {
    animationRunning = false;
  }, 1000);
}


/* Eventos */
const solutionTitle = document.querySelector('.solution-title');

solutionTitle.addEventListener('animationend', () => {
  animationRunning = true;
  const orbitFade = document.querySelector('.orbit-hide');
  orbitFade.style.opacity = 0.4;
  orbitFade.style.visibility = 'visible';
});

const lastCategoryAnim = document.querySelector('.last-category-anim');

lastCategoryAnim.addEventListener('animationend', () => {
  setTimeout(() => {
    const animTitle01 = document.getElementById('title-01');
    animTitle01.style.opacity = 1;
    animTitle01.style.visibility = 'visible';

    const animTitle02 = document.getElementById('title-02');
    animTitle02.style.opacity = 1;
    animTitle02.style.visibility = 'visible';

    setTimeout(() => {
      const animBtn = document.querySelector(".anim-button");
      animBtn.style.opacity = 1;
      animBtn.style.visibility = 'visible';
    }, 3000);

    darkAnimation();
  }, 1000);
});

const checkButton = document.getElementById("check");

checkButton.addEventListener('change', function() {
  if (checkButton.checked) {
    lightAnimation();
  }
});



function resetCustomAnimation() {
    const orbitFade = document.querySelector('.orbit-hide');
    const animTitle01 = document.getElementById('title-01');
    const animTitle02 = document.getElementById('title-02');
    const heroLight = document.querySelector('.hero-light-point');
    const solutionLight01 = document.getElementById('light-01');
    const solutionLight02 = document.getElementById('light-02');
    const orbit = document.querySelector('.orbit-hide');
    const categorys = document.querySelector('.solution-category');
    const darkBg = document.querySelector('.active-dark-bg');

    const checkButton = document.getElementById("check");


    orbitFade.style.opacity = 0;
    orbitFade.style.visibility = 'hidden';

    animTitle01.style.opacity = 0;
    animTitle01.style.visibility = 'hidden';
    animTitle01.textContent = 'Escolher a correta é mais difícil no';
    
    animTitle02.style.opacity = 0;
    animTitle02.style.visibility = 'hidden';
    animTitle02.textContent = '\u00A0{escuro}';

    heroLight.style.opacity = 0.35;

    solutionLight01.style.opacity = 0.35;

    solutionLight02.style.opacity = 0.35;

    orbit.style.filter = 'none';

    categorys.style.filter = 'none';
    categorys.style.opacity = 1;

    darkBg.style.visibility = 'hidden';
    darkBg.style.opacity = 0;

    checkButton.checked = false;
    checkButton.disabled = false;

    const lightSection = document.querySelector(".light-section");
    lightSection.style.opacity = 0;
    lightSection.style.display = 'none';

    const solutionLight03 = document.getElementById("light-03");
    solutionLight03.style.opacity = 0;

    const ligthCards = document.querySelector(".light-info");
    ligthCards.style.opacity = 0;

    const darkDiv = document.querySelector(".after-dark");
    darkDiv.style.display = 'block';
    darkDiv.style.opacity = 1;
}

WOW.prototype.addBox = function(element) {
  this.boxes.push(element);
};
wow = new WOW();
wow.init();

var checkWOWJsReset = function() {
  var resetWOWJsAnimation = function() {
    var $that = $(this);

     // determine if container is at the top of the page with a small margin
     var isAtTop = function() {
      var margin = 50; // Valor da margem desejada (pode ser ajustado)
      return $(window).scrollTop() <= margin;
    };

    // only reset animation when no long in viewport and already animated (but not running)
    // you might want to use a different offset for isInViewport()
    if (isAtTop() && $that.css('animation-name') != 'none' && !$that.hasClass('animated')) {
      if (!animationRunning) {
        $that.css({ 'visibility': 'hidden', 'animation-name': 'none' });
        wow.addBox(this);
        resetCustomAnimation();
      }
    }
  };
  $('#solution .wow').each(resetWOWJsAnimation);
};

function isSectionVisible($section) {
  var windowHeight = $(window).height();
  var sectionTop = $section.offset().top;
  var sectionBottom = sectionTop + $section.outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + windowHeight;

  // Verifica se a seção está totalmente visível na janela de visualização
  return sectionTop < viewportBottom && sectionBottom > viewportTop;
}

function handleSectionEntry() {
  var $cardsSection = $('#cards');
  const animBtn = document.querySelector(".anim-button");
  const checkButton = document.getElementById("check");

  if (isSectionVisible($cardsSection) && animationRunning && animBtn.style.visibility == 'visible') {
    checkButton.checked = true;
    var changeEvent = new Event('change');
    checkButton.dispatchEvent(changeEvent);
  }
}

$(window).on('resize scroll', handleSectionEntry);
$(window).on('resize scroll', checkWOWJsReset); 

function isMobileDevice() {
  return (window.innerWidth < 991);
}

var linkElement = document.getElementById('hero-next-section');

if (isMobileDevice()) {
  
  linkElement.href = "#solution-mobile";
}



















/* Array de títulos e conteúdos associados aos diferentes cardId */
/* Altere o conteúdo de 'title' e 'content' se necessário! */
var currentIndex = 0;
var cardInfo = {
    'card-main': {
      title: 'inteligência de verdade',
      content: 'Desenvolvida e constantemente aprimorada para o mercado de facilities, a Axia  integra algoritmos avançados de análise e métricas inteligentes para otimizar sua operação de limpeza. Com uma abordagem orientada por dados, oferecemos insights valiosos que impulsionam a eficiência e a qualidade dos ambientes. Exploramos muito além da simples coleta de dados, geramos ações estratégicas, permitindo uma gestão proativa e eficaz.',
      imageSrc: 'assets/img/icons/Axia Icon.svg'
    },
    'card-01': {
      title: 'interatividade na prática',
      content: 'Nossos dispositivos inteligentes oferecem um arsenal de funcionalidades para transformar a maneira como você gerencia seus espaços. No ecossistema Axia, garantimos a total privacidade dos dados: nenhum dispositivo utiliza dados pessoais, imagens ou vídeos de qualquer pessoa, seja um usuário do ambiente ou colaborador. Valorizamos a segurança e o respeito à privacidade, assegurando que nossos dispositivos forneçam dados valiosos sem comprometer a confidencialidade ou causar preocupações aos usuários. Proporcionamos uma experiência de gestão de limpeza otimizada, transparente e livre de preocupações.',
      imageSrc: 'assets/img/icons/IoT Icon.svg'
    },
    'card-02': {
      title: 'seus dados seguros e de prontidão',
      content: 'Garantir a confidencialidade e integridade dos dados é fundamental em nossa abordagem. Seus dados estarão seguros em servidores da Google de última geração que contam com protocolos de segurança avançados, criptografia de ponta a ponta e uma estrutura de armazenamento isolada. Além de seguro, graças às tecnologias de computação em nuvem, nossos sistemas garantem 99,99% de Uptime.',
      imageSrc: 'assets/img/icons/Data Storage Icon.svg'
    },
    'card-03': {
      title: 'filtrando o que é vital',
      content: 'Por meio de algoritmos inteligentes baseados em machine learning e técnicas avançadas de análise, processamos os dados gerados de maneira ágil e eficaz. Eliminamos o ruído e filtramos as informações, extraindo insights valiosos que impulsionam a gestão de limpeza e otimizam toda a operação. Esses dados são transformados em informações relevantes e acionáveis, permitindo tomadas de decisão estratégicas e uma melhoria contínua dos processos.',
      imageSrc: 'assets/img/icons/Data Processing Icon.svg'
    },
    'card-04': {
      title: 'diagnóstico preciso',
      content: 'Nossa inteligência analítica vai além da simples coleta de dados. Identificamos padrões, tendências e anomalias, permitindo que você antecipe problemas e tome medidas proativas. Com diagnósticos precisos e em tempo real, oferecemos uma visão detalhada do desempenho da sua operação de limpeza. Identificamos áreas de melhoria e sugerimos soluções estratégicas para otimizar a eficiência, melhorar a qualidade dos ambientes e elevar a experiência dos usuários.',
      imageSrc: 'assets/img/icons/Data Analytics Icon.svg'
    },
    'card-05': {
      title: 'tratamento estratégico',
      content: 'Cada operação é única, e nossa abordagem reflete isso. Desenvolvemos propostas de solução sob medida, levando em consideração as necessidades específicas e os objetivos individuais de cada uma. Nossa equipe especializada colabora com você para criar um plano estratégico que aborde os desafios específicos da sua operação de limpeza. Desde a implementação até a execução, estamos comprometidos em oferecer soluções inovadoras que impulsionem o seu negócio para o sucesso.',
      imageSrc: 'assets/img/icons/Solution Icon.svg'
    },
    'card-06': {
      title: 'acompanhamento analítico',
      content: 'Nosso compromisso não termina na implementação da solução. Oferecemos um acompanhamento contínuo e personalizado para garantir que você alcance e mantenha os melhores resultados. Nossa equipe de especialistas analisa constantemente os dados, fornece feedbacks detalhados e sugere ajustes conforme necessário. Com relatórios regulares e análises profundas, estamos ao seu lado em cada etapa do processo, garantindo que sua operação mantenha a máxima eficiência e excelência.',
      imageSrc: 'assets/img/icons/Follow Up Icon.svg'
    }
  };

var divCards = document.querySelectorAll('.cards');

var isChangeInfoTextRunning = false;

/* Função para alterar o texto informativo baseado no card 'on hover' */
function changeInfoText(cardId) {

  var divElement = document.getElementById("text-area");
  var sectionTitleElement = document.getElementById('info-title');
  var infoTextElement = document.getElementById('info-text');

  // Lógica para determinar o texto com base no cardId
  var cardInfoData = cardInfo[cardId] || cardInfo['default'];

  currentIndex = Object.keys(cardInfo).indexOf(cardId);
  
  setTimeout(function () {

    let opacity = 0;

    if (isChangeInfoTextRunning) {
      return;
    }
  
    isChangeInfoTextRunning = true;

    let fadeIn = setInterval(() => {
      if (opacity >= 1) {
         clearInterval(fadeIn);
         isChangeInfoTextRunning = false;
      }
      infoTextElement.style.opacity = opacity;
      sectionTitleElement.style.opacity = opacity;
      opacity += 0.01;
   }, 1);

    // Atualizar o conteúdo do título
    sectionTitleElement.textContent = cardInfoData.title;

    // Atualizar o conteúdo do elemento de texto
    infoTextElement.textContent = cardInfoData.content;
  }, 10); 

}

/* Event Listener para Touch Slide */
document.addEventListener('DOMContentLoaded', function () {
  // Adicione um ouvinte de evento ao documento quando o conteúdo for carregado
  var touchStartX;

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!touchStartX) return;

    var touchEndX = event.touches[0].clientX;
    var deltaX = touchEndX - touchStartX;

    // Limiar para considerar um deslizamento (ajuste conforme necessário)
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Deslizamento para a direita
        navigate('previous');
      } else {
        // Deslizamento para a esquerda
        navigate('next');
      }

      // Redefinir touchStartX para evitar deslizamentos múltiplos
      touchStartX = null;
    }
  }
});

/* Função para navegação padrão (paginada) entre os cards */
function navigate(direction) {
  if (direction === 'previous') {
    currentIndex = (currentIndex - 1 + Object.keys(cardInfo).length) % Object.keys(cardInfo).length;
  } else {
    currentIndex = (currentIndex + 1) % Object.keys(cardInfo).length;
  }

  updateCardInfo();

  // Adiciona a chamada para activeCard
  var currentCard = Object.keys(cardInfo)[currentIndex];
  var cardDiv = currentCard.replace('card', 'div');
  activeCard(cardDiv);
}

var isupdateCardInfoRunning = false;

function updateCardInfo() {
  var currentCard = Object.keys(cardInfo)[currentIndex];
  var titleElement = document.getElementById('info-title');
  var textElement = document.getElementById('info-text');
  var imageElement = document.querySelector('.cards-mobile img');

  let opacity = 0;

  if (isupdateCardInfoRunning) {
    return;
  }

  isupdateCardInfoRunning = true;

    let fadeIn = setInterval(() => {
      if (opacity >= 1) {
         clearInterval(fadeIn);
         isupdateCardInfoRunning = false;
      }
      textElement.style.opacity = opacity;
      titleElement.style.opacity = opacity;
      imageElement.style.opacity = opacity;
      opacity += 0.01;
   }, 1);

  titleElement.innerText = cardInfo[currentCard].title;
  textElement.innerText = cardInfo[currentCard].content;
  imageElement.src = cardInfo[currentCard].imageSrc;
}

function activeCard(cardItem) {
  divCards.forEach(function (card){
    if (card.classList.contains("cards-active")) {
      card.classList.remove("cards-active");
    }
  });

  document.getElementById(cardItem).classList.add("cards-active");
}

/* Roda uma vez para definir o primeiro conteúdo */
updateCardInfo();

/* Função listener 'hover' nos cards */
document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.icons');
  var animationStarted = false;
  var delayTimeout;

  function handleMouseOver() {
    if (!animationStarted) {
      // Limpar qualquer timeout existente
      clearTimeout(delayTimeout);

      var cardId = this.id;
      var cardDiv = cardId.replace('card', 'div');

      delayTimeout = setTimeout(function () {
        changeInfoText(cardId);
        activeCard(cardDiv);
        animationStarted = true;
      }, 400);
    }
  }

  function handleMouseOut() {
    clearTimeout(delayTimeout);
    animationStarted = false;
  }

  cards.forEach(function (card) {
    card.addEventListener('mouseover', handleMouseOver);
    card.addEventListener('mouseout', handleMouseOut);
  });
});

//----- Linhas entre os Cards -----

/* Construtor */
function createLine(startElement, endElement) {
  const options = {
    size: 1,
    path: 'arc',
    startPlug: 'behind',
    endPlug: 'behind',
    gradient: { startColor: '#28A8A5', endColor: '#aceceb'},
    dash: {animation: true, len: 4, gap: 10},
    hide: true
  };

  return new LeaderLine(
    document.getElementById(startElement),
    document.getElementById(endElement),
    options
  );
}

/* Linhas Externas */
const line01To02 = createLine('card-01', 'card-02');
const line02To03 = createLine('card-02', 'card-03');
const line03To04 = createLine('card-03', 'card-04');
const line04To05 = createLine('card-04', 'card-05');
const line05To06 = createLine('card-05', 'card-06');
const line06To01 = createLine('card-06', 'card-01');

/* Linhas Internas */
const mainTo01 = createLine('card-01', 'card-main');
const mainTo02 = createLine('card-02', 'card-main');
const mainTo03 = createLine('card-03', 'card-main');
const mainTo04 = createLine('card-04', 'card-main');
const mainTo05 = createLine('card-05', 'card-main');
const mainTo06 = createLine('card-06', 'card-main');

/* Animações de entrada das linhas */
const element = document.querySelector('.cards-container');

element.addEventListener('animationend', () => {
  line01To02.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  line02To03.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  line03To04.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  line04To05.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  line05To06.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  line06To01.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo01.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo02.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo03.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo04.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo05.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
  mainTo06.show('draw','animOptions: {duration: 500, timing: [0.58, 0, 0.42, 1]}');
});

// ----- END INFO AREA -----