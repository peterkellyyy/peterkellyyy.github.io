(function () {
  document.documentElement.classList.add("page-transition-ready");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const getHashTarget = (hash) => {
    if (!hash || hash === "#") return null;

    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (error) {
      return document.getElementById(hash.slice(1));
    }
  };

  const scrollToHash = (hash, behavior) => {
    const target = getHashTarget(hash);
    if (!target) return false;

    target.scrollIntoView({ behavior, block: "start" });
    return true;
  };

  const finishHashNavigation = () => {
    if (!window.location.hash) {
      document.documentElement.classList.remove("hash-anchor-pending");
      return;
    }

    window.requestAnimationFrame(() => {
      scrollToHash(window.location.hash, "auto");
      window.requestAnimationFrame(() => {
        document.documentElement.classList.remove("hash-anchor-pending");
      });
    });
  };

  window.addEventListener("pageshow", () => {
    document.documentElement.classList.remove("is-leaving");
    finishHashNavigation();
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const url = new URL(link.href, window.location.href);
    const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const opensElsewhere = link.target && link.target !== "_self";
    const samePageHash = url.pathname === window.location.pathname
      && url.search === window.location.search
      && url.hash;

    if (isModified || opensElsewhere || link.hasAttribute("download") || url.origin !== window.location.origin) {
      return;
    }

    if (samePageHash) {
      event.preventDefault();

      if (scrollToHash(url.hash, prefersReducedMotion ? "auto" : "smooth")) {
        window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      }

      return;
    }

    event.preventDefault();
    document.documentElement.classList.add("is-leaving");
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 180);
  });
}());
