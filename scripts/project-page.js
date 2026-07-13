// Renders a project page from its entry in projectCatalog.
// Content data lives in project-data.js, which must be loaded first.
const root = document.querySelector("[data-project-root]");
const key = document.body.dataset.project;
const project = typeof projectCatalog === "undefined" ? null : projectCatalog[key];

// The hero text (eyebrow, title, lede) is driven by the portfolio thumbnail
// card so the hero and the cards can never diverge. Only the tag chips are
// hero-specific; those still come from projectCatalog. Card data is the single
// source of truth for this text and lives in moreProjectCards.
const projectCard = typeof moreProjectCards === "undefined" ? null : moreProjectCards[key];
const heroEyebrow = projectCard?.company ?? project?.eyebrow;
const heroTitle = projectCard?.title ?? project?.title;
const heroLede = projectCard?.summary ?? project?.lede;

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const addParagraphs = (container, paragraphs) => {
  paragraphs.forEach((copy) => {
    if (typeof copy === "string") {
      container.append(el("p", "", copy));
      return;
    }

    const paragraph = el("p");
    copy.parts?.forEach((part) => {
      if (typeof part === "string") {
        paragraph.append(document.createTextNode(part));
        return;
      }

      const link = el("a", "", part.text);
      link.href = part.href;
      paragraph.append(link);
    });
    container.append(paragraph);
  });
};

const applyMediaPresentation = (video, media = {}) => {
  if (media.aspectRatio) video.style.setProperty("--media-aspect", media.aspectRatio);
  if (media.background) video.style.setProperty("--media-bg", media.background);
  if (media.fit) video.style.setProperty("--media-fit", media.fit);
};

// Wraps a controllable <video> in a shell with a large custom play-button overlay
// so paused videos clearly invite playback while native controls handle scrubbing.
const decorateWithPlayOverlay = (figure, video, media = {}) => {
  figure.classList.add("local-video-player");
  const shell = el("div", "local-video-shell");
  const playButton = el("button", "local-video-play-button");
  playButton.type = "button";
  playButton.setAttribute("aria-label", `Play ${media.caption || media.label || "video"}`);
  playButton.append(el("span", "local-video-play-icon", ""));
  playButton.addEventListener("click", () => {
    video.play().catch(() => {});
  });
  video.addEventListener("play", () => figure.classList.add("is-video-started"));
  video.addEventListener("pause", () => figure.classList.remove("is-video-started"));
  video.addEventListener("ended", () => figure.classList.remove("is-video-started"));
  shell.append(video, playButton);
  return shell;
};

const playOnceOnView = (video) => {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (!entry?.isIntersecting || video.dataset.playedOnce === "true") return;
    video.dataset.playedOnce = "true";
    video.play().catch(() => {});
    observer.disconnect();
  }, { threshold: 0.42 });
  observer.observe(video);
};

const createLink = ([label, href], className = "project-action") => {
  const link = el("a", className, label);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
};

// Lazily-built singleton lightbox for expanding gallery images to a
// partial-fullscreen overlay. Closes on backdrop click, the close button, or Escape.
let lightbox = null;
const updateLightboxImage = () => {
  const item = lightbox._items[lightbox._index];
  if (!item) return;
  const [src, caption] = item;
  lightbox._img.src = src;
  lightbox._img.alt = caption || "";
  lightbox._cap.textContent = caption || "";
  lightbox._cap.style.display = caption ? "" : "none";
};

const showLightboxImage = (offset) => {
  if (!lightbox?._items?.length) return;
  lightbox._index = (lightbox._index + offset + lightbox._items.length) % lightbox._items.length;
  updateLightboxImage();
};

