document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initSkillsHover();
  initHeroEyes();
  initContactForm();
  initSparkleCursor();
});

function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");
  const html = document.documentElement;

  // Get saved theme or use system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Set initial theme
  if (initialTheme === "light") {
    html.setAttribute("data-theme", "light");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  } else {
    html.removeAttribute("data-theme");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  }

  // Theme toggle handler
  themeToggle.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    if (newTheme === "light") {
      html.setAttribute("data-theme", "light");
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
      localStorage.setItem("theme", "light");
    } else {
      html.removeAttribute("data-theme");
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
      localStorage.setItem("theme", "dark");
    }
  });
}

function initSkillsHover() {
  const skillLabels = document.querySelectorAll(".skill-label");
  const skillsDefault = document.querySelector(".skills-default");
  const skillDetails = document.querySelectorAll(".skills-detail");

  if (skillsDefault) {
    skillsDefault.classList.add("active");
  }

  skillLabels.forEach((label) => {
    label.addEventListener("mouseenter", function () {
      const skillType = this.getAttribute("data-skill");

      if (skillsDefault) {
        skillsDefault.classList.remove("active");
      }

      skillDetails.forEach((detail) => {
        detail.classList.remove("active");
      });

      const targetDetail = document.querySelector(
        `.skills-detail[data-detail="${skillType}"]`,
      );
      if (targetDetail) {
        targetDetail.classList.add("active");
      }

      skillLabels.forEach((otherLabel) => {
        otherLabel.style.opacity = otherLabel !== this ? "0.3" : "1";
      });
    });

    label.addEventListener("mouseleave", function () {
      setTimeout(() => {
        const isHoveringAnyLabel = Array.from(skillLabels).some((lbl) =>
          lbl.matches(":hover"),
        );
        if (isHoveringAnyLabel) return;

        if (skillsDefault) {
          skillsDefault.classList.add("active");
        }

        skillDetails.forEach((detail) => {
          detail.classList.remove("active");
        });

        skillLabels.forEach((lbl) => {
          lbl.style.opacity = "0.7";
        });
      }, 50);
    });
  });
}

