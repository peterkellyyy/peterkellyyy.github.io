(function () {
  const mount = document.querySelector(".timeline-wrap");
  if (!mount) return;

  const source = mount.dataset.source || "data/timeline.csv";
  const fallbackCsv = `type,group,company,title,start,end,date,logo,color,url,description,related,route_lane
job,berkshire-grey,Berkshire Grey,Principal Mechanical R&D Engineer,2026-04-01,present,,logos/Berkshire Grey.png,#1D5FDB,,"Leading R&D mechanical engineering for robotic manipulation, end effectors, and hardware for embodied intelligence.",,0
job,berkshire-grey,Berkshire Grey,Senior Mechanical R&D Engineer,2024-10-01,2026-04-01,,logos/Berkshire Grey.png,#1D5FDB,,"Developed and validated high-performance robotic mechanisms from early concepts through production-ready hardware.",,0
job,markforged,Markforged,Research and Development Engineer II,2022-04-01,2024-09-01,,logos/Markforged.png,#111111,,"Developed advanced additive-manufacturing hardware, reinforced-part processes, and next-generation mechanical systems.",,0
job,markforged,Markforged,Research and Development Engineer I,2021-06-01,2022-04-01,,logos/Markforged.png,#111111,,"Designed, prototyped, and tested mechanical subsystems supporting reinforced additive-manufacturing platforms.",,0
job,siliconsynapse,NEU SiliconSynapse Lab,Graduate Research Assistant,2020-01-01,2021-06-01,,logos/SiliconSynapse Lab.png,#93A7AC,,"Researched bio-inspired robotics, computational mechanism design, and legged robotic systems.",,0
job,morse,MORSE Corp,Mechanical Engineering Co-op,2019-01-01,2019-07-01,,logos/MORSE.png,#005EB8,,"Supported mechanical design, rapid prototyping, integration, and testing for advanced engineering programs.",,0
job,irobot,iRobot,R&D Robotics Engineering Co-op,2018-01-01,2018-07-01,,logos/iRobot.png,#6DB33F,,"Designed and tested robotic mechanisms and prototype hardware for consumer robotics R&D.",,1
job,sikorsky,Sikorsky Aircraft,Propulsion Engineering Co-op,2017-01-01,2017-09-01,,logos/Sikorsky.png,#005EB8,,"Supported propulsion-system mechanical engineering through design analysis, documentation, and hardware evaluation.",,0
patent,thermoset-injection,,Thermoset Injection into Fused Filament Fabrication Parts with Discontinuous and/or Continuous Reinforcement,,,2024-04-01,,,https://patents.google.com/patent/US12539664B2/en,,markforged:2022-04-01,8
patent,partial-rotation,,3D Printing with Partial Part Rotation and Reinforcement,,,2023-10-01,,,https://patents.google.com/patent/US20240140042A1/en,,markforged:2022-04-01,7
patent,filament-path,,Devices and Systems for Varying Filament Path Length,,,2023-09-21,,,https://patents.google.com/patent/US20240100772A1/en,,markforged:2022-04-01,6
publication,multiplanar,,Multiplanar Continuous Fiber Reinforcement in Additively Manufactured Parts via Co-Part Assembly,,,2023-05-01,,,https://www.emerald.com/rpj/article-pdf/29/11/64/2307484/rpj-12-2022-0415.pdf,,markforged:2022-04-01,5
publication,thermal-expansion,,Effects of Coefficient of Thermal Expansion and Moisture Absorption on the Dimensional Accuracy of Carbon-Reinforced 3D Printed Parts,,,2021-10-01,,,https://pmc.ncbi.nlm.nih.gov/articles/PMC8587952/pdf/polymers-13-03637.pdf,,markforged:2021-06-01,4
thesis,siliconsynapse,NEU SiliconSynapse Lab,"Design of a Thruster Assisted Bipedal Robot",,,2021-04-01,,,https://web.archive.org/web/20220826032004id_/https://repository.library.northeastern.edu/files/neu:bz60w8418/fulltext.pdf,"Designed and analyzed the Harpy thruster-assisted bipedal robot platform.",siliconsynapse:2020-01-01,4
event,masters,,M.S. Mechanical Engineering,,,2021-05-01,,,,,,markforged:3|siliconsynapse:5|default:3
publication,husky-carbon,,"Generative Design of NU's Husky Carbon, A Morpho-Functional, Legged Robot",,,2021-04-01,,,https://arxiv.org/pdf/2104.05834,,siliconsynapse:2020-01-01,4
publication,bio-inspired,,Computational Structure Design of a Bio-Inspired Armwing Mechanism,,,2020-07-01,,,https://par.nsf.gov/servlets/purl/10194913,,siliconsynapse:2020-01-01,3
event,bachelors,,B.S. Mechanical Engineering,,,2019-12-01,,,,,,2
event,enrolled,,Enrolled at Northeastern University,,,2015-09-01,,,,,,0`;
  const pxPerYear = 120;
  const minHeight = 1200;
  const padDays = 120;
  const dayMs = 24 * 60 * 60 * 1000;
  const desktopLaneOffset = 20;
  const desktopLanePitch = 14;
  const desktopCardClearance = 18;
  let cardResizeObserver;
  let layoutFrame;
  let traceAnimationFrame;
  let documentSettleTimer;
  let activeJob;

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
  const resolveRouteLane = (value, group) => {
    if (/^\d+$/.test(value)) return Number(value);
    const entries = value.split("|").map((entry) => entry.split(":"));
    const match = entries.find(([key]) => key === group)
      || entries.find(([key]) => key === "default");
    return match && /^\d+$/.test(match[1]) ? Number(match[1]) : 0;
  };
  const isMobileTimeline = () => window.matchMedia("(max-width: 620px)").matches;

  const centerTimeline = () => {
    const scroller = mount.closest(".timeline-scroll");
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
  };

  const fitTimelineToViewport = () => {
    const scroller = mount.closest(".timeline-scroll");
    if (!scroller) return;

    if (isMobileTimeline()) {
      mount.style.removeProperty("--timeline-scale");
      scroller.style.removeProperty("height");
      scroller.scrollLeft = 0;
      return;
    }

    mount.style.removeProperty("--timeline-scale");
    scroller.style.removeProperty("height");
    centerTimeline();
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

  const routeAllTraces = (elements) => {
    const layer = mount.querySelector(".tl-traces");
    if (!layer) return;
    layer.replaceChildren();
    layer.setAttribute("viewBox", `0 0 ${mount.clientWidth} ${mount.clientHeight}`);
    layer.setAttribute("preserveAspectRatio", "none");
    if (!elements.length) return;

    const mountRect = mount.getBoundingClientRect();
    const mobile = isMobileTimeline();
    const scale = Number(getComputedStyle(mount).getPropertyValue("--timeline-scale")) || 1;
    const centerX = mobile ? 28 : mount.clientWidth / 2;
    const activeGroup = mount.dataset.activeGroup || "";
    const routes = elements.map((element) => {
      const isJob = element.classList.contains("tl-job");
      const isLeft = mobile ? false : (!isJob || element.classList.contains("tl-job-left"));
      const card = element.querySelector(isJob ? ".tl-job-content" : ".tl-milestone-content");
      const cardRect = card.getBoundingClientRect();
      const cardX = ((isLeft ? cardRect.right : cardRect.left) - mountRect.left) / scale;
      const cardY = (cardRect.top + cardRect.height / 2 - mountRect.top) / scale;
      const anchorY = Number(element.dataset.anchorRatio) * mount.clientHeight;
      const lane = resolveRouteLane(element.dataset.routeLane || "", activeGroup);
      const styles = getComputedStyle(element);
      const color = isJob
        ? styles.getPropertyValue("--tl-color").trim()
        : styles.getPropertyValue("--trace-color").trim();
      return { element, cardX, cardY, anchorY, lane, isJob, isLeft, color };
    });
    const lanePitch = mobile ? 3 : desktopLanePitch;
    const laneOffset = mobile ? 6 : desktopLaneOffset;

    routes.forEach((route) => {
      const direction = route.isLeft ? -1 : 1;
      const laneX = centerX + direction * (laneOffset + route.lane * lanePitch);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", roundedPath([
        { x: route.cardX, y: route.cardY },
        { x: laneX, y: route.cardY },
        { x: laneX, y: route.anchorY },
        { x: centerX, y: route.anchorY },
      ], 6));
      const traceType = route.isJob ? "job" : (route.element.dataset.documentType || "event");
      path.setAttribute("class", `tl-trace tl-trace-${traceType}`);
      path.setAttribute("stroke", route.color || "#d9dde3");
      layer.appendChild(path);

      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", centerX);
      dot.setAttribute("cy", route.anchorY);
      dot.setAttribute("r", "6");
      dot.setAttribute("class", `tl-trace-dot tl-trace-dot-${traceType}`);
      dot.setAttribute("stroke", route.color || "#d9dde3");
      layer.appendChild(dot);
    });
  };

  const animateTraceRouting = () => {
    const startedAt = performance.now();
    if (traceAnimationFrame) cancelAnimationFrame(traceAnimationFrame);

    const update = (now) => {
      routeAllTraces([
        ...mount.querySelectorAll(".tl-job"),
        ...mount.querySelectorAll(".tl-milestone-svg:not([hidden])"),
      ]);
      if (now - startedAt < 430) {
        traceAnimationFrame = requestAnimationFrame(update);
      } else {
        traceAnimationFrame = null;
      }
    };

    traceAnimationFrame = requestAnimationFrame(update);
  };

  const scheduleTimelineLayout = () => {
    if (layoutFrame) cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(() => {
      layoutFrame = null;
      layoutTimeline();
    });
  };

  const layoutTimeline = () => {
    const mobile = isMobileTimeline();
    const rightItems = [...mount.querySelectorAll(".tl-job:not(.tl-job-left)")];
    const masters = mount.querySelector('.tl-milestone[data-event-key="masters"]');
    const routeMasters = ["markforged", "siliconsynapse"].includes(mount.dataset.activeGroup);
    const straightItems = [
      ...mount.querySelectorAll(".tl-milestone-straight:not([hidden])"),
      ...(masters && !routeMasters ? [masters] : []),
    ];
    const leftItems = [
      ...mount.querySelectorAll('.tl-milestone:not([hidden]):not(.tl-milestone-straight):not([data-event-key="masters"]), .tl-job-left'),
      ...(masters && routeMasters ? [masters] : []),
    ];
    const routedMilestones = [...leftItems, ...straightItems]
      .filter((item) => item.matches(".tl-milestone-svg:not([hidden])"));
    const maxLane = routedMilestones.reduce((maximum, item) =>
      Math.max(maximum, resolveRouteLane(item.dataset.routeLane || "", mount.dataset.activeGroup || "")), 0);
    const traceGutter = desktopLaneOffset + maxLane * desktopLanePitch + desktopCardClearance;
    mount.style.setProperty("--document-trace-gutter", `${Math.max(72, traceGutter)}px`);
    const requiredHeight = (items) =>
      items.reduce((total, element) => total + element.offsetHeight, 0)
      + Math.max(0, items.length - 1) * 24
      + 36;
    const baseHeight = Number(mount.dataset.baseHeight);

    if (!baseHeight) {
      fitTimelineToViewport();
      return;
    }

    if (mobile) {
      const mobileItems = [
        ...mount.querySelectorAll(".tl-job"),
        ...mount.querySelectorAll(".tl-milestone:not([hidden])"),
      ];
      mount.style.height = `${Math.max(baseHeight, requiredHeight(mobileItems))}px`;
      placeTimelineItems(mobileItems, 18);
      routeAllTraces(mobileItems);
    } else {
      mount.style.height = `${Math.max(baseHeight, requiredHeight(rightItems), requiredHeight(leftItems))}px`;
      placeTimelineItems(rightItems);
      placeTimelineItems(leftItems, 24);
      straightItems.forEach((item) => {
        item.style.top = `${Number(item.dataset.anchorRatio) * mount.clientHeight}px`;
        item.style.setProperty("--anchor-offset", "0px");
        item.style.setProperty("--connector-top", "0px");
        item.style.setProperty("--connector-height", "0px");
      });
      routeAllTraces([...rightItems, ...leftItems, ...straightItems]);
    }
    fitTimelineToViewport();
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
      .filter((row) => row.type === "publication" || row.type === "patent" || row.type === "thesis")
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
      const hasPresentRole = Boolean(primary.present);
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
        <div class="tl-job tl-job-svg${sideClass}" data-group="${escapeHtml(primary.group)}" data-route-lane="${escapeHtml(primary.route_lane || "0")}" data-anchor-ratio="${anchorRatio.toFixed(6)}" style="--tl-color:${color};top:${topFor(center).toFixed(4)}%">
          <div class="tl-job-content">
            <button class="tl-job-toggle" type="button" aria-expanded="false">
              <span class="tl-job-summary">
                <img class="tl-job-logo" src="${escapeHtml(primary.logo)}" alt="">
                <span class="tl-job-details">
                  <span class="tl-job-company-row">
                    <span class="tl-job-company">${escapeHtml(primary.company)}</span>
                    ${hasPresentRole ? '<span class="tl-job-present" aria-label="Present">Present</span>' : ""}
                  </span>
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
      const isDocument = event.type === "publication" || event.type === "patent" || event.type === "thesis";
      const relatedGroup = isDocument ? event.related.split(":")[0] : "";
      const isStraight = !isDocument && event.group === "enrolled";
      const isEducation = !isDocument && (event.group === "masters" || event.group === "bachelors" || event.group === "enrolled");
      const educationIcon = event.group === "enrolled" ? "logos/Northeastern Monogram.svg" : "icons/Graduation Cap.png";
      const eventType = event.type === "patent" ? "Patent" : event.type === "thesis" ? "Thesis" : "Publication";
      const url = normalizeUrl(event.url);
      const contentOpen = isEducation
        ? `<div class="tl-milestone-content tl-milestone-education-content"><img class="tl-milestone-icon" src="${escapeHtml(educationIcon)}" alt="" aria-hidden="true"><div class="tl-milestone-education-copy">`
        : url
        ? `<a class="tl-milestone-content tl-milestone-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">`
        : '<div class="tl-milestone-content">';
      const contentClose = isEducation ? "</div></div>" : (url ? "</a>" : "</div>");
      const anchorRatio = topFor(event.eventDate) / 100;
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-milestone tl-milestone-svg${isDocument ? ` tl-milestone-document tl-milestone-${event.type}` : ""}${isStraight ? " tl-milestone-straight" : ""}${isEducation ? " tl-milestone-education" : ""}" ${isDocument ? `hidden data-document-type="${event.type}" data-related-group="${escapeHtml(relatedGroup)}"` : `data-event-key="${escapeHtml(event.group)}"`} data-route-lane="${escapeHtml(event.route_lane || "0")}" data-anchor-ratio="${anchorRatio.toFixed(6)}" style="top:${topFor(event.eventDate).toFixed(4)}%">
          ${contentOpen}
            ${isDocument ? `<span class="tl-m-type">${eventType}</span>` : ""}
            <span class="tl-m-label">${escapeHtml(event.title)}</span>
            ${isEducation && event.group !== "enrolled" ? '<span class="tl-m-school">Northeastern University</span>' : ""}
            <span class="tl-m-year">${formatDate(event.eventDate)}</span>
          ${contentClose}
        </div>`
      );
    });

    scheduleTimelineLayout();
    if (document.fonts) document.fonts.ready.then(scheduleTimelineLayout);
    if ("ResizeObserver" in window) {
      if (cardResizeObserver) cardResizeObserver.disconnect();
      cardResizeObserver = new ResizeObserver(scheduleTimelineLayout);
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

  const applyActiveJob = (activeJob) => {
    window.clearTimeout(documentSettleTimer);
    delete mount.dataset.documentsSettling;

    mount.querySelectorAll(".tl-job.is-open").forEach((job) => {
      job.classList.remove("is-open");
      job.querySelector(".tl-job-toggle").setAttribute("aria-expanded", "false");
      job.querySelector(".tl-job-expanded").setAttribute("aria-hidden", "true");
    });

    mount.querySelectorAll(".tl-milestone-document[data-related-group]").forEach((milestone) => {
      milestone.hidden = true;
    });
    delete mount.dataset.activeGroup;

    if (activeJob) {
      activeJob.classList.add("is-open");
      const toggle = activeJob.querySelector(".tl-job-toggle");
      toggle.setAttribute("aria-expanded", "true");
      activeJob.querySelector(".tl-job-expanded").setAttribute("aria-hidden", "false");
      const group = activeJob.dataset.group;
      mount.dataset.activeGroup = group;
      let visibleDocumentCount = 0;
      mount.querySelectorAll(".tl-milestone-document[data-related-group]")
        .forEach((milestone) => {
          const isRelated = milestone.dataset.relatedGroup === group;
          milestone.hidden = !isRelated;
          if (isRelated) visibleDocumentCount += 1;
        });
      if (visibleDocumentCount) {
        mount.dataset.documentsSettling = "true";
        documentSettleTimer = window.setTimeout(() => {
          delete mount.dataset.documentsSettling;
        }, 520);
      }
    }

    scheduleTimelineLayout();
    animateTraceRouting();
  };

  const setOpenJob = (selectedJob) => {
    if (activeJob === selectedJob) return;
    activeJob = selectedJob;
    applyActiveJob(activeJob);
  };

  window.addEventListener("resize", scheduleTimelineLayout);
  mount.addEventListener("pointerover", (event) => {
    const card = event.target.closest(".tl-job-content");
    if (!card || !mount.contains(card)) return;
    if (card.contains(event.relatedTarget)) return;

    setOpenJob(card.closest(".tl-job"));
  });

  mount.addEventListener("focusin", (event) => {
    const card = event.target.closest(".tl-job-content");
    if (!card) return;

    setOpenJob(card.closest(".tl-job"));
  });

  mount.addEventListener("click", (event) => {
    if (mount.dataset.documentsSettling !== "true") return;
    const documentLink = event.target.closest(".tl-milestone-document .tl-milestone-link");
    if (!documentLink || !mount.contains(documentLink)) return;

    event.preventDefault();
    event.stopPropagation();
  }, true);

  document.querySelectorAll("[data-timeline-group]").forEach((logo) => {
    logo.addEventListener("click", () => {
      const group = logo.dataset.timelineGroup;
      const selectedJob = mount.querySelector(`.tl-job[data-group="${group}"]`);
      if (!selectedJob) return;

      setOpenJob(selectedJob);
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
