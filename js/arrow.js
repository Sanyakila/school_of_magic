// Scroll to anchor
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });