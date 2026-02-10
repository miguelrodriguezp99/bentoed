document.addEventListener("DOMContentLoaded", () => {
  const bentos = document.querySelectorAll(".bento-section");

  bentos.forEach((bento) => {
    const htmlBtn = bento.querySelector(".html-btn");
    const cssBtn = bento.querySelector(".css-btn");
    const tailwindBtn = bento.querySelector(".tailwind-btn");
    const bentoBtn = bento.querySelector(".bento-btn");
    const bentoHeader = bento.querySelector(".bento-header");

    const copyHtmlBtn = bento.querySelector(".copy-html-btn");
    const copyCssBtn = bento.querySelector(".copy-css-btn");
    const copyTailwindBtn = bento.querySelector(".copy-tailwind-btn");

    const htmlCode = bento.querySelector("#html-code");
    const cssCode = bento.querySelector("#css-code");
    const tailwindCode = bento.querySelector("#tailwind-code");
    const bentoDiv = bento.querySelector("#bento-div");

    const htmlValue = htmlCode.getAttribute("data-value");
    const cssValue = cssCode.getAttribute("data-value");
    const tailwindValue = tailwindCode.getAttribute("data-value");

    htmlBtn.addEventListener("click", () => {
      setActiveButtons(cssBtn, tailwindBtn, bentoBtn);
      setDisabledButton(htmlBtn);
      showCode("html", htmlCode, cssCode, tailwindCode, bentoDiv);
    });

    cssBtn.addEventListener("click", () => {
      setActiveButtons(htmlBtn, tailwindBtn, bentoBtn);
      setDisabledButton(cssBtn);
      showCode("css", htmlCode, cssCode, tailwindCode, bentoDiv);
    });

    tailwindBtn.addEventListener("click", () => {
      setActiveButtons(htmlBtn, cssBtn, bentoBtn);
      setDisabledButton(tailwindBtn);
      showCode("tailwind", htmlCode, cssCode, tailwindCode, bentoDiv);
    });

    bentoBtn.addEventListener("click", () => {
      setActiveButtons(htmlBtn, cssBtn, tailwindBtn);
      setDisabledButton(bentoBtn);
      showCode("bento", htmlCode, cssCode, tailwindCode, bentoDiv);
    });

    bentoHeader.addEventListener("click", () => {
      setActiveButtons(htmlBtn, cssBtn, tailwindBtn);
      setDisabledButton(bentoBtn);
      showCode("bento", htmlCode, cssCode, tailwindCode, bentoDiv);
    });

    copyHtmlBtn.addEventListener("click", () => setClipboard(htmlValue));
    copyCssBtn.addEventListener("click", () => setClipboard(cssValue));
    copyTailwindBtn.addEventListener("click", () => setClipboard(tailwindValue));
  });

  function setActiveButtons(htmlCode, cssCode, tailwindCode) {
    [htmlCode, cssCode, tailwindCode].forEach((btn) => {
      btn.classList.remove("text-primary", "bg-tertiary");
      btn.classList.add("bg-primary", "text-tertiary", "hover:text-primary", "hover:bg-tertiary");
    });
  }

  function setDisabledButton(btn) {
    btn.classList.remove("bg-primary", "text-tertiary", "hover:text-primary", "hover:bg-tertiary");
    btn.classList.add("text-primary", "bg-tertiary");
  }

  async function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
    const copiedText = window.__getTranslation ? window.__getTranslation('ui.copied') : 'Copied to clipboard!';
    Toastify({
      text: copiedText,
      duration: 3000,
      position: "right",
      offset: { x: 40, y: 20 },
      style: { background: "#ddd", color: "black", borderRadius: "10px" },
    }).showToast();
  }

  function showCode(code, htmlCode, cssCode, tailwindCode, bentoDiv) {
    switch (code) {
      case "html":
        htmlCode.style.display = "block"; bentoDiv.style.display = "none";
        cssCode.style.display = "none"; tailwindCode.style.display = "none"; break;
      case "css":
        htmlCode.style.display = "none"; bentoDiv.style.display = "none";
        cssCode.style.display = "block"; tailwindCode.style.display = "none"; break;
      case "tailwind":
        htmlCode.style.display = "none"; bentoDiv.style.display = "none";
        cssCode.style.display = "none"; tailwindCode.style.display = "block"; break;
      case "bento":
        htmlCode.style.display = "none"; cssCode.style.display = "none";
        tailwindCode.style.display = "none"; bentoDiv.style.display = "grid"; break;
    }
  }

  // Infinite scroll
  const BATCH_SIZE = 10;
  const sentinel = document.getElementById("scroll-sentinel");
  let currentObserver = null;

  function getActiveCategory() {
    return document.querySelector(".category-btn.active")?.dataset.category || "all";
  }

  function getHiddenForCategory(category) {
    if (category === "all") {
      return document.querySelectorAll(".bento-section.hidden");
    }
    return document.querySelectorAll(`.bento-section.hidden[data-category="${category}"]`);
  }

  function setupScrollObserver() {
    if (currentObserver) currentObserver.disconnect();
    if (!sentinel) return;
    const category = getActiveCategory();
    const hiddenLeft = getHiddenForCategory(category).length;
    if (hiddenLeft === 0) return;

    currentObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      const cat = getActiveCategory();
      const hiddenBentos = getHiddenForCategory(cat);
      let shown = 0;
      hiddenBentos.forEach((b) => {
        if (shown < BATCH_SIZE) { b.classList.remove("hidden"); shown++; }
      });
      if (getHiddenForCategory(cat).length === 0) currentObserver.disconnect();
    }, { rootMargin: "200px" });
    currentObserver.observe(sentinel);
  }

  setupScrollObserver();

  // Category filtering
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => {
        b.classList.remove("active", "text-primary", "bg-tertiary");
        b.classList.add("bg-primary", "text-tertiary", "hover:text-primary", "hover:bg-tertiary");
      });
      btn.classList.remove("bg-primary", "text-tertiary", "hover:text-primary", "hover:bg-tertiary");
      btn.classList.add("active", "text-primary", "bg-tertiary");

      const category = btn.dataset.category;
      const allBentoSections = document.querySelectorAll(".bento-section");

      // First hide everything
      allBentoSections.forEach((section) => section.classList.add("hidden"));

      // Show first BATCH_SIZE matching items
      let visibleCount = 0;
      allBentoSections.forEach((section) => {
        const matches = category === "all" || section.dataset.category === category;
        if (matches && visibleCount < BATCH_SIZE) {
          section.classList.remove("hidden");
          visibleCount++;
        }
      });

      setupScrollObserver();
    });
  });
});
