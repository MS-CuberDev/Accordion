const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordions.forEach(item => {
      if(item.classList.contains('active') && item !== accordion) {
        item.classList.remove('active');
      }
    })
    accordion.classList.toggle('active')
  })
})