const openLightbox = (src, caption, items = [[src, caption]], index = 0) => {
  if (!lightbox) {
    lightbox = el("div", "fx10-lightbox");
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    const figure = el("figure", "fx10-lightbox-figure");
    const img = el("img", "fx10-lightbox-image");
    const cap = el("figcaption", "fx10-lightbox-caption");
    const closeBtn = el("button", "fx10-lightbox-close");
    const prevBtn = el("button", "fx10-lightbox-nav fx10-lightbox-prev");
    const nextBtn = el("button", "fx10-lightbox-nav fx10-lightbox-next");
    const prevIcon = el("img");
    const nextIcon = el("img");
    prevIcon.src = "../icons/chevron-left.svg";
    nextIcon.src = "../icons/chevron-right.svg";
    prevIcon.alt = "";
    nextIcon.alt = "";
    closeBtn.type = "button";
    prevBtn.type = "button";
    nextBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close image");
    prevBtn.setAttribute("aria-label", "Previous image");
    nextBtn.setAttribute("aria-label", "Next image");
    prevBtn.append(prevIcon);
    nextBtn.append(nextIcon);
    closeBtn.textContent = "×";
    figure.append(closeBtn, prevBtn, img, nextBtn, cap);
    lightbox.append(figure);
    lightbox._img = img;
    lightbox._cap = cap;
    lightbox._prev = prevBtn;
    lightbox._next = nextBtn;
    const close = () => {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("fx10-lightbox-open");
    };
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target === closeBtn) close();
    });
    prevBtn.addEventListener("click", () => showLightboxImage(-1));
    nextBtn.addEventListener("click", () => showLightboxImage(1));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) close();
      if (event.key === "ArrowLeft" && lightbox.classList.contains("is-open")) showLightboxImage(-1);
      if (event.key === "ArrowRight" && lightbox.classList.contains("is-open")) showLightboxImage(1);
    });
    document.body.append(lightbox);
  }
  lightbox._items = items;
  lightbox._index = index;
  const canBrowse = items.length > 1;
  lightbox._prev.hidden = !canBrowse;
  lightbox._next.hidden = !canBrowse;
  updateLightboxImage();
  document.body.classList.add("fx10-lightbox-open");
  // force reflow so the open transition runs from the closed state
  void lightbox.offsetWidth;
  lightbox.classList.add("is-open");
};

const appendHeroDate = (container) => {
  const date = moreProjectCards[key]?.date;
  if (date) container.append(el("p", "fx10-project-date", date));
};

// Builds the project hero. Eyebrow/title/lede mirror the portfolio thumbnail
// card (heroEyebrow/heroTitle/heroLede); only the tag chips are hero-specific.
const buildHeroSection = () => {
  const hero = el("section", "fx10-hero");
  const heroCopy = el("div", "fx10-hero-copy");
  heroCopy.append(
    el("p", "fx10-eyebrow", heroEyebrow),
    el("h1", "", heroTitle)
  );
  appendHeroDate(heroCopy);
  heroCopy.append(el("p", "fx10-lede", heroLede));

  if (project.tags?.length) {
    const tags = el("div", "fx10-tags");
    project.tags.forEach((tag) => tags.append(el("span", "", tag)));
    heroCopy.append(tags);
  }

  const heroMedia = el("div", `fx10-hero-media ${project.heroClass || ""}`.trim());
  const heroImage = el("img");
  heroImage.src = project.hero;
  heroImage.alt = project.heroAlt;
  heroImage.loading = "eager";
  heroMedia.append(heroImage);
  hero.append(heroCopy, heroMedia);
  return hero;
};

const createMoreProjectCard = (card) => {
  const link = el("a", "project-link more-project-card");
  link.href = card.href;
  const figure = el("figure", `thumb ${card.thumbClass}`.trim());
  figure.setAttribute("aria-label", `${card.title} thumbnail`);
  const image = el("img");
  image.src = card.thumb;
  image.alt = card.alt;
  image.loading = "lazy";
  figure.append(image);
  link.append(
    figure,
    el("p", "project-date", card.date),
    el("h3", "project-title", card.title),
    el("p", "project-summary", card.summary),
    el("span", "project-company", card.company)
  );
  return link;
};

const createReturnProjectsCard = () => {
  const link = el("a", "project-link more-project-return");
  link.href = "../index.html#portfolio";
  const icon = el("img", "more-project-return-icon");
  icon.src = "../icons/circle-arrow-right.svg";
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  link.append(
    icon,
    el("h3", "project-title", "Return to Portfolio"),
    el("p", "project-summary", "Head back to the full portfolio grid.")
  );
  return link;
};

const renderMoreProjects = () => {
  const section = el("section", "fx10-section more-projects-section");
  section.append(el("p", "fx10-section-kicker", "More Projects"));
  const grid = el("div", "project-grid more-projects-grid");
  projectOrder
    .filter((projectKey) => projectKey !== key)
    .slice(0, 3)
    .forEach((projectKey) => grid.append(createMoreProjectCard(moreProjectCards[projectKey])));
  grid.append(createReturnProjectsCard());
  section.append(grid);
  root.append(section);
};

