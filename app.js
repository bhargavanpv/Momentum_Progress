const STORAGE_KEY = "momentum.v01";

const palettes = {
  github: {
    name: "GitHub Green",
    swatches: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353", "#56f06f"]
  },
  ocean: {
    name: "Ocean",
    swatches: ["#131b22", "#12344a", "#145f7e", "#1689aa", "#20bfd7", "#73e8f3"]
  },
  violet: {
    name: "Violet",
    swatches: ["#191722", "#2d214d", "#51318a", "#7547c7", "#9b6cff", "#c4a8ff"]
  },
  amber: {
    name: "Amber",
    swatches: ["#1f1a12", "#4a310f", "#8a5514", "#c47a22", "#f0a43a", "#ffd37a"]
  },
  graphite: {
    name: "Graphite",
    swatches: ["#16181c", "#2c333d", "#465260", "#657382", "#8d9aaa", "#c0c8d2"]
  },
  rose: {
    name: "Rose",
    swatches: ["#20161a", "#4d1f2e", "#82324c", "#ba496d", "#ef6f96", "#ffadbf"]
  }
};

const icons = {
  code: '<path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/><path d="m14 4-4 16"/>',
  nodes: '<circle cx="6" cy="7" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="17" cy="18" r="3"/><path d="m8.7 8.4 6.6 7.2"/><path d="m9 6.7 6-.4"/>',
  run: '<path d="M13 4.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m10 21 2-5-3-3 3-5 3 3 3 1"/><path d="m7 17-3 4"/><path d="m14 16 5 5"/><path d="m8 9-3 2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/>',
  dumbbell: '<path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M6.5 12h11"/>',
  meditate: '<path d="M12 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M8 21c1.4-2.7 2.7-4 4-4s2.6 1.3 4 4"/><path d="M4 14c2.8 1.2 5.5 1.8 8 1.8s5.2-.6 8-1.8"/><path d="M9 8h6l2 4H7l2-4Z"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  briefcase: '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 12h18"/><path d="M9 12v2h6v-2"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  heart: '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/>',
  moon: '<path d="M21 14.8A8.5 8.5 0 0 1 9.2 3a7 7 0 1 0 11.8 11.8Z"/>',
  wallet: '<path d="M20 7H5a3 3 0 0 0 0 6h15v6H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13v3"/><path d="M17 13h3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/>',
  palette: '<path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.5-3.3 1 1 0 0 1 .8-1.7H17a4 4 0 0 0 0-8h-1"/><circle cx="7.5" cy="10" r=".8"/><circle cx="10.5" cy="7.5" r=".8"/><circle cx="14" cy="7.5" r=".8"/><circle cx="6.8" cy="13.5" r=".8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  utensils: '<path d="M4 3v8"/><path d="M8 3v8"/><path d="M4 7h4"/><path d="M6 11v10"/><path d="M17 3v18"/><path d="M14 3c0 5 1 8 3 8"/>',
  leaf: '<path d="M20 4c-7 0-12 4-12 11 0 3 2 5 5 5 7 0 9-9 7-16Z"/><path d="M4 20c4-7 8-10 14-13"/>',
  default: '<path d="M4 12h16"/><path d="M12 4v16"/><rect x="5" y="5" width="14" height="14" rx="4"/>'
};

const iconOptions = [
  ["code", "Code"], ["nodes", "DSA"], ["book", "Read"], ["edit", "Write"],
  ["briefcase", "Work"], ["target", "Goal"], ["run", "Run"], ["dumbbell", "Gym"],
  ["meditate", "Calm"], ["heart", "Health"], ["moon", "Sleep"], ["wallet", "Money"],
  ["users", "People"], ["camera", "Content"], ["palette", "Create"], ["music", "Music"],
  ["globe", "Language"], ["home", "Home"], ["utensils", "Food"], ["leaf", "Nature"],
  ["search", "Research"]
];

const categoryOptions = [
  "Learning", "Career", "Fitness", "Health", "Money", "Creative", "Personal", "Relationships", "Home", "Spiritual"
];

