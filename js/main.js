const familyName = document.querySelector('.family-name');
const firstNames = document.querySelector('.first-names');
const main = document.querySelector('main');

familyName.addEventListener('animationend', () => {
  firstNames.classList.add('animate');
})

firstNames.addEventListener('animationend', () => {
  main.classList.add('animate');
})

let timeout = setTimeout(() => {
  familyName.classList.add('animate');
}, 3000);

document.body.addEventListener('click', () => {
  if (familyName.classList.contains('animate')) {
    return;
  }

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    familyName.classList.add('animate');
  }, 1000);
});