// Renders a project whose layout is described entirely by a `blocks` array in
// the catalog. Each block is a <section>; each part inside it is a direct child
// (copy column, figure, grid, video, etc.). This keeps bespoke case-study
// layouts (FX10, co-parts) fully data-driven from projectCatalog.
const buildBlockPart = (part) => {
  switch (part.kind) {
    case "copy": {
      const copy = el("div", part.copyClass);
      if (part.kicker) copy.append(el("p", "fx10-section-kicker", part.kicker));
      // Entries are paragraphs (string / { parts }) or an inline figure
      // ({ figure: {...} }), rendered in order so images can sit between paragraphs.
      part.paragraphs?.forEach((entry) => {
        if (entry && entry.figure) {
          copy.append(buildBlockPart({ kind: "imageFigure", ...entry.figure }));
        } else if (entry && entry.figureGroup) {
          copy.append(buildBlockPart({ kind: "figureGroup", ...entry.figureGroup }));
        } else {
          addParagraphs(copy, [entry]);
        }
      });
      if (part.actions) {
        const actions = el("div", "project-actions");
        part.actions.forEach((link) => actions.append(createLink(link)));
        copy.append(actions);
      }
      return copy;
    }
    case "imageFigure": {
      const figure = el("figure", part.figureClass);
      const image = el("img");
      image.src = part.src;
      image.alt = part.alt;
      image.loading = "lazy";
      figure.append(image);
      if (part.caption) figure.append(el("figcaption", "", part.caption));
      return figure;
    }
    case "figureGroup": {
      const group = el("div", part.groupClass);
      part.figures?.forEach((figureData) => {
        group.append(buildBlockPart({ kind: "imageFigure", ...figureData }));
      });
      return group;
    }
    case "youtube": {
      const figure = el("figure", part.figureClass);
      const iframe = el("iframe");
      const embedUrl = new URL(project.embed.src);
      embedUrl.searchParams.set("origin", window.location.origin);
      iframe.src = embedUrl.href;
      iframe.title = part.iframeTitle || project.embed.title;
      if (part.sized) {
        iframe.width = "560";
        iframe.height = "315";
      }
      iframe.loading = "lazy";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      figure.append(iframe, el("figcaption", "", part.caption || project.embed.title));
      return figure;
    }
    case "video": {
      const video = el("video", part.videoClass);
      video.src = part.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", part.ariaLabel || "");
      if (part.caption || part.figureClass) {
        const figure = el("figure", part.figureClass);
        figure.append(video);
        if (part.caption) figure.append(el("figcaption", "", part.caption));
        return figure;
      }
      return video;
    }
    case "contentPair": {
      const pair = el("div", part.pairClass);
      part.parts?.forEach((childPart) => pair.append(buildBlockPart(childPart)));
      return pair;
    }
    case "figurePair": {
      const pair = el("div", "standard-section-figure-pair");
      part.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        pair.append(figure);
      });
      return pair;
    }
    case "grid": {
      const grid = el("div", part.gridClass);
      part.cards.forEach(([src, title, copy]) => {
        const card = el("article", "fx10-highlight-card");
        const image = el("img");
        image.src = src;
        image.alt = title;
        image.loading = "lazy";
        card.append(image, el("h3", "", title));
        if (copy) card.append(el("p", "", copy));
        grid.append(card);
      });
      return grid;
    }
    case "splitPanel": {
      const panel = el("div", part.panelClass);
      panel.append(el("p", "fx10-section-kicker", part.kicker));
      part.items.forEach((item) => {
        const itemEl = el("div", part.itemClass);
        const icon = el("span", part.iconClass, "");
        if (item.icon) {
          const image = el("img");
          image.src = `../icons/${item.icon}.svg`;
          image.alt = "";
          image.setAttribute("aria-hidden", "true");
          icon.append(image);
        }
        itemEl.append(icon);
        if (item.title) itemEl.append(el("h3", "", item.title));
        itemEl.append(el("p", "", item.copy));
        panel.append(itemEl);
      });
      return panel;
    }
    case "image": {
      const image = el("img");
      image.src = part.src;
      image.alt = part.alt;
      image.loading = "lazy";
      return image;
    }
    default:
      return document.createComment(`unknown block part: ${part.kind}`);
  }
};

