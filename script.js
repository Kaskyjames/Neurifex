document.getElementById('sort').addEventListener('change', function () {
  const sortType = this.value;
  const botGrid = document.querySelector('.bot-grid');
  const bots = Array.from(botGrid.querySelectorAll('.bot-card'));

  const getPrice = (card) => {
    const priceText = card.querySelector('ul li:last-child').textContent;
    return parseFloat(priceText.replace(/[^0-9.]/g, ''));
  };

  const getName = (card) => {
    return card.querySelector('h3').textContent.toLowerCase();
  };

  let sortedBots = bots;

  if (sortType === 'price-asc') {
    sortedBots = bots.sort((a, b) => getPrice(a) - getPrice(b));
  } else if (sortType === 'price-desc') {
    sortedBots = bots.sort((a, b) => getPrice(b) - getPrice(a));
  } else if (sortType === 'name') {
    sortedBots = bots.sort((a, b) => getName(a).localeCompare(getName(b)));
  }

  botGrid.innerHTML = '';
  sortedBots.forEach(bot => botGrid.appendChild(bot));
});


  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
