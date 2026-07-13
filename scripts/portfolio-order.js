// Orders the homepage portfolio grid to match projectOrder and hides the
// temporarily hidden cards. Data comes from project-data.js (loaded first).
const portfolioGrid = document.querySelector("[data-portfolio-grid]");
const portfolioCount = document.querySelector("[data-portfolio-count]");

if (portfolioGrid && typeof projectOrder !== "undefined") {
  const cards = new Map(
    [...portfolioGrid.querySelectorAll("[data-project-card]")].map((card) => [
      card.dataset.projectCard,
      card
    ])
  );

  projectOrder.forEach((projectKey) => {
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