const defaultActivities = [
  {
    id: "react",
    name: "React",
    category: "Career",
    icon: "code",
    target: 120,
    logs: seedLogs([80, 160, 45, 220, 320, 0, 140, 90, 260])
  },
  {
    id: "dsa",
    name: "DSA",
    category: "Learning",
    icon: "nodes",
    target: 90,
    logs: seedLogs([30, 100, 75, 0, 120, 55, 80])
  },
  {
    id: "running",
    name: "Running",
    category: "Fitness",
    icon: "run",
    target: 45,
    logs: seedLogs([25, 0, 40, 55, 35, 80, 45, 20])
  }
];

const initialState = {
  activities: defaultActivities,
  settings: {
    mode: "dark",
    palette: "github",
    gridLayout: "calendar",
    customColumns: 10,
    gridDensity: "dense",
    showWeekdays: true,
    showFutureDays: true,
    haptics: true,
    reducedMotion: false,
    defaultDuration: 60,
    quickDurations: [15, 30, 45, 60, 90, 120]
  },
  ui: {
    sheet: null,
    activeActivityId: null,
    activeDate: dateKey(new Date()),
    insightTab: "summary"
  }
};

let state = loadState();

function seedLogs(values) {
  const now = new Date();
  const logs = {};
  values.forEach((minutes, index) => {
    if (!minutes) return;
    const day = Math.max(1, now.getDate() - values.length + index + 1);
    const date = new Date(now.getFullYear(), now.getMonth(), day);
    logs[dateKey(date)] = minutes;
  });
  return logs;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(initialState);
    return sanitizeState({
      ...structuredClone(initialState),
      ...saved,
      settings: { ...initialState.settings, ...saved.settings },
      ui: { ...initialState.ui, sheet: null, activeActivityId: null }
    });
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  sanitizeState(state);
  const persisted = {
    activities: state.activities,
    settings: state.settings
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function sanitizeState(value) {
  const todayKey = dateKey(new Date());
  value.activities.forEach((activity) => {
    Object.keys(activity.logs || {}).forEach((key) => {
      if (key > todayKey) delete activity.logs[key];
    });
  });
  return value;
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthName(date) {
  return date.toLocaleDateString("en", { month: "long", year: "numeric" });
}

function minutesLabel(minutes) {
  if (!minutes) return "0m";
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}h ${rest}m` : `${hours}h`;
}

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" class="line-icon" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.default}</svg>`;
}

function haptic(type = "light") {
  if (!state.settings.haptics || !navigator.vibrate) return;
  const map = {
    light: 8,
    medium: 18,
    strong: [18, 35, 18],
    warning: [35, 40, 35]
  };
  navigator.vibrate(map[type]);
}

function setState(mutator) {
  mutator(state);
  applyTheme();
  saveState();
  render();
}

function applyTheme() {
  const root = document.documentElement;
  root.dataset.theme = state.settings.mode;
  root.dataset.motion = state.settings.reducedMotion ? "reduced" : "full";
  root.dataset.density = state.settings.gridDensity || "dense";
  const palette = palettes[state.settings.palette] || palettes.github;
  palette.swatches.forEach((color, index) => root.style.setProperty(`--heat-${index}`, color));
  root.style.setProperty("--accent", palette.swatches[4]);
  root.style.setProperty("--accent-strong", palette.swatches[5]);
  const themeColor = state.settings.mode === "light" ? "#f7f8fb" : "#0d1117";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", themeColor);
}

function getMonthDays(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const count = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: count }, (_, index) => new Date(year, month, index + 1));
}

function getGridCells(activity) {
  const days = getMonthDays();
  const firstDay = days[0].getDay();
  const leading = state.settings.gridLayout === "calendar"
    ? Array.from({ length: firstDay }, () => null)
    : [];
  return [...leading, ...days].map((date) => {
    if (!date) return { type: "blank" };
    const key = dateKey(date);
    const minutes = activity.logs[key] || 0;
    const today = dateKey(new Date());
    const isFuture = key > today;
    return {
      type: "day",
      key,
      day: date.getDate(),
      weekday: date.getDay(),
      minutes,
      isToday: key === today,
      isFuture
    };
  });
}