const buildBlockSection = (block) => {
  const section = el("section", block.sectionClass);
  if (block.kicker) section.append(el("p", "fx10-section-kicker", block.kicker));
  block.parts.forEach((part) => section.append(buildBlockPart(part)));
  return section;
};

const renderBlockProject = () => {
  document.title = `${heroTitle} | Peter Kelly`;
  document.body.classList.add("fx10-case-study");
  root.closest(".project-main")?.classList.add("fx10-project-main");

  root.append(buildHeroSection());

  project.blocks.forEach((block) => root.append(buildBlockSection(block)));
  renderMoreProjects();
};

const renderStandardProject = () => {
  document.title = `${heroTitle} | Peter Kelly`;
  document.body.classList.add("fx10-case-study");
  root.closest(".project-main")?.classList.add("fx10-project-main");

  root.append(buildHeroSection());

  const overview = el("section", "fx10-overview-section fx10-section");
  const overviewCopy = el("div", "fx10-overview-copy");
  overviewCopy.append(el("p", "fx10-section-kicker", "Overview"));
  addParagraphs(overviewCopy, project.overview || []);
  if (project.logoStrip?.length) {
    const logoStrip = el("div", "project-logo-strip");
    project.logoStrip.forEach((logoData) => {
      const logo = el("img");
      logo.src = logoData.src;
      logo.alt = logoData.alt || "";
      logo.loading = "lazy";
      logoStrip.append(logo);
    });
    overviewCopy.append(logoStrip);
  }
  overview.append(overviewCopy);

  if (project.overviewMedia) {
    const glance = el(project.overviewMedia.type === "mediaGrid" ? "div" : "figure", "fx10-glance");
    if (project.overviewMedia.type === "mediaGrid") {
      const mediaGrid = el("div", "overview-media-grid");
      project.overviewMedia.items.forEach((mediaData) => {
        const mediaItem = el("figure", "overview-media-item");
        if (mediaData.type === "video") {
          const video = el("video");
          video.src = mediaData.src;
          video.autoplay = mediaData.autoplay !== false && !mediaData.playOnceOnView;
          video.loop = mediaData.loop !== false && !mediaData.playOnceOnView;
          video.muted = true;
          video.playsInline = true;
          video.preload = "metadata";
          video.setAttribute("aria-label", mediaData.caption || "");
          applyMediaPresentation(video, mediaData);
          mediaItem.append(video);
          if (mediaData.playOnceOnView) playOnceOnView(video);
        } else {
          const image = el("img");
          image.src = mediaData.src;
          image.alt = mediaData.alt || mediaData.caption || "";
          image.loading = "lazy";
          applyMediaPresentation(image, mediaData);
          mediaItem.append(image);
        }
        if (mediaData.caption) mediaItem.append(el("figcaption", "", mediaData.caption));
        mediaGrid.append(mediaItem);
      });
      glance.append(mediaGrid);
    } else if (project.overviewMedia.type === "video") {
      const video = el("video", "fx10-glance-video");
      video.src = project.overviewMedia.src;
      video.autoplay = project.overviewMedia.autoplay !== false && !project.overviewMedia.playOnceOnView;
      video.loop = project.overviewMedia.loop !== false && !project.overviewMedia.playOnceOnView;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", project.overviewMedia.caption || "");
      applyMediaPresentation(video, project.overviewMedia);
      glance.append(video);
      if (project.overviewMedia.playOnceOnView) playOnceOnView(video);
    } else if (project.overviewMedia.type === "imagePair") {
      const pair = el("div", "fx10-glance-image-pair");
      project.overviewMedia.images.forEach((imageData) => {
        const image = el("img");
        image.src = imageData.src;
        image.alt = imageData.alt || project.overviewMedia.caption || "";
        image.loading = "lazy";
        pair.append(image);
      });
      glance.append(pair);
    } else {
      const glanceImage = el("img");
      glanceImage.src = project.overviewMedia.src;
      glanceImage.alt = project.overviewMedia.alt || project.overviewMedia.caption || "";
      glanceImage.loading = "lazy";
      applyMediaPresentation(glanceImage, project.overviewMedia);
      glance.append(glanceImage);
    }
    if (project.overviewMedia.caption) glance.append(el("figcaption", "", project.overviewMedia.caption));
    if (project.overviewMedia.figures?.length) {
      const figurePair = el("div", "standard-section-figure-pair overview-supplemental-figures");
      project.overviewMedia.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        figurePair.append(figure);
      });
      glance.append(figurePair);
    }
    overview.append(glance);
  } else if (project.media?.[0]) {
    const glance = el("figure", "fx10-glance");
    const glanceImage = el("img");
    glanceImage.src = project.media[0][0];
    glanceImage.alt = project.media[0][1];
    glanceImage.loading = "lazy";
    glance.append(glanceImage, el("figcaption", "", project.media[0][1]));
    overview.append(glance);
  }
  if (project.overviewFigures?.length) {
    const figurePair = el("div", "standard-section-figure-pair overview-bottom-figures");
    project.overviewFigures.forEach((figureData) => {
      const figure = el("figure", "standard-section-paired-figure");
      const image = el("img");
      image.src = figureData.src;
      image.alt = figureData.alt || figureData.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
      figurePair.append(figure);
    });
    overview.append(figurePair);
  }
  root.append(overview);

  if (project.statStrip?.items?.length) {
    const statSection = el("section", "fx10-section project-stat-section");
    if (project.statStrip.kicker) statSection.append(el("p", "fx10-section-kicker", project.statStrip.kicker));
    const strip = el("div", "project-stat-strip");
    project.statStrip.items.forEach((stat) => {
      const item = el("article", "project-stat");
      item.append(el("span", "project-stat-value", stat.value), el("span", "project-stat-label", stat.label));
      strip.append(item);
    });
    statSection.append(strip);
    root.append(statSection);
  }

  const appendFlightEmbed = () => {
    if (!project.flightEmbed) return;
    const fe = project.flightEmbed;
    const flightSection = el("section", "fx10-section fx10-flight-section");
    flightSection.append(el("p", "fx10-section-kicker", fe.sectionLabel || "Cross country flying"));
    if (fe.body?.length) {
      const flightCopy = el("div", "fx10-design-copy fx10-generic-design-copy");
      addParagraphs(flightCopy, fe.body);
      flightSection.append(flightCopy);
    }
    const figure = el("figure", "project-flight-embed");
    const frame = el("div", "project-flight-embed-frame");
    const iframe = el("iframe");
    iframe.src = fe.src;
    iframe.title = fe.title || "WeGlide flight";
    iframe.loading = "lazy";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.allowFullscreen = true;
    frame.append(iframe);
    figure.append(frame);
    flightSection.append(figure);
    root.append(flightSection);
  };

  if (project.featureBreakdown?.length) {
    const breakdown = el("section", "fx10-section module-breakdown-section");
    project.featureBreakdown.forEach((item) => {
      const row = el("article", "module-breakdown-row");
      const image = el("img", "module-breakdown-image");
      image.src = item.image;
      image.alt = item.alt || item.title;
      image.loading = "lazy";
      const copy = el("div", "module-breakdown-copy");
      copy.append(el("h2", "", item.title));
      const list = el("ul", "module-breakdown-list");
      item.bullets.forEach((bullet) => list.append(el("li", "", bullet)));
      copy.append(list);
      row.append(image, copy);
      breakdown.append(row);
    });
    root.append(breakdown);
  }

  if (project.designSpread) {
    const designSpread = el("section", "fx10-section asthma-design-spread");
    designSpread.append(el("p", "fx10-section-kicker", "Design"));

    const topGrid = el("div", "asthma-design-top");
    const introCopy = el("div", "asthma-design-copy");
    addParagraphs(introCopy, project.designSpread.intro || []);
    const sideFigures = el("div", "asthma-design-side-figures");
    project.designSpread.sideFigures?.forEach((figureData) => {
      const figure = el("figure", "asthma-design-figure");
      if (figureData.type === "video") {
        const video = el("video");
        video.src = figureData.src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.setAttribute("aria-label", figureData.caption || "");
        applyMediaPresentation(video, figureData);
        figure.append(video);
      } else {
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        figure.append(image);
      }
      if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
      sideFigures.append(figure);
    });
    topGrid.append(introCopy, sideFigures);
    designSpread.append(topGrid);

    if (project.designSpread.pcbIntro) {
      designSpread.append(el("p", "asthma-design-copy asthma-design-wide-copy", project.designSpread.pcbIntro));
    }

    if (project.designSpread.pcbFigures?.length) {
      const pcbFigure = el("figure", "asthma-pcb-figure");
      const pcbGrid = el("div", "asthma-pcb-grid");
      project.designSpread.pcbFigures.forEach((figureData) => {
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || project.designSpread.pcbCaption || "";
        image.loading = "lazy";
        pcbGrid.append(image);
      });
      pcbFigure.append(pcbGrid);
      if (project.designSpread.pcbCaption) pcbFigure.append(el("figcaption", "", project.designSpread.pcbCaption));
      designSpread.append(pcbFigure);
    }

    if (project.designSpread.outro) {
      designSpread.append(el("p", "asthma-design-copy asthma-design-wide-copy", project.designSpread.outro));
    }

    root.append(designSpread);
  }

  const projectSections = project.sections ? [...project.sections] : [];
  if (key === "harpy") {
    projectSections.sort((a, b) => (b.kicker === "Actuation and Fabrication") - (a.kicker === "Actuation and Fabrication"));
  }

  projectSections.forEach((section) => {
    const design = el("section", `fx10-section fx10-design-section ${section.className || ""}`.trim());
    design.append(el("p", "fx10-section-kicker", section.kicker));
    const designCopy = el("div", "fx10-design-copy fx10-generic-design-copy");
    if (section.title) designCopy.append(el("h2", "", section.title));
    addParagraphs(designCopy, section.body || []);
    if (section.bullets?.length) {
      const list = el("ul", "standard-section-bullets");
      section.bullets.forEach((bullet) => list.append(el("li", "", bullet)));
      designCopy.append(list);
    }
    if (section.afterBullets?.length) addParagraphs(designCopy, section.afterBullets);
    design.append(designCopy);
    if (section.asideFigure) {
      const figure = el("figure", `standard-section-paired-figure standard-section-aside-figure ${section.asideFigure.figureClass || ""}`.trim());
      const image = el("img");
      image.src = section.asideFigure.src;
      image.alt = section.asideFigure.alt || section.asideFigure.caption || "";
      image.loading = "lazy";
      applyMediaPresentation(image, section.asideFigure);
      figure.append(image);
      if (section.asideFigure.caption) figure.append(el("figcaption", "", section.asideFigure.caption));
      design.classList.add("fx10-design-section-with-media");
      design.append(figure);
    }
    if (section.asideVideo) {
      const figure = el("figure", "fx10-overview-video standard-section-video standard-section-aside-video");
      const video = el("video");
      video.src = section.asideVideo.src;
      video.autoplay = !section.asideVideo.controls;
      video.loop = !section.asideVideo.controls;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.controls = !!section.asideVideo.controls;
      if (section.asideVideo.poster) video.poster = section.asideVideo.poster;
      video.setAttribute("aria-label", section.asideVideo.label || section.asideVideo.caption || "");
      applyMediaPresentation(video, section.asideVideo);
      if (section.asideVideo.controls) {
        figure.append(decorateWithPlayOverlay(figure, video, section.asideVideo));
      } else {
        figure.append(video);
      }
      if (section.asideVideo.caption) figure.append(el("figcaption", "", section.asideVideo.caption));
      design.classList.add("fx10-design-section-with-media");
      design.append(figure);
    }
    if (section.figure) {
      const figure = el("figure", "fx10-overview-video standard-section-figure");
      const image = el("img");
      image.src = section.figure.src;
      image.alt = section.figure.alt || section.figure.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (section.figure.caption) figure.append(el("figcaption", "", section.figure.caption));
      design.append(figure);
    }
    if (section.afterFigureBody?.length) {
      const afterCopy = el("div", "fx10-design-copy fx10-generic-design-copy standard-section-after-figure-copy");
      addParagraphs(afterCopy, section.afterFigureBody);
      design.append(afterCopy);
    }
    if (section.fullWidthFigure) {
      const figure = el("figure", `fx10-overview-video standard-section-figure standard-section-full-figure ${section.fullWidthFigure.figureClass || ""}`.trim());
      const image = el("img");
      image.src = section.fullWidthFigure.src;
      image.alt = section.fullWidthFigure.alt || section.fullWidthFigure.caption || "";
      image.loading = "lazy";
      applyMediaPresentation(image, section.fullWidthFigure);
      figure.append(image);
      if (section.fullWidthFigure.caption) figure.append(el("figcaption", "", section.fullWidthFigure.caption));
      design.append(figure);
    }
    if (section.bottomAsideBody?.length || section.bottomAsideFigure) {
      const bottomAside = el("div", "standard-section-bottom-aside");
      if (section.bottomAsideBody?.length) {
        const bottomCopy = el("div", "fx10-design-copy fx10-generic-design-copy");
        addParagraphs(bottomCopy, section.bottomAsideBody);
        bottomAside.append(bottomCopy);
      }
      if (section.bottomAsideFigure) {
        const figure = el("figure", "standard-section-paired-figure standard-section-bottom-aside-figure");
        const image = el("img");
        image.src = section.bottomAsideFigure.src;
        image.alt = section.bottomAsideFigure.alt || section.bottomAsideFigure.caption || "";
        image.loading = "lazy";
        figure.append(image);
        if (section.bottomAsideFigure.caption) figure.append(el("figcaption", "", section.bottomAsideFigure.caption));
        bottomAside.append(figure);
      }
      design.append(bottomAside);
    }
    if (section.figures?.length) {
      const figurePair = el("div", "standard-section-figure-pair");
      section.figures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        const image = el("img");
        image.src = figureData.src;
        image.alt = figureData.alt || figureData.caption || "";
        image.loading = "lazy";
        applyMediaPresentation(image, figureData);
        figure.append(image);
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        figurePair.append(figure);
      });
      design.append(figurePair);
    }
    if (section.processSteps?.length) {
      const processGrid = el("div", "project-process-grid");
      section.processSteps.forEach((step) => {
        const item = el("article", "project-process-step");
        const imageWrap = el("div", "project-process-image");
        const image = el("img");
        image.src = step.image;
        image.alt = step.alt || step.title || "";
        image.loading = "lazy";
        imageWrap.append(image);
        item.append(imageWrap, el("h3", "", step.title), el("p", "", step.copy));
        processGrid.append(item);
      });
      design.append(processGrid);
    }
    if (section.inlineVideo) {
      const figure = el("figure", "fx10-overview-video standard-section-video");
      const video = el("video");
      video.src = section.inlineVideo.src;
      video.autoplay = !section.inlineVideo.controls;
      video.loop = !section.inlineVideo.controls;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.controls = !!section.inlineVideo.controls;
      if (section.inlineVideo.poster) video.poster = section.inlineVideo.poster;
      video.setAttribute("aria-label", section.inlineVideo.label || section.inlineVideo.caption || "");
      applyMediaPresentation(video, section.inlineVideo);
      if (section.inlineVideo.controls) {
        figure.append(decorateWithPlayOverlay(figure, video, section.inlineVideo));
      } else {
        figure.append(video);
      }
      if (section.inlineVideo.caption) figure.append(el("figcaption", "", section.inlineVideo.caption));
      if (section.inlineVideo.placement === "aside") {
        design.classList.add("fx10-design-section-with-media");
        design.append(figure);
      } else {
        design.append(figure);
      }
    }
    root.append(design);
    if (section.appendFlightEmbed) appendFlightEmbed();

    if (section.bannerVideo) {
      const videoBanner = el("section", "fx10-image-banner standard-video-banner");
      const video = el("video");
      video.src = section.bannerVideo.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", section.bannerVideo.label || "");
      videoBanner.append(video);
      root.append(videoBanner);
    }
  });

  if (project.media?.length) {
    const gallery = el("section", "fx10-section fx10-gallery-section");
    gallery.append(el("p", "fx10-section-kicker", project.galleryLabel || "Design"));
    if (project.galleryIntro) gallery.append(el("p", "fx10-gallery-intro", project.galleryIntro));
    const highlightGrid = el("div", "fx10-highlight-grid");
    project.media.forEach(([src, caption], index) => {
      const card = el("article", "fx10-highlight-card");
      const trigger = el("button", "fx10-gallery-media");
      trigger.type = "button";
      trigger.setAttribute("aria-label", caption ? `Expand image: ${caption}` : "Expand image");
      const image = el("img");
      image.src = src;
      image.alt = caption;
      image.loading = "lazy";
      const hint = el("span", "fx10-zoom-hint");
      const hintIcon = el("img");
      hintIcon.src = "../icons/expand.svg";
      hintIcon.alt = "";
      hint.append(hintIcon);
      trigger.append(image, hint);
      trigger.addEventListener("click", () => openLightbox(src, caption, project.media, index));
      card.append(trigger, el("figcaption", "fx10-gallery-caption", caption));
      highlightGrid.append(card);
    });
    gallery.append(highlightGrid);
    root.append(gallery);
  }

  const appendVideoContent = (container) => {
    project.videos?.forEach((entry) => {
      const videoData = Array.isArray(entry)
        ? { src: entry[0], poster: entry[1], caption: entry[2] }
        : entry;
      const figure = el("figure", "fx10-overview-video");
      const video = el("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (videoData.poster) video.poster = videoData.poster;
      applyMediaPresentation(video, videoData);
      video.setAttribute("aria-label", videoData.label || videoData.caption || "");
      const source = el("source");
      source.src = videoData.src;
      source.type = "video/mp4";
      video.append(source);
      figure.append(decorateWithPlayOverlay(figure, video, videoData), el("figcaption", "", videoData.caption));
      container.append(figure);
    });

    if (project.embed) {
      const figure = el("figure", "fx10-overview-video");
      const iframe = el("iframe");
      const embedUrl = new URL(project.embed.src);
      embedUrl.searchParams.set("origin", window.location.origin);
      iframe.src = embedUrl.href;
      iframe.title = project.embed.title;
      iframe.loading = "lazy";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      figure.append(iframe, el("figcaption", "", project.embed.title));
      container.append(figure);
    }
  };

  const appendVideoSection = () => {
    if (!project.videos?.length && !project.embed) return;
    const videoSection = el("section", "fx10-section fx10-launch-video-section");
    videoSection.append(el("p", "fx10-section-kicker", "In Motion"));
    appendVideoContent(videoSection);

    root.append(videoSection);
  };

  if (!project.videoAfterOutcome) appendVideoSection();

  if (project.outcome || project.videoAfterOutcome || project.outcomeFigures?.length || project.outcomeAsideFigure || project.links?.length) {
    const outcome = el("section", "fx10-section fx10-outcome-section");
    const outcomeCopy = project.outcomeAsideFigure ? el("div", "fx10-outcome-copy") : outcome;
    if (project.outcome) {
      outcomeCopy.append(el("p", "fx10-section-kicker", project.outcomeLabel || "Outcome"));
      addParagraphs(outcomeCopy, Array.isArray(project.outcome) ? project.outcome : [project.outcome]);
    }
    if (project.outcomeAsideFigure) {
      outcome.classList.add("fx10-outcome-with-image");
      outcome.append(outcomeCopy);
      const figure = el("figure", "fx10-outcome-figure");
      const image = el("img");
      image.src = project.outcomeAsideFigure.src;
      image.alt = project.outcomeAsideFigure.alt || project.outcomeAsideFigure.caption || "";
      image.loading = "lazy";
      figure.append(image);
      if (project.outcomeAsideFigure.caption) figure.append(el("figcaption", "", project.outcomeAsideFigure.caption));
      outcome.append(figure);
    }
    if (project.videoAfterOutcome) appendVideoContent(outcome);
    if (project.outcomeFigures?.length) {
      const figurePair = el("div", "standard-section-figure-pair outcome-supplemental-figures");
      project.outcomeFigures.forEach((figureData) => {
        const figure = el("figure", "standard-section-paired-figure");
        if (figureData.type === "video") {
          const video = el("video");
          video.src = figureData.src;
          video.autoplay = figureData.autoplay !== false;
          video.loop = figureData.loop !== false;
          video.muted = true;
          video.playsInline = true;
          video.preload = "metadata";
          video.setAttribute("aria-label", figureData.label || figureData.caption || "");
          applyMediaPresentation(video, figureData);
          figure.append(video);
        } else {
          const image = el("img");
          image.src = figureData.src;
          image.alt = figureData.alt || figureData.caption || "";
          image.loading = "lazy";
          figure.append(image);
        }
        if (figureData.caption) figure.append(el("figcaption", "", figureData.caption));
        figurePair.append(figure);
      });
      outcome.append(figurePair);
    }
    if (project.links?.length) {
      const actions = el("div", "project-actions");
      project.links?.forEach((link) => actions.append(createLink(link)));
      outcome.append(actions);
    }
    root.append(outcome);
  }
  renderMoreProjects();
};

if (!root || !project) {
  if (root) root.append(el("p", "lede", "Portfolio item data could not be loaded."));
} else if (project.blocks) {
  renderBlockProject();
} else {
  renderStandardProject();
}
