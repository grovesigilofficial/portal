/* ==========================
   GroveSigilOfficial Scripts
   Handles all pages:
   - Master Planner
   - Suggestions Box
   - Admin Lights & News Ticker
========================== */

/* --------------------------
   Main Portal
--------------------------- */
console.log("GroveSigilOfficial Portal Active");

/* --------------------------
   Master Planner Logic
--------------------------- */
const schedules = {
  weekday: [
    ["00:00–00:20", "Nap"],["00:20–01:20", "Wim Hof"],["01:20–04:00", "Coding"],
    ["04:00–04:20", "Nap"],["04:20–05:20", "Wim Hof"],["05:20–08:00", "Coding"],
    ["08:00–08:20", "Nap"],["08:20–09:20", "Wim Hof"],["09:20–12:00", "Astral Projection"],
    ["12:00–12:20", "Nap"],["12:20–13:20", "Wim Hof"],["13:20–14:20", "Music Production"],
    ["14:39–14:59", "Nap (Weekday)"],["15:00–17:00", "Phone Meetings"],["17:00–20:00", "Coding / Micro Workouts"],
    ["20:00–20:20", "Nap"],["20:30–23:30", "Streaming"],["23:30–00:00", "Wim Hof / Recovery"]
  ],
  weekend: [
    ["00:00–00:20", "Nap"],["00:20–01:20", "Wim Hof"],["01:20–04:00", "Coding"],
    ["04:00–04:20", "Nap"],["04:20–05:20", "Wim Hof"],["05:20–08:00", "Coding"],
    ["08:00–08:20", "Nap"],["08:20–09:20", "Wim Hof"],["09:20–12:00", "Astral Projection"],
    ["12:00–12:20", "Nap"],["12:20–13:20", "Wim Hof"],["13:20–14:20", "Music Production"],
    ["14:39–14:59", "Nap"],["15:00–17:00", "Reading"],["17:00–20:00", "Coding / Micro Workouts"],
    ["20:00–20:20", "Nap"],["20:30–23:30", "Streaming"],["23:30–00:00", "Wim Hof / Recovery"]
  ],
  sunday: [
    ["00:00–00:20", "Nap"],["00:20–01:20", "Wim Hof"],["01:20–04:00", "Reading"],
    ["04:00–04:20", "Nap"],["04:20–05:20", "Wim Hof"],["05:20–08:00", "Reading"],
    ["08:00–08:20", "Nap"],["08:20–09:20", "Wim Hof"],["09:20–12:00", "Reading"],
    ["12:00–12:20", "Nap"],["12:20–13:20", "Wim Hof"],["13:20–14:20", "Reading"],
    ["14:39–14:59", "Nap"],["15:00–17:00", "Reading"],["17:00–20:00", "Reading"],
    ["20:00–20:20", "Nap"],["20:30–23:30", "Reading"],["23:30–00:00", "Wim Hof / Recovery"]
  ]
};

// Planner Table Rendering
const tbody = document.getElementById("schedule-body");
const daySelect = document.getElementById("day-select");

if(tbody && daySelect) {
  function renderSchedule(day) {
    tbody.innerHTML = "";
    schedules[day].forEach(([time, activity]) => {
      const tr = document.createElement("tr");
      tr.className = "border-b border-slate-700";
      tr.innerHTML = `<td class="p-2">${time}</td><td class="p-2">${activity}</td>`;
      tbody.appendChild(tr);
    });
  }
  daySelect.addEventListener("change", e => renderSchedule(e.target.value));
  renderSchedule("weekday");
}

/* --------------------------
   Suggestions Box Logic
--------------------------- */
function saveSuggestion() {
  const input = document.getElementById("suggestion-input");
  const list = document.getElementById("suggestion-list");
  if(input && list && input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value.trim();
    list.appendChild(li);
    input.value = "";
    alert("Suggestion saved! (Admin only view)");
  }
}

/* --------------------------
   News Ticker / Admin Lights
--------------------------- */
const newsTicker = document.getElementById("news-ticker");
const adminLights = document.getElementById("admin-lights");

if(newsTicker) {
  newsTicker.textContent = "No new announcements"; // Placeholder
}
if(adminLights) {
  adminLights.textContent = "🟢 All systems nominal"; // Placeholder
}