function intensityFor(activity, minutes) {
  if (!minutes) return 0;
  const max = Math.max(...Object.values(activity.logs), activity.target || 1);
  const ratio = minutes / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  if (ratio < 1) return 4;
  return 5;
}

function activityStats(activity) {
  const monthDays = getMonthDays();
  const todayKey = dateKey(new Date());
  const elapsed = monthDays.filter((day) => dateKey(day) <= todayKey);
  const monthLogs = elapsed.map((day) => activity.logs[dateKey(day)] || 0);
  const activeDays = monthLogs.filter(Boolean).length;
  const total = monthLogs.reduce((sum, value) => sum + value, 0);
  const best = Math.max(0, ...monthLogs);
  const avg = activeDays ? Math.round(total / activeDays) : 0;
  const consistency = elapsed.length ? Math.round((activeDays / elapsed.length) * 100) : 0;
  let streak = 0;
  for (let i = elapsed.length - 1; i >= 0; i -= 1) {
    if ((activity.logs[dateKey(elapsed[i])] || 0) > 0) streak += 1;
    else break;
  }
  const missedDays = elapsed.length - activeDays;
  const spikeRatio = avg ? Number((best / avg).toFixed(1)) : 0;
  return { activeDays, missedDays, total, best, avg, consistency, streak, spikeRatio };
}

function allStats() {
  const stats = state.activities.map(activityStats);
  const totalMinutes = stats.reduce((sum, item) => sum + item.total, 0);
  const activeDays = stats.reduce((sum, item) => sum + item.activeDays, 0);
  const avgConsistency = stats.length
    ? Math.round(stats.reduce((sum, item) => sum + item.consistency, 0) / stats.length)
    : 0;
  const strongest = state.activities
    .map((activity, index) => ({ activity, stats: stats[index] }))
    .sort((a, b) => b.stats.consistency - a.stats.consistency)[0];
  const totalHours = Math.round((totalMinutes / 60) * 10) / 10;
  return { totalMinutes, totalHours, activeDays, avgConsistency, strongest };
}

function weekdayStats() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totals = days.map((day) => ({ day, minutes: 0, logs: 0 }));
  const todayKey = dateKey(new Date());
  state.activities.forEach((activity) => {
    getMonthDays().forEach((date) => {
      const key = dateKey(date);
      if (key > todayKey) return;
      const minutes = activity.logs[key] || 0;
      if (!minutes) return;
      const item = totals[date.getDay()];
      item.minutes += minutes;
      item.logs += 1;
    });
  });
  const max = Math.max(1, ...totals.map((item) => item.minutes));
  return totals.map((item) => ({ ...item, percent: Math.round((item.minutes / max) * 100) }));
}

function render() {
  const app = document.getElementById("app");
  const today = new Date();
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <button class="brand" data-action="open-insights" aria-label="Open insights">
          <span class="brand-mark">${iconSvg("default")}</span>
          <span>
            <strong>Momentum</strong>
            <small>${monthName(today)}</small>
          </span>
        </button>
        <button class="icon-button" data-action="open-settings" aria-label="Open settings">
          ${menuIcon()}
        </button>
      </header>

      <section class="activity-list" aria-label="Activities">
        ${state.activities.map(renderActivity).join("")}
      </section>

      <button class="floating-action primary" data-action="open-add" aria-label="Add activity">
        ${plusIcon()}
      </button>
      <button class="floating-action insights" data-action="open-insights" aria-label="Open AI summary, analytics, and insights">
        ${sparkIcon()}
      </button>
    </main>

    ${renderSheet()}
    ${renderToastLayer()}
  `;
  bindEvents();
}

function renderActivity(activity, index) {
  const stats = activityStats(activity);
  const cells = getGridCells(activity);
  const columns = state.settings.gridLayout === "calendar" ? 7 : state.settings.customColumns;
  const weekdayHeader = state.settings.showWeekdays && state.settings.gridLayout === "calendar"
    ? `<div class="weekdays">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<span>${day}</span>`).join("")}</div>`
    : "";
  return `
    <article class="activity-card enter" style="--delay:${index * 55}ms" data-action="open-activity" data-id="${activity.id}">
      <div class="activity-head">
        <div class="activity-title">
          <span class="activity-icon">${iconSvg(activity.icon)}</span>
          <span>
            <strong>${escapeHtml(activity.name)}</strong>
            <small>${escapeHtml(activity.category)} · ${stats.consistency}% consistency</small>
          </span>
        </div>
        <button class="log-chip" data-action="open-log" data-id="${activity.id}" aria-label="Log ${escapeHtml(activity.name)}">
          ${plusIcon()} Log
        </button>
      </div>

      <div class="activity-meta">
        <span>${minutesLabel(stats.total)} this month</span>
        <span>${stats.streak} day streak</span>
        <span>Best ${minutesLabel(stats.best)}</span>
      </div>

      ${weekdayHeader}
      <div class="month-grid" style="--columns:${columns}" aria-label="${escapeHtml(activity.name)} monthly contribution grid">
        ${cells.map((cell, cellIndex) => renderCell(activity, cell, cellIndex)).join("")}
      </div>
    </article>
  `;
}

