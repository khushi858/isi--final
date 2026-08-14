// =========================================================
// ISI — site interactions (homepage, category & product pages)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Hero image carousel ---------- */
  const slides = document.querySelectorAll(".hero-slide");
  const dotsWrap = document.getElementById("heroDots");
  let current = 0;
  let heroTimer;

  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("aria-label", "Show slide " + (i + 1));
      dot.addEventListener("click", () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });
  }
  const dots = dotsWrap ? dotsWrap.querySelectorAll("button") : [];

  function goToSlide(i) {
    if (!slides.length) return;
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
    resetHeroTimer();
  }
  function nextSlide() {
    goToSlide(current + 1);
  }
  function prevSlide() {
    goToSlide(current - 1);
  }
  function resetHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 4800);
  }
  if (slides.length) resetHeroTimer();

  const arrowNext = document.getElementById("heroNext");
  const arrowPrev = document.getElementById("heroPrev");
  if (arrowNext) arrowNext.addEventListener("click", nextSlide);
  if (arrowPrev) arrowPrev.addEventListener("click", prevSlide);

  /* ---------- Rotating hero headline word ---------- */
  const rotatingWords = [
    "Structural Precision",
    "Pipes & Tubing",
    "Sheets & Plates",
    "Custom Fabrication",
  ];
  const rotateEl = document.getElementById("heroRotate");
  let wordIndex = 0;
  if (rotateEl) {
    rotateEl.style.transition = "opacity .3s ease";
    setInterval(() => {
      wordIndex = (wordIndex + 1) % rotatingWords.length;
      rotateEl.style.opacity = 0;
      setTimeout(() => {
        rotateEl.textContent = rotatingWords[wordIndex];
        rotateEl.style.opacity = 1;
      }, 300);
    }, 3200);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Stat counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString("en-IN");
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString("en-IN");
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => counterObserver.observe(el));

  /* ---------- Sticky header shadow ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.style.boxShadow =
        window.scrollY > 20 ? "0 8px 24px rgba(0,0,0,0.10)" : "none";
    });
  }

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.style.display === "block";
      mainNav.style.display = open ? "none" : "block";
      mainNav.style.position = "absolute";
      mainNav.style.top = "82px";
      mainNav.style.left = "0";
      mainNav.style.right = "0";
      mainNav.style.background = "#ffffff";
      mainNav.style.borderTop = "1px solid rgba(0,0,0,0.10)";
      mainNav.style.padding = "20px 24px";
      mainNav.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)";
      mainNav.querySelector("ul").style.flexDirection = "column";
      mainNav.querySelector("ul").style.alignItems = "flex-start";
      mainNav.querySelector("ul").style.gap = "18px";
    });
  }

  /* ---------- Testimonial carousel ---------- */
  const testiTrack = document.getElementById("testiTrack");
  const testiDotsWrap = document.getElementById("testiDots");
  if (testiTrack && testiDotsWrap) {
    const testiSlides = testiTrack.children;
    let tIndex = 0;
    Array.from(testiSlides).forEach((_, i) => {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToTesti(i));
      testiDotsWrap.appendChild(dot);
    });
    const tDots = testiDotsWrap.querySelectorAll("button");
    function goToTesti(i) {
      tIndex = (i + testiSlides.length) % testiSlides.length;
      testiTrack.style.transform = `translateX(-${tIndex * 100}%)`;
      tDots.forEach((d) => d.classList.remove("active"));
      tDots[tIndex].classList.add("active");
    }
    setInterval(() => goToTesti(tIndex + 1), 5200);
  }

  /* ---------- Process diagram: animate connecting line on scroll ---------- */
  const processDiagram = document.getElementById("processDiagram");
  if (processDiagram) {
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processDiagram.classList.add("in");
            processObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    processObserver.observe(processDiagram);
  }

  /* ---------- Product detail gallery thumbs ---------- */
  const pdMain = document.getElementById("pdMainImg");
  const pdThumbs = document.querySelectorAll(".pd-thumbs button");
  if (pdMain && pdThumbs.length) {
    pdThumbs.forEach((btn) => {
      btn.addEventListener("click", () => {
        pdMain.src = btn.getAttribute("data-full");
        pdThumbs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }
});
