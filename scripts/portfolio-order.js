const portfolioOrder = [
  "berkshire-grey",
  "fx10",
  "harpy",
  "co-parts",
  "finefeatures",
  "px100",
  "3dtrails",
  "aerobat",
  "asthma-inhaler-assistive-device",
  "cat-treat-dispenser",
  "rotary-rf-pcb-manufacturing",
  "morse-corp",
  "irobot",
  "sikorsky",
  "audio-variometer",
  "soaring"
];

const temporarilyHiddenPortfolioCards = new Set([
  "morse-corp",
  "irobot",
  "sikorsky"
]);

const portfolioGrid = document.querySelector("[data-portfolio-grid]");
const portfolioCount = document.querySelector("[data-portfolio-count]");

if (portfolioGrid) {
  const cards = new Map(
    [...portfolioGrid.querySelectorAll("[data-project-card]")].map((card) => [
      card.dataset.projectCard,
      card
    ])
  );

  portfolioOrder.forEach((projectKey) => {
    const card = cards.get(projectKey);
    if (card) {
      card.hidden = temporarilyHiddenPortfolioCards.has(projectKey);
      portfolioGrid.append(card);
      cards.delete(projectKey);
    }
  });

  cards.forEach((card) => {
    card.hidden = temporarilyHiddenPortfolioCards.has(card.dataset.projectCard);
    portfolioGrid.append(card);
  });

  if (portfolioCount) {
    const visibleCount = portfolioGrid.querySelectorAll("[data-project-card]:not([hidden])").length;
    portfolioCount.textContent = `${visibleCount} projects`;
  }
}
