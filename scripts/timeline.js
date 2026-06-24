(function () {
  const mount = document.querySelector(".timeline-wrap");
  if (!mount) return;

  const source = mount.dataset.source || "data/timeline.csv";
  const fallbackCsv = `type,group,company,title,start,end,date,logo,color
job,berkshire-grey,Berkshire Grey,Principal Mechanical R&D Engineer,2026-04-01,present,,logos/Berkshire Grey.png,#1D5FDB
job,berkshire-grey,Berkshire Grey,Senior Mechanical R&D Engineer,2024-10-01,2026-04-01,,logos/Berkshire Grey.png,#1D5FDB
job,markforged,Markforged,Research and Development Engineer II,2022-04-01,2024-09-01,,logos/Markforged.png,#111111
job,markforged,Markforged,Research and Development Engineer I,2021-06-01,2022-04-01,,logos/Markforged.png,#111111
job,siliconsynapse,NEU SiliconSynapse Lab,Graduate Research Assistant,2020-01-01,2021-06-01,,logos/SiliconSynapse Lab.png,#CC0000
job,morse,MORSE Corp,Mechanical Engineering Co-op,2019-01-01,2019-07-01,,logos/MORSE.png,#005EB8
job,irobot,iRobot,R&D Robotics Engineering Co-op,2018-01-01,2018-07-01,,logos/iRobot.png,#6DB33F
job,sikorsky,Sikorsky Aircraft,Propulsion Engineering Co-op,2017-01-01,2017-09-01,,logos/Sikorsky.png,#005EB8
event,patents,,Patents Submitted (BG End Effectors),,,2025-07-01,,
event,fx10,,FX10 Print Head Development,,,2023-06-01,,
event,masters,,M.S. Mechanical Engineering,,,2021-05-01,,
event,bachelors,,B.S. Mechanical Engineering,,,2019-12-01,,
event,enrolled,,Enrolled at Northeastern University,,,2015-09-01,,`;
  const pxPerYear = 92;
  const minHeight = 920;
  const padDays = 120;
  const dayMs = 24 * 60 * 60 * 1000;

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

  const centerTimeline = () => {
    const scroller = mount.closest(".timeline-scroll");
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
  };

  const render = (rows) => {
    const jobs = rows
      .filter((row) => row.type === "job")
      .map((row) => ({
        ...row,
        startDate: parseDate(row.start),
        endDate: parseDate(row.end),
        present: row.end.toLowerCase() === "present",
      }));

    const events = rows
      .filter((row) => row.type === "event")
      .map((row) => ({ ...row, eventDate: parseDate(row.date) }));

    const dates = [
      ...jobs.flatMap((job) => [job.startDate, job.endDate]),
      ...events.map((event) => event.eventDate),
    ];
    const minDate = new Date(Math.min(...dates) - padDays * dayMs);
    const maxDate = new Date(Math.max(...dates) + padDays * dayMs);
    const rangeMs = maxDate - minDate;
    const years = rangeMs / (365.2425 * dayMs);
    const timelineHeight = Math.max(minHeight, Math.round(years * pxPerYear));
    const topFor = (date) => ((maxDate - date) / rangeMs) * 100;

    mount.style.height = `${timelineHeight}px`;
    mount.innerHTML = '<div class="tl-line"></div>';

    mount.insertAdjacentHTML(
      "beforeend",
      `<div class="tl-year tl-year-top">Present</div>
      <div class="tl-year tl-year-bottom">2015</div>`
    );

    jobs.forEach((job) => {
      const top = topFor(job.endDate);
      const height = topFor(job.startDate) - top;
      const color = normalizeColor(job.color);
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-cylinder" style="--tl-color:${color};top:${top.toFixed(4)}%;height:${height.toFixed(4)}%"></div>`
      );
    });

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
      const roles = group.map((job) => `
        <div class="tl-role">
          <span class="tl-job-date">${formatDate(job.startDate)} - ${formatDate(job.present ? job.endDate : new Date(job.endDate - dayMs), job.present)}</span>
          <h3 class="tl-job-title">${escapeHtml(job.title)}</h3>
        </div>
      `).join("");

      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-job" style="--tl-color:${color};top:${topFor(center).toFixed(4)}%">
          <div class="tl-job-connector"></div>
          <div class="tl-job-content">
            <img class="tl-job-logo" src="${escapeHtml(primary.logo)}" alt="${escapeHtml(primary.company)} logo">
            <div class="tl-job-details">
              <p class="tl-job-company">${escapeHtml(primary.company)}</p>
              <div class="${group.length > 1 ? "tl-promotion" : "tl-role-single"}">${roles}</div>
            </div>
          </div>
        </div>`
      );
    });

    events.forEach((event) => {
      mount.insertAdjacentHTML(
        "beforeend",
        `<div class="tl-milestone" style="top:${topFor(event.eventDate).toFixed(4)}%">
          <div class="tl-milestone-content">
            <span class="tl-m-label">${escapeHtml(event.title)}</span>
            <span class="tl-m-year">${formatDate(event.eventDate)}</span>
          </div>
          <div class="tl-milestone-dot"></div>
        </div>`
      );
    });

    requestAnimationFrame(centerTimeline);
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

  window.addEventListener("resize", centerTimeline);
}());