function initHeroEyes() {
  const heroSection = document.querySelector(".hero-section");
  if (!heroSection) return;

  const heroSvg = heroSection.querySelector("svg");
  if (!heroSvg) return;

  const heroLeftEye = heroSvg.querySelector(".hero-eye-shape--left");
  const heroRightEye = heroSvg.querySelector(".hero-eye-shape--right");
  if (!heroLeftEye || !heroRightEye) return;

  const leftBox = heroLeftEye.getBBox();
  const rightBox = heroRightEye.getBBox();

  const eyeCenter = {
    left: {
      x: leftBox.x + leftBox.width / 2,
      y: leftBox.y + leftBox.height / 2,
    },
    right: {
      x: rightBox.x + rightBox.width / 2,
      y: rightBox.y + rightBox.height / 2,
    },
  };

  const faceCenter = {
    x: (eyeCenter.left.x + eyeCenter.right.x) / 2,
    y: (eyeCenter.left.y + eyeCenter.right.y) / 2,
  };

  const state = {
    active: false,
    pointer: { x: faceCenter.x, y: faceCenter.y },
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    rafId: 0,
    ctm: null,
  };

  const MAX_OFFSET_X = 10;
  const MAX_OFFSET_Y = 7;
  const EASE = 0.16;

  const updateCTM = () => {
    try {
      state.ctm = heroSvg.getScreenCTM();
    } catch {
      state.ctm = null;
    }
  };

  const toSvgPoint = (clientX, clientY) => {
    if (!state.ctm) return { x: faceCenter.x, y: faceCenter.y };
    const inv = state.ctm.inverse();
    const pt = new DOMPoint(clientX, clientY).matrixTransform(inv);
    return { x: pt.x, y: pt.y };
  };

  const setEyes = (dx, dy) => {
    const leftWeightX = dx < 0 ? 1.2 : 0.6;
    const rightWeightX = dx > 0 ? 1.2 : 0.6;

    heroLeftEye.setAttribute(
      "transform",
      `translate(${dx * leftWeightX} ${dy})`,
    );
    heroRightEye.setAttribute(
      "transform",
      `translate(${dx * rightWeightX} ${dy})`,
    );
  };

  const tick = () => {
    const dxRaw = state.pointer.x - faceCenter.x;
    const dyRaw = state.pointer.y - faceCenter.y;

    state.target.x = Math.max(-MAX_OFFSET_X, Math.min(MAX_OFFSET_X, dxRaw));
    state.target.y = Math.max(-MAX_OFFSET_Y, Math.min(MAX_OFFSET_Y, dyRaw));

    state.current.x += (state.target.x - state.current.x) * EASE;
    state.current.y += (state.target.y - state.current.y) * EASE;
    setEyes(state.current.x, state.current.y);

    if (state.active) {
      state.rafId = requestAnimationFrame(tick);
      return;
    }

    if (Math.abs(state.current.x) > 0.1 || Math.abs(state.current.y) > 0.1) {
      state.rafId = requestAnimationFrame(tick);
      return;
    }

    state.current.x = 0;
    state.current.y = 0;
    setEyes(0, 0);
    state.rafId = 0;
  };

  heroSection.addEventListener("mouseenter", () => {
    state.active = true;
    updateCTM();
    if (!state.rafId) state.rafId = requestAnimationFrame(tick);
  });

  heroSection.addEventListener("mouseleave", () => {
    state.active = false;
    state.target.x = 0;
    state.target.y = 0;
    if (!state.rafId) state.rafId = requestAnimationFrame(tick);
  });

  heroSection.addEventListener("mousemove", (e) => {
    const p = toSvgPoint(e.clientX, e.clientY);
    state.pointer.x = p.x;
    state.pointer.y = p.y;
  });

  window.addEventListener("resize", updateCTM);
  window.addEventListener("scroll", updateCTM, { passive: true });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");
  if (!nameInput || !emailInput || !messageInput) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const to = form.getAttribute("data-to") || "your.email@example.com";
    const name = (nameInput.value || "").trim();
    const from = (emailInput.value || "").trim();
    const message = (messageInput.value || "").trim();

    const subject = "Portfolio inquiry";
    const body = [`Name: ${name}`, `Email: ${from}`, "", message].join("\n");

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

function initSparkleCursor() {
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer =
    window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if (prefersReducedMotion || isCoarsePointer) return;

  const layer = document.querySelector(".cursor-fx");
  if (!layer) return;

  const glow = layer.querySelector(".cursor-glow");
  if (!glow) return;

  document.body.classList.add("cursor-fx-enabled");

  const palette = ["#B4ADEA", "#7AC9E6", "#E67ACB", "#7AE69A", "#E6DD7A"];
  const state = {
    x: -100,
    y: -100,
    tx: -100,
    ty: -100,
    raf: 0,
    lastSparkleAt: 0,
    lastSparkleX: -100,
    lastSparkleY: -100,
    sparkles: [],
  };

  const MAX_SPARKLES = 300;
  const EASE = 0.22;
  const MIN_TIME_MS = 1;
  const MIN_DIST_PX = 2;

  const tick = () => {
    state.x += (state.tx - state.x) * EASE;
    state.y += (state.ty - state.y) * EASE;
    glow.style.transform = `translate3d(${state.x - 9}px, ${state.y - 9}px, 0)`;
    state.raf = requestAnimationFrame(tick);
  };

  const spawnSparkle = (x, y) => {
    const el = document.createElement("span");
    el.className = "cursor-sparkle";

    const size = 6 + Math.random() * 7;
    const dx = (Math.random() - 0.5) * 30;
    const dy = (Math.random() - 0.5) * 30;
    const color = palette[(Math.random() * palette.length) | 0];

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.color = color;
    el.style.background = color;
    el.style.setProperty("--x", `${x - size / 2}px`);
    el.style.setProperty("--y", `${y - size / 2}px`);
    el.style.setProperty("--dx", `${dx}px`);
    el.style.setProperty("--dy", `${dy}px`);

    layer.appendChild(el);
    state.sparkles.push(el);

    if (state.sparkles.length > MAX_SPARKLES) {
      const old = state.sparkles.shift();
      if (old && old.parentNode) old.parentNode.removeChild(old);
    }

    el.addEventListener(
      "animationend",
      () => {
        const idx = state.sparkles.indexOf(el);
        if (idx !== -1) state.sparkles.splice(idx, 1);
        if (el.parentNode) el.parentNode.removeChild(el);
      },
      { once: true },
    );
  };

  const onMove = (e) => {
    state.tx = e.clientX;
    state.ty = e.clientY;

    const now = performance.now();
    const dx = state.tx - state.lastSparkleX;
    const dy = state.ty - state.lastSparkleY;
    const dist = Math.hypot(dx, dy);

    if (now - state.lastSparkleAt < MIN_TIME_MS) return;
    if (dist < MIN_DIST_PX) return;

    state.lastSparkleAt = now;
    state.lastSparkleX = state.tx;
    state.lastSparkleY = state.ty;

    spawnSparkle(state.tx, state.ty);
  };

  window.addEventListener("pointermove", onMove, { passive: true });

  window.addEventListener(
    "pointerdown",
    () => {
      glow.style.boxShadow =
        "0 0 0 8px rgba(180, 173, 234, 0.22), 0 0 34px rgba(180, 173, 234, 0.65)";
    },
    { passive: true },
  );

  window.addEventListener(
    "pointerup",
    () => {
      glow.style.boxShadow =
        "0 0 0 6px rgba(180, 173, 234, 0.18), 0 0 28px rgba(180, 173, 234, 0.55)";
    },
    { passive: true },
  );

  if (!state.raf) state.raf = requestAnimationFrame(tick);
}