function renderCell(activity, cell, index) {
  if (cell.type === "blank") return `<span class="grid-cell blank" style="--i:${index}"></span>`;
  const level = intensityFor(activity, cell.minutes);
  const hiddenFuture = cell.isFuture && !state.settings.showFutureDays;
  const title = `${cell.day}: ${minutesLabel(cell.minutes)}`;
  return `
    <button
      class="grid-cell ${cell.isToday ? "today" : ""} ${cell.isFuture ? "future" : ""} ${hiddenFuture ? "hidden-future" : ""}"
      data-action="open-day"
      data-id="${activity.id}"
      data-date="${cell.key}"
      data-level="${level}"
      ${cell.isFuture ? "disabled" : ""}
      style="--i:${index}"
      aria-label="${escapeHtml(cell.isFuture ? `${cell.day}: future day locked` : title)}"
      title="${escapeHtml(title)}">
      <span>${cell.day}</span>
    </button>
  `;
}

function renderSheet() {
  if (!state.ui.sheet) return "";
  const activity = state.activities.find((item) => item.id === state.ui.activeActivityId);
  const content = {
    settings: renderSettings,
    insights: renderInsights,
    log: () => renderLog(activity),
    activity: () => renderActivityDetail(activity),
    add: renderAddActivity
  }[state.ui.sheet]?.();
  return `
    <div class="scrim" data-action="close-sheet"></div>
    <aside class="sheet" role="dialog" aria-modal="true">
      ${content}
    </aside>
  `;
}

