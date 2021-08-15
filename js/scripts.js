// get the element to animate
const sideContainer = document.querySelector('.side-content');
var element = document.querySelector('.skills');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
sideContainer.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    element.classList.add('animate');
  }
}

const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.hello');

sideContainer.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(sideContainer.getBoundingClientRect().top);

    if (
      sideContainer.getBoundingClientRect().top >=
      sectionTop - sectionHeight / 3
    ) {
      current = section.getAttribute('id');
    }
  });

  navList.forEach((li) => {
    li.classList.remove('active');

    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});
