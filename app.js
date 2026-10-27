import appData from './data.js';

(function () {
  "use strict";

  const tabsEl = document.getElementById("tabs");
  const contentEl = document.getElementById("content");
  const searchInput = document.getElementById("searchInput");
  const printBtn = document.getElementById("printBtn");
  const installBtn = document.getElementById("installBtn");
  const offlineBadge = document.getElementById("offlineBadge");
  const langSelect = document.getElementById("langSelect");
  const creditsBtn = document.getElementById("creditsBtn");

  let activeId = null;
  let deferredInstallPrompt = null;
  let currentLanguage = "en"; // Tracks local translation state

  // Dynamically points to the active array based on selected language
  function getActiveEmergencies() {
    return appData[currentLanguage];
  }

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function renderTabs(query) {
    const EMERGENCIES = getActiveEmergencies();
    const filter = (query || "").trim().toLowerCase();
    
    const matches = EMERGENCIES.filter(function (emergency) {
      if (!filter) return true;
      return (
        emergency.title.toLowerCase().includes(filter) ||
        emergency.keywords.some(function (keyword) {
          return keyword.toLowerCase().includes(filter);
        })
      );
    });

    tabsEl.innerHTML = "";

    if (matches.length === 0) {
      // Pulls dynamic localized placeholder strings safely
      const labels = EMERGENCIES[0]?.uiLabels || { emptyState: '🔍 No emergencies match your search.' };
      contentEl.innerHTML = '<div class="empty-state">' + labels.emptyState + '</div>';
      return;
    }

    matches.forEach(function (emergency) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tab";
      button.dataset.id = emergency.id;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", "false");
      button.innerHTML =
        '<span class="tab-icon" aria-hidden="true">' +
        emergency.icon +
        "</span><span>" +
        escapeHtml(emergency.title) +
        "</span>";
      button.addEventListener("click", function () {
        selectEmergency(emergency.id);
      });
      tabsEl.appendChild(button);
    });

    const activeStillVisible = matches.some(function (emergency) {
      return emergency.id === activeId;
    });

    if (!activeStillVisible) {
      activeId = matches[0].id;
    }

    selectEmergency(activeId);
  }

  function selectEmergency(id) {
    const EMERGENCIES = getActiveEmergencies();
    const emergency = EMERGENCIES.find(function (item) {
      return item.id === id;
    });

    if (!emergency) return;

    activeId = id;

    document.querySelectorAll(".tab").forEach(function (button) {
      const isActive = button.dataset.id === id;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    renderEmergency(emergency);
  }

  function renderEmergency(emergency) {
    const labels = emergency.uiLabels;
    
    contentEl.innerHTML =
      '<article class="guide">' +
      '<header class="guide-header">' +
      '<span class="guide-icon" aria-hidden="true">' + emergency.icon + "</span>" +
      "<div>" +
      "<h2>" + escapeHtml(emergency.title) + "</h2>" +
      '<p class="guide-summary">' + escapeHtml(emergency.summary) + "</p>" +
      "</div>" +
      "</header>" +
      '<aside class="callout callout-emergency">' +
      "<strong>" + labels.callEmergencyTitle + "</strong>" +
      "<ul>" +
      emergency.callEmergency.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</aside>" +
   '<section class="guide-section">' +
      "<h3>" + labels.firstAidTitle + "</h3>" +
      '<ol class="list list-steps">' +
      emergency.steps.map(function (item) {
        // 1. Check if the item is an object or a plain text string
        const isObject = (typeof item === 'object' && item !== null);
        const textValue = isObject ? item.text : item;
        const imgUrl = isObject ? item.image : '';
        
        // 2. Start building the list item with text
        let output = '<li class="step-item-container" style="margin-bottom: 20px;">' + 
                     '<p class="step-text" style="margin-bottom: 8px;">' + escapeHtml(textValue) + '</p>';
        
        // 3. ONLY add the <img> tag if an image path is provided
        if (imgUrl && imgUrl.trim() !== '') {
          output += '<img src="' + imgUrl + '" alt="First Aid Step Illustration" style="width: 100%; max-width: 340px; display: block; border-radius: 6px; border: 1px solid #e2e8f0; height: auto;">';
        }
        
        output += '</li>';
        return output;
      }).join("") +
      '<section class="guide-section">' +
      "<h3>" + labels.medKitTitle + "</h3>" +
      '<div class="chips">' +
      emergency.medKit.map(function (item) {
        return '<span class="chip">' + escapeHtml(item) + "</span>";
      }).join("") +
      "</div>" +
      "</section>" +
      '<section class="guide-section guide-section-warn">' +
      "<h3>" + labels.doNotTitle + "</h3>" +
      '<ul class="list list-warn">' +
      emergency.precautions.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</section>" +
      "</article>";
  }

  // Hook up Language Selection Tab Event Trigger
  if (langSelect) {
    langSelect.addEventListener("change", function (event) {
      currentLanguage = event.target.value;
      renderTabs(searchInput.value); // Hot-swaps the layout views immediately
    });
  }

  // Hook up Credits Tab Event Trigger
  if (creditsBtn) {
    creditsBtn.addEventListener("click", function () {
      // Clear active styling states from the category pills layout
      document.querySelectorAll(".tab").forEach(function (button) {
        if (button !== creditsBtn) {
          button.classList.remove("active");
          button.setAttribute("aria-selected", "false");
        }
      });
      
      // Highlight the credits tab button layout natively
      creditsBtn.classList.add("active");

      // Render your custom sources layout inside the content block
      contentEl.innerHTML = 
        '<article class="guide" style="padding: 2.5rem; text-align: left;">' +
        '<h2 style="margin-top: 0; margin-bottom: 1.5rem; color: var(--accent);">First Aid Illustrations & Guide Steps:</h2>' +
        '<p style="font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.7;">' +
        "Medical illustrations used throughout this application have been adapted from wikiHow, a wiki building the world's largest, highest-quality how-to manual.<br>" +
        'Content is provided here for educational purposes for this research project. Original articles and full creator histories can be found online at ' +
        '<a href="https://www.wikihow.com" target="_blank" rel="noopener" style="color: var(--accent); font-weight: 600;">www.wikihow.com</a>.' +
        '</p>' +
        
        '<div class="credits-links" style="display: flex; flex-direction: column; gap: 1.2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">' +
        
        '<div>' +
        '<strong>Bone Fractures & sprains:</strong><br>' +
        '<a href="https://www.wikihow.com/Category:Bone-Fractures" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Category:Bone-Fractures</a><br>' +
        '<a href="https://www.wikihow.com/Treat-a-Broken-Finger" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Treat-a-Broken-Finger</a><br>' +
        '<a href="https://www.wikihow.com/Remove-a-Ring-in-an-Emergency" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Remove-a-Ring-in-an-Emergency</a>' +
        '</div>' +

        '<div>' +
        '<strong>Seizures:</strong><br>' +
        '<a href="https://www.wikihow.com/Help-Someone-Who-Is-Having-a-Seizure" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Help-Someone-Who-Is-Having-a-Seizure</a>' +
        '</div>' +

        '<div>' +
        '<strong>Allergies/anaphylaxis:</strong><br>' +
        '<a href="https://www.wikihow.com/Treat-Allergies" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Treat-Allergies</a>' +
        '</div>' +

        '<div>' +
        '<strong>Shock:</strong><br>' +
        '<a href="https://www.wikihow.com/Treat-Shock" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Treat-Shock</a>' +
        '</div>' +

        '<div>' +
        '<strong>Stomach ache/ pain:</strong><br>' +
        '<a href="https://www.wikihow.com/Cure-a-Stomach-Ache" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Cure-a-Stomach-Ache</a>' +
        '</div>' +

        '<div>' +
        '<strong>Nausea:</strong><br>' +
        '<a href="https://www.wikihow.com/Stop-Vomiting" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Stop-Vomiting</a>' +
        '</div>' +

        '<div>' +
        '<strong>Burns and scalds:</strong><br>' +
        '<a href="https://www.wikihow.com/Heal-Burns-Fast" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Heal-Burns-Fast</a><br>' +
        '<a href="https://www.wikihow.com/Remove-a-Ring-in-an-Emergency" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Remove-a-Ring-in-an-Emergency</a>' +
        '</div>' +

        '<div>' +
        '<strong>Cpr/heart attack:</strong><br>' +
        '<a href="https://www.wikihow.com/Do-CPR" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Do-CPR</a>' +
        '</div>' +

        '<div>' +
        '<strong>Heatstroke/heat exhaustion:</strong><br>' +
        '<a href="https://www.wikihow.health/Treat-Heatstroke" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.health/Treat-Heatstroke</a><br>' +
        '<a href="https://www.wikihow.com/Cure-Shortness-of-Breath" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Cure-Shortness-of-Breath</a>' +
        '</div>' +

        '<div>' +
        '<strong>Hypothermia:</strong><br>' +
        '<a href="https://www.wikihow.com/Treat-Hypothermia" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Treat-Hypothermia</a>' +
        '</div>' +

        '<div>' +
        '<strong>Choking:</strong><br>' +
        '<a href="https://www.wikihow.com/Help-a-Choking-Victim" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Help-a-Choking-Victim</a>' +
        '</div>' +

        '<div>' +
        '<strong>Poisoning:</strong><br>' +
        '<a href="https://www.wikihow.com/Get-Rid-of-Food-Poisoning" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Get-Rid-of-Food-Poisoning</a>' +
        '</div>' +

        '<div>' +
        '<strong>Stroke:</strong><br>' +
        '<a href="https://www.wikihow.com/Identify-if-Someone-Had-a-Stroke" target="_blank" rel="noopener" style="color: var(--accent); word-break: break-all; font-size: 0.95rem;">https://www.wikihow.com/Identify-if-Someone-Had-a-Stroke</a>' +
        '</div>' +

        '</div>' +
        '</article>';
    });
  }
  searchInput.addEventListener("input", function () {
    renderTabs(searchInput.value);
  });

  printBtn.addEventListener("click", function () {
    window.print();
  });

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installBtn) installBtn.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener("click", async function () {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installBtn.hidden = true;
    });
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("./sw.js")
        .then(function () {
          offlineBadge.textContent = "✓ Offline-ready";
          offlineBadge.style.background = "rgba(34, 197, 94, 0.25)";
        })
        .catch(function () {
          offlineBadge.textContent = "Offline mode unavailable";
        });
    });
  } else {
    offlineBadge.textContent = "Offline mode unavailable";
  }

  renderTabs("");
})();
