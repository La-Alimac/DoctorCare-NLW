window.addEventListener('scroll', onScroll) //adiciono essa parte e removo a função do body para que o erro de executar a função sem o carregamento total da página não ocorra
onScroll() //quando a página iniciar eu preciso executar uma vez o scroll
function onScroll() {
  //tem como função gerenciar os scrolls da página
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  console.log()

  //verficar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassTargetLine = targetLine >= sectionTop

  console.log(sectionTopReachOrPassTargetLine)

  //informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassTargetLine
  )

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log(
    'O fundo da seção passou ou chegou na linha?',
    sectionEndPassedTargetline
  )

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  //usando classList.add eu coloco uma classe no JS mas não no HTML
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700 //usar o '`' me permite usar a quebra de linha, coisa que só  '' não me permite, o nome disso é Template Literals
}).reveal(`#home, 
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header
 #about .content`)
