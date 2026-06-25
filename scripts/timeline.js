(function () {
  const mount = document.querySelector(".timeline-wrap");
  if (!mount) return;

  const source = mount.dataset.source || "data/timeline.csv";
  const fallbackCsv = `type,group,company,title,start,end,date,logo,color,url,description,related
job,berkshire-grey,Berkshire Grey,Principal Mechanical R&D Engineer,2026-04-01,present,,logos/Berkshire Grey.png,#1D5FDB,,"Leading R&D mechanical engineering for robotic manipulation, end effectors, and hardware for embodied intelligence.",
job,berkshire-grey,Berkshire Grey,Senior Mechanical R&D Engineer,2024-10-01,2026-04-01,,logos/Berkshire Grey.png,#1D5FDB,,"Developed and validated high-performance robotic mechanisms from early concepts through production-ready hardware.",
job,markforged,Markforged,Research and Development Engineer II,2022-04-01,2024-09-01,,logos/Markforged.png,#111111,,"Developed advanced additive-manufacturing hardware, reinforced-part processes, and next-generation mechanical systems.",
job,markforged,Markforged,Research and Development Engineer I,2021-06-01,2022-04-01,,logos/Markforged.png,#111111,,"Designed, prototyped, and tested mechanical subsystems supporting reinforced additive-manufacturing platforms.",
job,siliconsynapse,NEU SiliconSynapse Lab,Graduate Research Assistant,2020-01-01,2021-06-01,,logos/SiliconSynapse Lab.png,#93A7AC,,"Researched bio-inspired robotics, computational mechanism design, and legged robotic systems.",
job,morse,MORSE Corp,Mechanical Engineering Co-op,2019-01-01,2019-07-01,,logos/MORSE.png,#005EB8,,"Supported mechanical design, rapid prototyping, integration, and testing for advanced engineering programs.",
job,irobot,iRobot,R&D Robotics Engineering Co-op,2018-01-01,2018-07-01,,logos/iRobot.png,#6DB33F,,"Designed and tested robotic mechanisms and prototype hardware for consumer robotics R&D.",
job,sikorsky,Sikorsky Aircraft,Propulsion Engineering Co-op,2017-01-01,2017-09-01,,logos/Sikorsky.png,#005EB8,,"Supported propulsion-system mechanical engineering through design analysis, documentation, and hardware evaluation.",
patent,thermoset-injection,,Thermoset Injection into Fused Filament Fabrication Parts with Discontinuous and/or Continuous Reinforcement,,,2024-04-01,,,https://patents.google.com/patent/US12539664B2/en,,markforged:2022-04-01
patent,partial-rotation,,3D Printing with Partial Part Rotation and Reinforcement,,,2023-10-01,,,https://patents.google.com/patent/US20240140042A1/en,,markforged:2022-04-01
patent,filament-path,,Devices and Systems for Varying Filament Path Length,,,2023-09-21,,,https://patents.google.com/patent/US20240100772A1/en,,markforged:2022-04-01
publication,multiplanar,,Multiplanar Continuous Fiber Reinforcement,,,2023-05-01,,,,,markforged:2022-04-01
publication,thermal-expansion,,Effects of Coefficient of Thermal Expansion,,,2021-10-01,,,,,markforged:2021-06-01
event,masters,,M.S. Mechanical Engineering,,,2021-05-01,,,,,
publication,husky-carbon,,"Generative Design of NU's Husky Carbon, A Morpho-Functional, Legged Robot",,,2021-04-01,,,,,siliconsynapse:2020-01-01
publication,bio-inspired,,Computational Structure Design of a Bio-Inspired Armwing Mechanism,,,2020-07-01,,,,,siliconsynapse:2020-01-01
event,bachelors,,B.S. Mechanical Engineering,,,2019-12-01,,,,,
event,enrolled,,Enrolled at Northeastern University,,,2015-09-01,,,,,`;
  const pxPerYear = 120;
  const minHeight = 1200;
  const padDays = 120;
  const dayMs = 24 * 60 * 60 * 1000;
  let cardResizeObserver;

  const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const next = text[i + 1];

      if (char === '"' && quoted && next === '"') {
        cell += char;
        i += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        row.push(cell);
        cell = "";
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") i += 1;
        row.push(cell);
        if (row.some((value) => value.trim())) rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }

    if (cell || row.length) {
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
    }

    const headers = rows.shift().map((header) => header.trim());
    return rows.map((values) =>
      Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").trim()]))
    );
  };

  const parseDate = (value) => {
    if (!value || value.toLowerCase() === "present") return new Date();
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day || 1);
  };

  const formatDate = (date, present) => {
    if (present) return "Present";
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const escapeHtml = (value) =>
    value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char]));

  const normalizeColor = (value) => (/^#[0-9a-f]{6}$/i.test(value) ? value : "#0f766e");
  const normalizeUrl = (value) => (/^https:\/\/[^\s]+$/i.test(value) ? value : "");

  const centerTimeline = () => {
    const scroller = mount.closest(".timeline-scroll");
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
  };

  const placeTimelineItems = (elements, gap = 18) => {
    const edgePadding = 18;
    const items = elements
      .map((element) => ({
        element,
        desiredCenter: Number(element.dataset.anchorRatio) * mount.clientHeight,
        height: element.offsetHeight,
      }))
      .sort((a, b) => a.desiredCenter - b.desiredCenter);

    items.forEach((item, index) => {
      const minimumCenter = index === 0
        ? edgePadding + item.height / 2
        : items[index - 1].placedCenter + items[index - 1].height / 2 + gap + item.height / 2;
      item.placedCenter = Math.max(item.desiredCenter, minimumCenter);
    });

    for (let index = items.length - 1; index >= 0; index -= 1) {
      const item = items[index];
      const maximumCenter = index === items.length - 1
        ? mount.clientHeight - edgePadding - item.height / 2
        : items[index + 1].placedCenter - items[index + 1].height / 2 - gap - item.height / 2;
      item.placedCenter = Math.min(item.placedCenter, maximumCenter);
    }

    items.forEach((item) => {
      const anchorOffset = item.desiredCenter - item.placedCenter;
      item.element.style.top = `${item.placedCenter}px`;
      item.element.style.setProperty("--anchor-offset", `${anchorOffset}px`);
      item.element.style.setProperty("--connector-top", `${Math.min(0, anchorOffset)}px`);
      item.element.style.setProperty("--connector-height", `${Math.abs(anchorOffset)}px`);
    });
  };

  const segmentsIntersect = (first, second) => {
    const [a, b] = first;
    const [c, d] = second;
    const firstVertical = a.x === b.x;
    const secondVertical = c.x === d.x;

    if (firstVertical === secondVertical) return false;

    const vertical = firstVertical ? first : second;
    const horizontal = firstVertical ? second : first;
    const x = vertical[0].x;
    const y = horizontal[0].y;
    const withinVertical = y > Math.min(vertical[0].y, vertical[1].y)
      && y < Math.max(vertical[0].y, vertical[1].y);
    const withinHorizontal = x > Math.min(horizontal[0].x, horizontal[1].x)
      && x < Math.max(horizontal[0].x, horizontal[1].x);

    return withinVertical && withinHorizontal;
  };

  const segmentClearance = (first, second) => {
    const [a, b] = first;
    const [c, d] = second;
    const firstVertical = a.x === b.x;
    const secondVertical = c.x === d.x;

    if (firstVertical && secondVertical) {
      const overlap = Math.min(Math.max(a.y, b.y), Math.max(c.y, d.y))
        - Math.max(Math.min(a.y, b.y), Math.min(c.y, d.y));
      return overlap > 0 ? Math.abs(a.x - c.x) : Number.POSITIVE_INFINITY;
    }

    if (!firstVertical && !secondVertical) {
      const overlap = Math.min(Math.max(a.x, b.x), Math.max(c.x, d.x))
        - Math.max(Math.min(a.x, b.x), Math.min(c.x, d.x));
      return overlap > 0 ? Math.abs(a.y - c.y) : Number.POSITIVE_INFINITY;
    }

    const vertical = firstVertical ? first : second;
    const horizontal = firstVertical ? second : first;
    const xDistance = Math.max(
      Math.min(horizontal[0].x, horizontal[1].x) - vertical[0].x,
      vertical[0].x - Math.max(horizontal[0].x, horizontal[1].x),
      0
    );
    const yDistance = Math.max(
      Math.min(vertical[0].y, vertical[1].y) - horizontal[0].y,
      horizontal[0].y - Math.max(vertical[0].y, vertical[1].y),
      0
    );
    return Math.hypot(xDistance, yDistance);
  };

  const permutations = (values) => {
    if (values.length <= 1) return [values];
    return values.flatMap((value, index) =>
      permutations([...values.slice(0, index), ...values.slice(index + 1)])
        .map((rest) => [value, ...rest])
    );
  };

  const roundedPath = (points, radius = 7) => {
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let index = 1; index < points.length - 1; index += 1) {
      const previous = points[index - 1];
      const current = points[index];
      const next = points[index + 1];
      const incoming = Math.min(radius, Math.hypot(current.x - previous.x, current.y - previous.y) / 2);
      const outgoing = Math.min(radius, Math.hypot(next.x - current.x, next.y - current.y) / 2);
      const before = {
        x: current.x + Math.sign(previous.x - current.x) * incoming,
        y: current.y + Math.sign(previous.y - current.y) * incoming,
      };
      const after = {
        x: current.x + Math.sign(next.x - current.x) * outgoing,
        y: current.y + Math.sign(next.y - current.y) * outgoing,
      };
      path += ` L ${before.x} ${before.y} Q ${current.x} ${current.y} ${after.x} ${after.y}`;
    }

    const last = points[points.length - 1];
    return `${path} L ${last.x} ${last.y}`;
  };

  const routeDocumentTraces = (documents) => {
    const layer = mount.querySelector(".tl-traces");
    if (!layer) return;
    layer.replaceChildren();
    layer.setAttribute("viewBox", `0 0 ${mount.clientWidth} ${mount.clientHeight}`);
    layer.setAttribute("preserveAspectRatio", "none");
    if (!documents.length) return;

    const mountRect = mount.getBoundingClientRect();
    const centerX = mount.clientWidth / 2;
    const routes = documents.map((element) => {
      const cardRect = element.querySelector(".tl-milestone-content").getBoundingClientRect();
      const cardX = cardRect.right - mountRect.left;
      const cardY = cardRect.top + cardRect.height / 2 - mountRect.top;
      const anchorY = Number(element.dataset.anchorRatio) * mount.clientHeight;
      return { element, cardX, cardY, anchorY };
    });
    const lanePitch = 16;
    const nearestLane = centerX - 30;
    const idealFarthestLane = nearestLane - (routes.length - 1) * lanePitch;
    const cardClearance = Math.max(...routes.map((route) => route.cardX)) + 20;
    const farthestLane = Math.max(cardClearance, idealFarthestLane);
    const actualPitch = routes.length > 1
      ? (nearestLane - farthestLane) / (routes.length - 1)
      : 0;
    const lanes = routes.map((_, index) => nearestLane - index * actualPitch);
    let best = { score: Number.POSITIVE_INFINITY, lanes };

    permutations(lanes).forEach((candidate) => {
      const routeSegments = routes.map((route, index) => [
        [{ x: route.cardX, y: route.cardY }, { x: candidate[index], y: route.cardY }],
        [{ x: candidate[index], y: route.cardY }, { x: candidate[index], y: route.anchorY }],
        [{ x: candidate[index], y: route.anchorY }, { x: centerX, y: route.anchorY }],
      ]);
      let score = 0;

      for (let first = 0; first < routeSegments.length; first += 1) {
        for (let second = first + 1; second < routeSegments.length; second += 1) {
          routeSegments[first].forEach((a) => {
            routeSegments[second].forEach((b) => {
              if (segmentsIntersect(a, b)) score += 1000;
              const clearance = segmentClearance(a, b);
              if (clearance < 14) score += (14 - clearance) * 0.2;
            });
          });
        }
      }

      candidate.forEach((lane, index) => {
        score += Math.abs(lane - lanes[index]) * 0.002;
      });

      if (score < best.score) best = { score, lanes: candidate };
    });

    routes.forEach((route, index) => {
      const laneX = best.lanes[index];
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", roundedPath([
        { x: route.cardX, y: route.cardY },
        { x: laneX, y: route.cardY },
        { x: laneX, y: route.anchorY },
        { x: centerX, y: route.anchorY },
      ]));
      path.setAttribute("class", `tl-trace tl-trace-${route.element.dataset.documentType}`);
      layer.appendChild(path);
    });
  };

  const layoutTimeline = () => {
    const rightItems = [...mount.querySelectorAll(".tl-job:not(.tl-job-left)")];
    const straightItems = [...mount.querySelectorAll(".tl-milestone-straight:not([hidden])")];
    const leftItems = [...mount.querySelectorAll(".tl-milestone:not([hidden]):not(.tl-milestone-straight), .tl-job-left")];
    const visibleDocuments = [...mount.querySelectorAll(".tl-milestone-document:not([hidden])")]
      .sort((a, b) => Number(a.dataset.anchorRatio) - Number(b.dataset.anchorRatio));
    const requiredHeight = (items) =>
      items.reduce((total, element) => total + element.offsetHeight, 0)
      + Math.max(0, items.length - 1) * 24
      + 36;
    const baseHeight = Number(mount.dataset.baseHeight);

    if (!baseHeight) {
      centerTimeline();
      return;
    }

    mount.style.height = `${Math.max(baseHeight, requiredHeight(rightItems), requiredHeight(leftItems))}px`;
    placeTimelineItems(rightItems);
    placeTimelineItems(leftItems, 24);
    straightItems.forEach((item) => {
      item.style.top = `${Number(item.dataset.anchorRatio) * mount.clientHeight}px`;
      item.style.setProperty("--anchor-offset", "0px");
      item.style.setProperty("--connector-top", "0px");
      item.style.setProperty("--connector-height", "0px");
    });
    routeDocumentTraces(visibleDocuments);
    centerTimeline();
  };

  const render = (rows) => {
    const currentYear = new Date().getFullYear();
    const jobs = rows
      .filter((row) => row.type === "job")
      .map((row) => ({
        ...row,
        startDate: parseDate(row.start),
        endDate: parseDate(row.end),
        present: row.end.toLowerCase() === "present",
      }));

    const documents = rows
      .filter((row) => row.type === "publication" || row.type === "patent")
      .map((row) => ({ ...row, eventDate: parseDate(row.date) }));

    const events = rows
      .filter((row) => row.type === "event")
      .map((row) => ({ ...row, eventDate: parseDate(row.date) }));

    const dates = [
      ...jobs.flatMap((job) => [job.startDate, job.endDate]),
      ...events.map((event) => event.eventDate),
      ...documents.map((document) => document.eventDate),
    ];
    const minDate = new Date(Math.min(...dates) - padDays * dayMs);
    const maxDate = new Date(Math.max(...dates) + padDays * dayMs);
    const rangeMs = maxDate - minDate;
    const years = rangeMs / (365.2425 * dayMs);
    const timelineHeight = Math.max(minHeight, Math.round(years * pxPerYear));
    const topFor = (date) => ((maxDate - date) / rangeMs) * 100;

    mount.style.height = `${timelineHeight}px`;
    mount.dataset.baseHeight = timelineHeight;
    mount.innerHTML = '<div class="tl-line"></div><svg class="tl-traces" aria-hidden="true"></svg>';

    mount.insertAdjacentHTML(
      "beforeend",
      `<div class="tl-year tl-year-top">${currentYear}</div>
      <div class="tl-year tl-year-bottom">2015</div>`
    );

    const groupedJobs = jobs.reduce((groups, job) => {
      groups[job.group] = groups[job.group] || [];
      groups[job.group].push(job);
      return groups;
    }, {});

    Object.values(groupedJobs).forEach((group) => {
      group.sort((a, b) => b.startDate - a.startDate);
      const start = new Date(Math.min(...group.map((job) => job.startDate)));
      const end = new Date(Math.max(...group.map((job) => job.endDate)));
      const center = new Date((start.getTime() + end.getTime()) / 2);
      const primary = group[0];
      const color = normalizeColor(primary.color);
      const sideClass = primary.group === "irobot" ? " tl-job-left" : "";
      const cylinderTop = topFor(end);
      const cylinderHeight = topFor(start) - cylinderTop;
      const promotionMarkers = group.slice(0, -1).map((job) =>
        `<span class="tl-promotion-marker" style="--tl-color:${color};top:${topFor(job.startDate).toFixed(4)}%" aria-hidden="true"></span>`
      ).join("");
      const roles = group.map((job) => `
        <div class="tl-role">
          <span class="tl-job-date">${formatDate(job.startDate)} - ${formatDate(job.present ? job.endDate : new Date(job.endDate - dayMs), job.present)}</span>
          <h3 class="tl-job-title">${escapeHtml(job.title)}</h3>
        </div>
      `).join("");
      const description = `
        <span class="tl-role-description">
          <span class="tl-role-description-copy">${escapeHtml(primary.description)}</span>
        </span>`;
      const anchorRatio = topFor(center) / 100;

      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-cylinder" style="--tl-color:${color};top:${cylinderTop.toFixed(4)}%;height:${cylinderHeight.toFixed(4)}%"></div>
        ${promotionMarkers}
        <div class="tl-job${sideClass}" data-group="${escapeHtml(primary.group)}" data-anchor-ratio="${anchorRatio.toFixed(6)}" style="--tl-color:${color};top:${topFor(center).toFixed(4)}%">
          <div class="tl-job-connector"></div>
          <div class="tl-job-dot"></div>
          <div class="tl-job-content">
            <button class="tl-job-toggle" type="button" aria-expanded="false">
              <span class="tl-job-summary">
                <img class="tl-job-logo" src="${escapeHtml(primary.logo)}" alt="">
                <span class="tl-job-details">
                  <span class="tl-job-company">${escapeHtml(primary.company)}</span>
                  <span class="${group.length > 1 ? "tl-promotion" : "tl-role-single"}">${roles}</span>
                </span>
                <span class="tl-role-toggle" aria-hidden="true"></span>
              </span>
              <span class="tl-job-expanded" aria-hidden="true">
                <span class="tl-job-expanded-inner">${description}</span>
              </span>
            </button>
          </div>
        </div>`
      );
    });

    [...events, ...documents].forEach((event) => {
      const isDocument = event.type === "publication" || event.type === "patent";
      const relatedGroup = isDocument ? event.related.split(":")[0] : "";
      const isStraight = !isDocument && event.group === "enrolled";
      const eventType = event.type === "patent" ? "Patent" : "Publication";
      const url = normalizeUrl(event.url);
      const contentOpen = url
        ? `<a class="tl-milestone-content tl-milestone-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">`
        : '<div class="tl-milestone-content">';
      const contentClose = url ? "</a>" : "</div>";
      const anchorRatio = topFor(event.eventDate) / 100;
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-milestone${isDocument ? ` tl-milestone-document tl-milestone-${event.type}` : ""}${isStraight ? " tl-milestone-straight" : ""}" ${isDocument ? `hidden data-document-type="${event.type}" data-related-group="${escapeHtml(relatedGroup)}"` : `data-event-key="${escapeHtml(event.group)}"`} data-anchor-ratio="${anchorRatio.toFixed(6)}" style="top:${topFor(event.eventDate).toFixed(4)}%">
          ${contentOpen}
            ${isDocument ? `<span class="tl-m-type">${eventType}</span>` : ""}
            <span class="tl-m-label">${escapeHtml(event.title)}</span>
            <span class="tl-m-year">${formatDate(event.eventDate)}</span>
          ${contentClose}
          <div class="tl-milestone-dot"></div>
        </div>`
      );
    });

    requestAnimationFrame(layoutTimeline);
    if (document.fonts) document.fonts.ready.then(layoutTimeline);
    if ("ResizeObserver" in window) {
      if (cardResizeObserver) cardResizeObserver.disconnect();
      cardResizeObserver = new ResizeObserver(() => requestAnimationFrame(layoutTimeline));
      mount.querySelectorAll(".tl-job-content").forEach((card) => cardResizeObserver.observe(card));
    }

    const nextDay = new Date();
    nextDay.setHours(24, 0, 5, 0);
    window.setTimeout(() => render(rows), nextDay - new Date());
  };

  fetch(source)
    .then((response) => {
      if (!response.ok) throw new Error(`Timeline source failed: ${response.status}`);
      return response.text();
    })
    .then((text) => render(parseCsv(text)))
    .catch(() => {
      render(parseCsv(fallbackCsv));
    });

  const setOpenJob = (selectedJob, forceOpen = false) => {
    const toggle = selectedJob.querySelector(".tl-job-toggle");
    const opening = forceOpen || !selectedJob.classList.contains("is-open");

    mount.querySelectorAll(".tl-job.is-open").forEach((job) => {
      job.classList.remove("is-open");
      job.querySelector(".tl-job-toggle").setAttribute("aria-expanded", "false");
      job.querySelector(".tl-job-expanded").setAttribute("aria-hidden", "true");
    });

    mount.querySelectorAll(".tl-milestone-document[data-related-group]").forEach((milestone) => {
      milestone.hidden = true;
    });
    delete mount.dataset.activeGroup;

    if (opening) {
      selectedJob.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      selectedJob.querySelector(".tl-job-expanded").setAttribute("aria-hidden", "false");
      const group = selectedJob.dataset.group;
      mount.dataset.activeGroup = group;
      mount.querySelectorAll(`.tl-milestone-document[data-related-group="${group}"]`).forEach((milestone) => {
        milestone.hidden = false;
      });
    }

    requestAnimationFrame(layoutTimeline);
  };

  window.addEventListener("resize", layoutTimeline);
  mount.addEventListener("click", (event) => {
    const card = event.target.closest(".tl-job-content");
    if (!card) return;

    setOpenJob(card.closest(".tl-job"));
  });

  document.querySelectorAll("[data-timeline-group]").forEach((logo) => {
    logo.addEventListener("click", () => {
      const group = logo.dataset.timelineGroup;
      const selectedJob = mount.querySelector(`.tl-job[data-group="${group}"]`);
      if (!selectedJob) return;

      setOpenJob(selectedJob, true);
      window.setTimeout(() => {
        selectedJob.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 380);
    });
  });
}());
