import appData from './data.js';

(function () {
  "use strict";

  const tabsEl = document.getElementById("tabs");
  const contentEl = document.getElementById("content");
  const searchInput = document.getElementById("searchInput");
  const printBtn = document.getElementById("printBtn");
  const installBtn = document.getElementById("installBtn");
  const offlineBadge = document.getElementById("offlineBadge");
  const langSelect = document.getElementById("langSelect"); // New Dropdown Reference

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
      "<h3>" + labels.recognizeSigns + "</h3>" +
      '<ul class="list list-checks">' +
      emergency.symptoms.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</section>" +
      '<section class="guide-section">' +
      "<h3>" + labels.firstAidTitle + "</h3>" +
      '<ol class="list list-steps">' +
      emergency.steps.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ol>" +
      "</section>" +
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