function renderSettings() {
  const s = state.settings;
  return `
    <div class="sheet-head">
      <div><h2>Settings</h2><p>Keep Momentum calm, fast, and yours.</p></div>
      <button class="icon-button" data-action="close-sheet" aria-label="Close settings">${xIcon()}</button>
    </div>
    <div class="settings-stack">
      ${settingsSection("Appearance", `
        <div class="segmented" role="group" aria-label="Theme">
          ${["dark", "light", "amoled", "system"].map((mode) => `
            <button data-action="set-mode" data-mode="${mode}" class="${s.mode === mode ? "selected" : ""}">${labelMode(mode)}</button>
          `).join("")}
        </div>
        <div class="palette-grid">
          ${Object.entries(palettes).map(([key, palette]) => `
            <button class="palette-option ${s.palette === key ? "selected" : ""}" data-action="set-palette" data-palette="${key}">
              <span>${palette.name}</span>
              <span class="palette-swatches">${palette.swatches.slice(1).map((color) => `<i style="background:${color}"></i>`).join("")}</span>
            </button>
          `).join("")}
        </div>
      `)}
      ${settingsSection("Grid", `
        <label class="switch-row"><span>Show weekday labels</span><input type="checkbox" data-action="toggle-setting" data-key="showWeekdays" ${s.showWeekdays ? "checked" : ""}></label>
        <label class="switch-row"><span>Show future days</span><input type="checkbox" data-action="toggle-setting" data-key="showFutureDays" ${s.showFutureDays ? "checked" : ""}></label>
        <div class="segmented" role="group" aria-label="Grid layout">
          <button data-action="set-grid" data-grid="calendar" class="${s.gridLayout === "calendar" ? "selected" : ""}">Calendar</button>
          <button data-action="set-grid" data-grid="custom" class="${s.gridLayout === "custom" ? "selected" : ""}">Fixed rows</button>
        </div>
        <div class="segmented grid-density-control" role="group" aria-label="Grid density">
          ${["dense", "comfortable", "large"].map((density) => `
            <button data-action="set-density" data-density="${density}" class="${s.gridDensity === density ? "selected" : ""}">${labelDensity(density)}</button>
          `).join("")}
        </div>
        <label class="field-row"><span>Cells per row</span><input type="number" min="5" max="15" value="${s.customColumns}" data-action="set-columns"></label>
      `)}
      ${settingsSection("Logging", `
        <label class="field-row"><span>Default duration</span><input type="number" min="1" max="600" value="${s.defaultDuration}" data-action="set-default-duration"><em>min</em></label>
        <label class="switch-row"><span>Haptic feedback</span><input type="checkbox" data-action="toggle-setting" data-key="haptics" ${s.haptics ? "checked" : ""}></label>
      `)}
      ${settingsSection("Activities", `
        <div class="activity-manager">
          ${state.activities.map((activity) => `
            <div class="manage-row">
              <span>${iconSvg(activity.icon)} ${escapeHtml(activity.name)}</span>
              <button class="danger-text" data-action="delete-activity" data-id="${activity.id}">Delete</button>
            </div>
          `).join("")}
        </div>
        <button class="full-button" data-action="open-add">${plusIcon()} Add activity</button>
      `)}
      ${settingsSection("Accessibility", `
        <label class="switch-row"><span>Reduced motion</span><input type="checkbox" data-action="toggle-setting" data-key="reducedMotion" ${s.reducedMotion ? "checked" : ""}></label>
        <button class="full-button quiet" data-action="export-data">${downloadIcon()} Export local data</button>
      `)}
    </div>
  `;
}

function settingsSection(title, body) {
  return `<section class="settings-section"><h3>${title}</h3>${body}</section>`;
}

function renderInsights() {
  const stats = allStats();
  const top = stats.strongest;
  const tab = state.ui.insightTab || "summary";
  return `
    <div class="sheet-head">
      <div><h2>AI Insights</h2><p>Summary, charts, advice, and areas to improve.</p></div>
      <button class="icon-button" data-action="close-sheet" aria-label="Close insights">${xIcon()}</button>
    </div>
    <div class="insight-tabs" role="tablist" aria-label="Insight tabs">
      ${["summary", "charts", "feedback", "improve"].map((name) => `
        <button data-action="set-insight-tab" data-tab="${name}" class="${tab === name ? "selected" : ""}">${labelInsightTab(name)}</button>
      `).join("")}
    </div>
    ${renderInsightTab(tab, stats, top)}
  `;
}

function renderInsightTab(tab, stats, top) {
  if (tab === "charts") return renderChartsTab();
  if (tab === "feedback") return `<div class="advice-list">${renderAdvice()}</div>`;
  if (tab === "improve") return renderImprovementTab();
  return `
    <div class="insight-hero">
      <span>Momentum score</span>
      <strong>${stats.avgConsistency}%</strong>
      <p>${top ? `Your summary: ${top.activity.name} is your strongest activity this month.` : "Add an activity to begin."}</p>
    </div>
    <div class="detail-grid compact">
      ${metric("Deep work", `${stats.totalHours}h`)}
      ${metric("Active logs", stats.activeDays)}
      ${metric("Activities", state.activities.length)}
      ${metric("Best", top ? top.activity.name : "None")}
    </div>
    <div class="legend-row">
      <span>Less</span>
      ${[1, 2, 3, 4, 5].map((level) => `<i data-level="${level}"></i>`).join("")}
      <span>More</span>
    </div>
  `;
}

