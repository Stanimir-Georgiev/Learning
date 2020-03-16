window.addEventListener("load", function() {
  const buttons = document.querySelectorAll(".cards button");
  const modalOuter = document.querySelector(".modal-outer");
  const modalInner = document.querySelector(".modal-inner");

  buttons.forEach(function(button) {
    button.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    const card = e.target.closest(".card");
    const img = card.querySelector("img");
    const imgSrc = card.querySelector("img").src;
    const desc = card.dataset.description;
    const name = card.querySelector("h2").textContent;
    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      "200",
      "600"
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
    modalOuter.classList.add("open");
  }
  function closeModal() {
    modalOuter.classList.remove("open");
  }
  modalOuter.addEventListener("click", function(e) {
    const isOutside = !e.target.closest(".modal-inner");
    
    if (isOutside) {
      closeModal();
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
