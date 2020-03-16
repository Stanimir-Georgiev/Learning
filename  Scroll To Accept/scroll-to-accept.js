const terms = document.querySelector('.terms-and-conditions');
const accept = document.querySelector('.accept')
const observer = new IntersectionObserver(handleIntersection, {
    root: terms,
    threshold: 1
});
observer.observe(terms.lastElementChild);

function handleIntersection (entities, observer) {
    if (entities[0].intersectionRatio === 1) {
        accept.disabled = false;
        observer.unobserve(terms.lastElementChild)
    }
}
