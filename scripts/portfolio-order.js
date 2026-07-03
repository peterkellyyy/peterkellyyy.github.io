const portfolioOrder = [
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

const portfolioGrid = document.querySelector("[data-portfolio-grid]");

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
      portfolioGrid.append(card);
      cards.delete(projectKey);
    }
  });

  cards.forEach((card) => portfolioGrid.append(card));
}