function renderChartsTab() {
  const weekdays = weekdayStats();
  return `
    <section class="chart-card">
      <h3>Weekly rhythm</h3>
      <div class="weekday-chart">
        ${weekdays.map((item) => `
          <div class="weekday-bar">
            <b style="height:${Math.max(8, item.percent)}%"></b>
            <span>${item.day}</span>
          </div>
        `).join("")}
      </div>
    </section>
    <div class="mini-chart">
      ${state.activities.map((activity) => {
        const item = activityStats(activity);
        return `
          <button class="bar-row" data-action="open-activity" data-id="${activity.id}">
            <span>${iconSvg(activity.icon)} ${escapeHtml(activity.name)}</span>
            <i><b style="width:${item.consistency}%"></b></i>
            <em>${item.consistency}%</em>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderImprovementTab() {
  if (!state.activities.length) {
    return `<article class="advice-card"><strong>No data yet</strong><p>Add an activity and log a few days first.</p></article>`;
  }
  return `
    <div class="advice-list">
      ${state.activities.map((activity) => {
        const stats = activityStats(activity);
        return `
          <article class="advice-card">
            <strong>${escapeHtml(activity.name)}</strong>
            <p>${activityImprovement(activity, stats)}</p>
            <div class="improvement-metrics">
              <span>${stats.missedDays} gaps</span>
              <span>${stats.spikeRatio}x spike ratio</span>
              <span>${minutesLabel(activity.target)} target</span>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderAdvice() {
  if (!state.activities.length) return `<p>Add one activity and Momentum will start finding patterns.</p>`;
  return state.activities.map((activity) => {
    const stats = activityStats(activity);
    let text = `${activity.name} has ${minutesLabel(stats.total)} logged this month.`;
    if (stats.consistency < 35) text = `${activity.name} needs a lower-friction plan. Try a 15 minute default for the next few days.`;
    if (stats.consistency >= 70) text = `${activity.name} is becoming stable. Keep the default duration realistic so the grid stays honest.`;
    if (stats.best > stats.avg * 2 && stats.avg > 0) text = `${activity.name} has a few high-effort spikes. A steadier baseline may feel better than chasing big days.`;
    return `<article class="advice-card"><strong>${escapeHtml(activity.name)}</strong><p>${text}</p></article>`;
  }).join("");
}

function renderLog(activity) {
  if (!activity) return "";
  const date = state.ui.activeDate || dateKey(new Date());
  if (date > dateKey(new Date())) {
    return `
      <div class="sheet-head">
        <div><h2>Future day locked</h2><p>${date}</p></div>
        <button class="icon-button" data-action="close-sheet" aria-label="Close log">${xIcon()}</button>
      </div>
      <article class="advice-card large">
        <strong>Log when the day arrives</strong>
        <p>Momentum only records real effort. Future cells stay visible for the month layout, but they cannot be edited.</p>
      </article>
    `;
  }
  const current = activity.logs[date] || "";
  return `
    <div class="sheet-head">
      <div><h2>Log ${escapeHtml(activity.name)}</h2><p>${date}</p></div>
      <button class="icon-button" data-action="close-sheet" aria-label="Close log">${xIcon()}</button>
    </div>
    <div class="duration-grid">
      ${state.settings.quickDurations.map((duration) => `
        <button data-action="save-duration" data-duration="${duration}">${duration}m</button>
      `).join("")}
    </div>
    <label class="duration-input">
      <span>Custom duration</span>
      <input id="custom-duration" type="number" inputmode="numeric" min="0" max="900" value="${current}" placeholder="${state.settings.defaultDuration}">
      <em>minutes</em>
    </label>
    <div class="sheet-actions">
      <button class="full-button quiet" data-action="clear-duration">Clear</button>
      <button class="full-button" data-action="save-custom-duration">Save duration</button>
    </div>
  `;
}

function renderActivityDetail(activity) {
  if (!activity) return "";
  const stats = activityStats(activity);
  return `
    <div class="sheet-head">
      <div><h2>${escapeHtml(activity.name)}</h2><p>${escapeHtml(activity.category)} insights</p></div>
      <button class="icon-button" data-action="close-sheet" aria-label="Close activity details">${xIcon()}</button>
    </div>
    <div class="detail-grid">
      ${metric("Consistency", `${stats.consistency}%`)}
      ${metric("Total", minutesLabel(stats.total))}
      ${metric("Average", minutesLabel(stats.avg))}
      ${metric("Best day", minutesLabel(stats.best))}
    </div>
    <article class="advice-card large">
      <strong>Area of improvement</strong>
      <p>${activityImprovement(activity, stats)}</p>
    </article>
    <button class="full-button" data-action="open-log" data-id="${activity.id}">${plusIcon()} Log ${escapeHtml(activity.name)}</button>
  `;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function activityImprovement(activity, stats) {
  if (stats.consistency < 35) return `Make ${activity.name} easier to start. Set the default log to 15 minutes and aim for more visible cells, not bigger numbers.`;
  if (stats.spikeRatio >= 2.5) return `Your best day is much larger than your average. This is useful effort, but students and devs usually improve faster with repeatable sessions than rare heroic pushes.`;
  if (stats.avg > activity.target * 1.5) return `Your sessions are strong. Consider a smaller daily baseline so consistency does not depend on high-energy days.`;
  if (stats.streak >= 4) return `This activity has momentum. Protect the next session by logging it early in the day.`;
  return `Keep the next log small and reliable. The grid rewards showing up before it rewards intensity.`;
}

function renderAddActivity() {
  return `
    <div class="sheet-head">
      <div><h2>Add activity</h2><p>One thing you want to see compound.</p></div>
      <button class="icon-button" data-action="close-sheet" aria-label="Close add activity">${xIcon()}</button>
    </div>
    <form class="add-form" data-action="create-activity">
      <label><span>Name</span><input name="name" required maxlength="28" placeholder="Reading"></label>
      <label><span>Category</span><input name="category" required maxlength="22" placeholder="Learning"></label>
      <label><span>Daily target</span><input name="target" type="number" min="1" max="600" value="60"></label>
      <label><span>Icon</span>
        <select name="icon">
          <option value="code">Code</option>
          <option value="nodes">DSA</option>
          <option value="run">Running</option>
          <option value="book">Reading</option>
          <option value="dumbbell">Gym</option>
          <option value="meditate">Mindfulness</option>
          <option value="music">Music</option>
          <option value="edit">Writing</option>
          <option value="search">Research</option>
        </select>
      </label>
      <button class="full-button" type="submit">Create activity</button>
    </form>
  `;
}

function renderToastLayer() {
  return `<div class="toast-layer" aria-live="polite"></div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });
  document.querySelectorAll('input[data-action="toggle-setting"]').forEach((element) => {
    element.addEventListener("change", handleAction);
  });
  document.querySelectorAll('input[data-action="set-columns"], input[data-action="set-default-duration"]').forEach((element) => {
    element.addEventListener("change", handleAction);
  });
  const form = document.querySelector('form[data-action="create-activity"]');
  if (form) form.addEventListener("submit", handleCreateActivity);
  if (state.ui.sheet === "log") {
    const input = document.getElementById("custom-duration");
    input?.focus();
  }
}

function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;
  if (["open-log", "open-day", "delete-activity", "open-activity"].includes(action)) event.stopPropagation();

  const id = target.dataset.id;
  const date = target.dataset.date;

  if (action === "open-settings") return openSheet("settings", null, "light");
  if (action === "open-insights") return openSheet("insights", null, "light");
  if (action === "open-add") return openSheet("add", null, "light");
  if (action === "open-activity") return openSheet("activity", id, "light");
  if (action === "open-log") return openSheet("log", id, "light");
  if (action === "open-day") return openSheet("log", id, "light", date);
  if (action === "close-sheet") return setState((draft) => { draft.ui.sheet = null; draft.ui.activeActivityId = null; });
  if (action === "set-mode") return setSetting("mode", target.dataset.mode, "medium");
  if (action === "set-palette") return setSetting("palette", target.dataset.palette, "medium");
  if (action === "set-grid") return setSetting("gridLayout", target.dataset.grid, "light");
  if (action === "set-density") return setSetting("gridDensity", target.dataset.density, "light");
  if (action === "set-insight-tab") return setInsightTab(target.dataset.tab);
  if (action === "toggle-setting") return setSetting(target.dataset.key, target.checked, "light");
  if (action === "set-columns") return setSetting("customColumns", clamp(Number(target.value), 5, 15), "light");
  if (action === "set-default-duration") return setSetting("defaultDuration", clamp(Number(target.value), 1, 600), "light");
  if (action === "save-duration") return saveDuration(Number(target.dataset.duration));
  if (action === "save-custom-duration") return saveDuration(Number(document.getElementById("custom-duration")?.value || state.settings.defaultDuration));
  if (action === "clear-duration") return saveDuration(0);
  if (action === "delete-activity") return deleteActivity(id);
  if (action === "export-data") return exportData();
}

function openSheet(sheet, activityId, feedback, activeDate = dateKey(new Date())) {
  if (sheet === "log" && activeDate > dateKey(new Date())) {
    haptic("warning");
    showToast("Future days are locked");
    return;
  }
  haptic(feedback);
  setState((draft) => {
    draft.ui.sheet = sheet;
    draft.ui.activeActivityId = activityId;
    draft.ui.activeDate = activeDate;
  });
}

function setInsightTab(tab) {
  haptic("light");
  setState((draft) => {
    draft.ui.insightTab = tab;
  });
}

function setSetting(key, value, feedback) {
  haptic(feedback);
  setState((draft) => {
    draft.settings[key] = value;
  });
}

function saveDuration(minutes) {
  const safeMinutes = clamp(Math.round(minutes || 0), 0, 900);
  if (state.ui.activeDate > dateKey(new Date())) {
    haptic("warning");
    showToast("Future days are locked");
    return;
  }
  haptic(safeMinutes ? "medium" : "warning");
  setState((draft) => {
    const activity = draft.activities.find((item) => item.id === draft.ui.activeActivityId);
    if (!activity) return;
    if (safeMinutes === 0) delete activity.logs[draft.ui.activeDate];
    else activity.logs[draft.ui.activeDate] = safeMinutes;
    draft.ui.sheet = null;
  });
  showToast(safeMinutes ? `Logged ${minutesLabel(safeMinutes)}` : "Log cleared");
}

function deleteActivity(id) {
  haptic("warning");
  setState((draft) => {
    draft.activities = draft.activities.filter((activity) => activity.id !== id);
  });
}

function exportData() {
  haptic("light");
  const blob = new Blob([JSON.stringify({ activities: state.activities, settings: state.settings }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "momentum-data.json";
  link.click();
  URL.revokeObjectURL(url);
}

function handleCreateActivity(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name")).trim();
  if (!name) return;
  haptic("medium");
  setState((draft) => {
    draft.activities.push({
      id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      name,
      category: String(data.get("category")).trim() || "Personal",
      icon: String(data.get("icon")) || "default",
      target: clamp(Number(data.get("target")), 1, 600),
      logs: {}
    });
    draft.ui.sheet = null;
  });
}

function showToast(message) {
  requestAnimationFrame(() => {
    const layer = document.querySelector(".toast-layer");
    if (!layer) return;
    layer.innerHTML = `<div class="toast">${message}</div>`;
    setTimeout(() => {
      if (layer) layer.innerHTML = "";
    }, 1800);
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function labelMode(mode) {
  return ({ dark: "Dark", light: "Light", amoled: "AMOLED", system: "System" })[mode] || mode;
}

function labelDensity(density) {
  return ({ dense: "Dense", comfortable: "Comfort", large: "Large" })[density] || density;
}

function labelInsightTab(tab) {
  return ({ summary: "Summary", charts: "Charts", feedback: "AI", improve: "Improve" })[tab] || tab;
}

function menuIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg>';
}

function plusIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
}

function xIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
}

function sparkIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 8.8 10.8 2 12l6.8 1.2L13 22l4.2-8.8L24 12l-6.8-1.2L13 2Z"/></svg>';
}

function downloadIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>';
}

window.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  render();
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
});
