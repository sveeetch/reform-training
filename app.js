const DEFAULT_PROGRAM = [
  {
    id: "fullbody-1",
    name: "Реформ фулбоди 1 (Reform fullbody 1)",
    exercises: [
      item("bench-press", "Жим штанги лежа (Barbell bench press)", "90", [7, 7, 8], "Кладу на грудь (Touch chest)", "chest"),
      item("lat-pulldown", "Тяга верхнего блока (Lat pulldown)", "85", [12, 12, 12, 12], "Параллельный широкий хват (Wide parallel grip)", "back"),
      item("lateral-raise", "Махи гантелями в стороны (Dumbbell lateral raise)", "10", [20, 20, 20], "Руки прямые (Straight arms)", "shoulders"),
      item("triceps-bar", "Трицепс с прямым грифом (Straight bar triceps pushdown)", "55", [15, 15, 15, 15], "Делай медленно. Последний сет можно 40кг x 15 (Slow tempo)", "arms"),
      item("db-curl", "Бицепс гантелью по одной (Single-arm dumbbell curl)", "25", [16, 16, 16, 15], "Последний сет можно 15кг x 15 (Drop set option)", "arms"),
      item("leg-press", "Жим ногами (Leg press)", "200", [15, 15, 15, 15], "", "legs"),
      item("seated-calf", "Икры сидя в тренажере (Seated calf raise)", "100", [15, 15, 15, 15], "", "calves")
    ]
  },
  {
    id: "fullbody-2",
    name: "Реформ фулбоди 2 (Reform fullbody 2)",
    exercises: [
      item("squat", "Присед (Squat)", "80", [13, 13, 13, 13], "Глубоко (Deep range)", "legs"),
      item("pec-deck", "Бабочка (Pec deck)", "94", [12, 12, 12, 12], "Макс вес. Сидушка на 8, сверху 2 (Max stack)", "chest"),
      item("low-row", "Тяга нижнего блока (Seated cable row)", "90", [12, 12, 12], "45+45кг (45+45kg)", "back"),
      item("shoulder-press", "Жим на плечи (Shoulder press)", "80", [15, 15, 15, 20, 30], "Гриф 20кг и 30кг блины. Потом 20кг, пустой гриф 30 (Barbell setup)", "shoulders"),
      item("french-press", "Французский жим (French press)", "30", [18, 18, 18], "", "arms"),
      item("ez-curl", "Подъем на бицепс с EZ-грифом (EZ bar curl)", "40", [12, 12, 13], "", "arms")
    ]
  },
  {
    id: "pump-day",
    name: "Памп-день (Pump day)",
    exercises: [
      item("pullups", "Подтягивания (Pull-ups)", "", [10, 10, 10], "Памп-день (Pump day)", "back"),
      item("pushups", "Отжимания (Push-ups)", "", [20, 20, 20], "Памп-день (Pump day)", "chest")
    ]
  }
];

const DEFAULT_DASHA_PROGRAM = [
  {
    id: "dasha-glutes-1",
    name: "Даша ягодицы 1 (Dasha glutes 1)",
    exercises: [
      item("dasha-hip-thrust", "Ягодичный мост со штангой (Hip thrust)", "40", [12, 12, 10, 10], "Главное упражнение на ягодицы (Main glute lift)", "glutes"),
      item("dasha-rdl", "Румынская тяга (Romanian deadlift)", "30", [12, 12, 12], "Медленно, растяжение внизу (Slow stretch)", "glutes"),
      item("dasha-abduction", "Разведение бедер в тренажере (Abduction machine)", "35", [18, 18, 18], "Разведение бедра в тренажере (Hip abduction)", "glutes"),
      item("dasha-kickback", "Отведение ноги в кроссовере (Cable kickback)", "10", [15, 15, 15], "Контроль, пауза сверху (Controlled pause)", "glutes"),
      item("dasha-plank", "Планка (Plank)", "", [45, 45, 45], "Секунды вместо повторов (Seconds instead of reps)", "core")
    ]
  },
  {
    id: "dasha-lower-2",
    name: "Даша низ 2 (Dasha lower 2)",
    exercises: [
      item("dasha-bulgarian", "Болгарские выпады (Bulgarian split squat)", "10", [12, 12, 12], "На каждую ногу (Each leg)", "legs"),
      item("dasha-leg-press", "Жим ногами с акцентом на ягодицы (Leg press glute focus)", "80", [15, 15, 15], "Стопы выше и шире (Feet high and wide)", "glutes"),
      item("dasha-glute-bridge", "Ягодичный мост (Glute bridge)", "30", [15, 15, 15], "Пауза вверху (Pause at top)", "glutes"),
      item("dasha-ham-curl", "Сгибание ног (Leg curl)", "25", [14, 14, 14], "Бицепс бедра (Hamstrings)", "legs"),
      item("dasha-calf", "Икры стоя (Standing calves)", "40", [18, 18, 18], "", "calves")
    ]
  },
  {
    id: "dasha-upper-pump",
    name: "Даша верх памп (Dasha upper pump)",
    exercises: [
      item("dasha-pulldown", "Тяга верхнего блока (Lat pulldown)", "30", [12, 12, 12], "", "back"),
      item("dasha-pec-deck", "Бабочка (Pec deck)", "25", [14, 14, 14], "", "chest"),
      item("dasha-lateral", "Махи в стороны (Lateral raise)", "4", [18, 18, 18], "", "shoulders"),
      item("dasha-triceps", "Трицепс с канатом (Rope triceps)", "15", [15, 15, 15], "", "arms")
    ]
  }
];

const DEFAULT_USERS = ["Dima", "Dasha", "Artem", "Danil", "Guest"];
const APP_SCHEMA_VERSION = 4;
const DEFAULT_PROGRAMS_BY_USER = {
  Dima: DEFAULT_PROGRAM,
  Artem: DEFAULT_PROGRAM,
  Danil: DEFAULT_PROGRAM,
  Guest: DEFAULT_PROGRAM,
  Dasha: DEFAULT_DASHA_PROGRAM
};
const CATEGORY_LABELS = {
  chest: categoryDefaultIcon("chest"),
  back: categoryDefaultIcon("back"),
  shoulders: categoryDefaultIcon("shoulders"),
  arms: categoryDefaultIcon("arms"),
  legs: categoryDefaultIcon("legs"),
  calves: categoryDefaultIcon("calves"),
  glutes: categoryDefaultIcon("glutes"),
  core: categoryDefaultIcon("core")
};

const ICON_BY_CATEGORY = CATEGORY_LABELS;

const TEXT_MIGRATIONS = new Map([
  ["Reform fullbody 1", "Реформ фулбоди 1 (Reform fullbody 1)"],
  ["Reform fullbody 2", "Реформ фулбоди 2 (Reform fullbody 2)"],
  ["Pump day", "Памп-день (Pump day)"],
  ["Dasha glutes 1", "Даша ягодицы 1 (Dasha glutes 1)"],
  ["Dasha lower 2", "Даша низ 2 (Dasha lower 2)"],
  ["Dasha upper pump", "Даша верх памп (Dasha upper pump)"],
  ["Жим штанги лежа", "Жим штанги лежа (Barbell bench press)"],
  ["Тяга верх блока", "Тяга верхнего блока (Lat pulldown)"],
  ["Гантели на плечи махи", "Махи гантелями в стороны (Dumbbell lateral raise)"],
  ["Трицепс прямой гриф", "Трицепс с прямым грифом (Straight bar triceps pushdown)"],
  ["Бицепс гантели по одной", "Бицепс гантелью по одной (Single-arm dumbbell curl)"],
  ["Жим ногами", "Жим ногами (Leg press)"],
  ["Икры сидя тренажер", "Икры сидя в тренажере (Seated calf raise)"],
  ["Присед", "Присед (Squat)"],
  ["Бабочка", "Бабочка (Pec deck)"],
  ["Тяга нижн блока", "Тяга нижнего блока (Seated cable row)"],
  ["Жим плечи", "Жим на плечи (Shoulder press)"],
  ["Французкий жим", "Французский жим (French press)"],
  ["Кривая штанга", "Подъем на бицепс с EZ-грифом (EZ bar curl)"],
  ["Подтягивания", "Подтягивания (Pull-ups)"],
  ["Отжимания", "Отжимания (Push-ups)"],
  ["Hip thrust", "Ягодичный мост со штангой (Hip thrust)"],
  ["Romanian deadlift", "Румынская тяга (Romanian deadlift)"],
  ["Abduction machine", "Разведение бедер в тренажере (Abduction machine)"],
  ["Cable kickback", "Отведение ноги в кроссовере (Cable kickback)"],
  ["Plank", "Планка (Plank)"],
  ["Bulgarian split squat", "Болгарские выпады (Bulgarian split squat)"],
  ["Leg press glute focus", "Жим ногами с акцентом на ягодицы (Leg press glute focus)"],
  ["Glute bridge", "Ягодичный мост (Glute bridge)"],
  ["Leg curl", "Сгибание ног (Leg curl)"],
  ["Standing calves", "Икры стоя (Standing calves)"],
  ["Lat pulldown", "Тяга верхнего блока (Lat pulldown)"],
  ["Pec deck", "Бабочка (Pec deck)"],
  ["Lateral raise", "Махи в стороны (Lateral raise)"],
  ["Rope triceps", "Трицепс с канатом (Rope triceps)"],
  ["Кладу на грудь", "Кладу на грудь (Touch chest)"],
  ["Параллельный широкий хват", "Параллельный широкий хват (Wide parallel grip)"],
  ["Руки прямые", "Руки прямые (Straight arms)"],
  ["Памп день", "Памп-день (Pump day)"],
  ["Главное упражнение на ягодицы", "Главное упражнение на ягодицы (Main glute lift)"],
  ["Медленно, растяжение внизу", "Медленно, растяжение внизу (Slow stretch)"],
  ["Разведение бедра в тренажере", "Разведение бедра в тренажере (Hip abduction)"],
  ["Контроль, пауза сверху", "Контроль, пауза сверху (Controlled pause)"],
  ["Секунды вместо повторов", "Секунды вместо повторов (Seconds instead of reps)"],
  ["На каждую ногу", "На каждую ногу (Each leg)"],
  ["Стопы выше и шире", "Стопы выше и шире (Feet high and wide)"],
  ["Пауза вверху", "Пауза вверху (Pause at top)"],
  ["Бицепс бедра", "Бицепс бедра (Hamstrings)"]
]);

const els = {
  syncStatus: document.querySelector("#syncStatus"),
  userSelect: document.querySelector("#userSelect"),
  editUserBtn: document.querySelector("#editUserBtn"),
  userNameInput: document.querySelector("#userNameInput"),
  renameUserBtn: document.querySelector("#renameUserBtn"),
  addGuestBtn: document.querySelector("#addGuestBtn"),
  deleteUserBtn: document.querySelector("#deleteUserBtn"),
  startSessionBtn: document.querySelector("#startSessionBtn"),
  daySwitch: document.querySelector("#daySwitch"),
  sessionState: document.querySelector("#sessionState"),
  skipDayBtn: document.querySelector("#skipDayBtn"),
  exerciseList: document.querySelector("#exerciseList"),
  historyList: document.querySelector("#historyList"),
  refreshBtn: document.querySelector("#refreshBtn"),
  progressExercise: document.querySelector("#progressExercise"),
  progressChart: document.querySelector("#progressChart"),
  statsGrid: document.querySelector("#statsGrid"),
  programEditor: document.querySelector("#programEditor"),
  addDayBtn: document.querySelector("#addDayBtn"),
  resetProgramBtn: document.querySelector("#resetProgramBtn"),
  dialog: document.querySelector("#exerciseDialog"),
  dialogTitle: document.querySelector("#dialogTitle"),
  exerciseName: document.querySelector("#exerciseName"),
  exerciseMachine: document.querySelector("#exerciseMachine"),
  exerciseCategory: document.querySelector("#exerciseCategory"),
  exerciseIcon: document.querySelector("#exerciseIcon"),
  saveExerciseBtn: document.querySelector("#saveExerciseBtn"),
  userDialog: document.querySelector("#userDialog"),
  confirmDialog: document.querySelector("#confirmDialog"),
  confirmTitle: document.querySelector("#confirmTitle"),
  confirmText: document.querySelector("#confirmText"),
  confirmCancelBtn: document.querySelector("#confirmCancelBtn"),
  confirmOkBtn: document.querySelector("#confirmOkBtn"),
  mediaDialog: document.querySelector("#mediaDialog"),
  mediaTitle: document.querySelector("#mediaTitle"),
  mediaImage: document.querySelector("#mediaImage"),
  mediaHint: document.querySelector("#mediaHint"),
  mediaImageLink: document.querySelector("#mediaImageLink"),
  mediaVideoLink: document.querySelector("#mediaVideoLink")
};

let state = {
  programsByUser: loadLocal("reform-programs-by-user", DEFAULT_PROGRAMS_BY_USER),
  sessions: loadLocal("reform-sessions", []),
  users: loadLocal("reform-users", DEFAULT_USERS),
  selectedDay: loadLocal("reform-selected-day", "fullbody-1"),
  selectedUser: loadLocal("reform-user", DEFAULT_USERS[0]),
  currentSessionId: loadLocal("reform-current-session", ""),
  editingExerciseId: null,
  editingProgramDayId: null,
  onlineReady: false
};
let syncTimer = null;
let swipeState = null;

applyUserFromUrl();
normalizeState();

function categoryDefaultIcon(category) {
  return {
    chest: "barbell",
    back: "cable",
    shoulders: "dumbbell",
    arms: "dumbbell",
    legs: "legs",
    calves: "legs",
    glutes: "glutes",
    core: "core"
  }[category] || "machine";
}

function item(id, name, weight, reps, note, category, icon = categoryDefaultIcon(category)) {
  return {
    id,
    name,
    machine: note,
    category,
    icon,
    sets: reps.map((rep, index) => ({
      id: `${id}-set-${index + 1}`,
      weight,
      reps: String(rep),
      done: false
    }))
  };
}

function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function applyUserFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const urlUser = params.get("user");
  if (!urlUser) return;
  const matchedUser = state.users.find(user => user.toLowerCase() === urlUser.toLowerCase()) || urlUser;
  state.selectedUser = matchedUser;
}

function syncUserToUrl() {
  const url = new URL(window.location.href);
  if (url.searchParams.get("user") === state.selectedUser) return;
  url.searchParams.set("user", state.selectedUser);
  window.history.replaceState({}, "", url);
}

function normalizeState() {
  let changed = false;
  if (state.users.includes("David")) {
    state.users = state.users.map(user => user === "David" ? "Dima" : user);
    if (state.selectedUser === "David") state.selectedUser = "Dima";
    changed = true;
  }
  DEFAULT_USERS.forEach(user => {
    if (!state.users.includes(user)) {
      state.users.push(user);
      changed = true;
    }
  });
  if (!state.programsByUser || Array.isArray(state.programsByUser)) {
    state.programsByUser = structuredClone(DEFAULT_PROGRAMS_BY_USER);
    changed = true;
  }
  if (state.program) {
    state.programsByUser.Dima = state.program;
    delete state.program;
    changed = true;
  }
  Object.entries(DEFAULT_PROGRAMS_BY_USER).forEach(([user, program]) => {
    if (!state.programsByUser[user]?.length) {
      state.programsByUser[user] = structuredClone(program);
      changed = true;
    }
  });
  state.users.forEach(user => {
    if (!state.programsByUser[user]) {
      state.programsByUser[user] = structuredClone(DEFAULT_PROGRAM);
      changed = true;
    }
    if (restoreEmptyDefaultDays(user)) changed = true;
    if (migrateProgramText(state.programsByUser[user])) changed = true;
    if (normalizeExerciseIcons(state.programsByUser[user])) changed = true;
  });
  if (normalizeSessionIcons()) changed = true;
  if (!state.users.includes(state.selectedUser)) {
    state.selectedUser = state.users[0] || "Dima";
    changed = true;
  }
  if (!currentProgram().some(day => day.id === state.selectedDay)) {
    state.selectedDay = currentProgram()[0]?.id || "";
    changed = true;
  }
  state.needsSave = Boolean(state.needsSave || changed);
}

function normalizeExerciseIcons(program) {
  let changed = false;
  program.forEach(day => {
    day.exercises.forEach(exercise => {
      if (!exercise.icon) {
        exercise.icon = ICON_BY_CATEGORY[exercise.category] || "machine";
        changed = true;
      }
    });
  });
  return changed;
}

function normalizeSessionIcons() {
  let changed = false;
  state.sessions.forEach(session => {
    session.exercises?.forEach(exercise => {
      if (!exercise.icon) {
        exercise.icon = ICON_BY_CATEGORY[exercise.category] || "machine";
        changed = true;
      }
    });
  });
  return changed;
}

function migrateProgramText(program) {
  let changed = false;
  program.forEach(day => {
    const nextDayName = TEXT_MIGRATIONS.get(day.name) || day.name;
    if (nextDayName !== day.name) changed = true;
    day.name = nextDayName;
    day.exercises.forEach(exercise => {
      const nextName = TEXT_MIGRATIONS.get(exercise.name) || exercise.name;
      const nextMachine = TEXT_MIGRATIONS.get(exercise.machine) || exercise.machine;
      if (nextName !== exercise.name || nextMachine !== exercise.machine) changed = true;
      exercise.name = nextName;
      exercise.machine = nextMachine;
    });
  });
  return changed;
}

function restoreEmptyDefaultDays(user) {
  let changed = false;
  const defaults = DEFAULT_PROGRAMS_BY_USER[user] || DEFAULT_PROGRAM;
  const program = state.programsByUser[user];
  program.forEach((day, index) => {
    const defaultDay = defaults.find(item => item.id === day.id) || defaults[index];
    if (defaultDay && (!day.exercises || day.exercises.length === 0)) {
      day.exercises = structuredClone(defaultDay.exercises);
      changed = true;
    }
  });
  return changed;
}

function saveLocal() {
  localStorage.setItem("reform-programs-by-user", JSON.stringify(state.programsByUser));
  localStorage.setItem("reform-sessions", JSON.stringify(state.sessions));
  localStorage.setItem("reform-users", JSON.stringify(state.users));
  localStorage.setItem("reform-selected-day", JSON.stringify(state.selectedDay));
  localStorage.setItem("reform-user", JSON.stringify(state.selectedUser));
  localStorage.setItem("reform-current-session", JSON.stringify(state.currentSessionId));
}

function supabaseConfig() {
  const config = window.REFORM_CONFIG || {};
  return {
    url: (config.supabaseUrl || "").replace(/\/$/, ""),
    key: config.supabaseAnonKey || ""
  };
}

async function api(path, options = {}) {
  const config = supabaseConfig();
  if (!config.url || !config.key) throw new Error("Supabase is not configured");
  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(await response.text());
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function syncFromCloud() {
  try {
    const rows = await api("workout_state?id=eq.reform&select=*");
    if (rows[0]?.payload) {
      const cloudPayload = migrateCloudPayload(rows[0].payload);
      state = {
        ...state,
        programsByUser: cloudPayload.programsByUser,
        sessions: cloudPayload.sessions,
        users: cloudPayload.users,
        selectedDay: cloudPayload.selectedDay,
        selectedUser: cloudPayload.selectedUser,
        currentSessionId: cloudPayload.currentSessionId,
        onlineReady: true
      };
      normalizeState();
      if (cloudPayload.needsSave || state.needsSave) await syncToCloud();
    } else {
      await syncToCloud();
      state.onlineReady = true;
    }
    status("Онлайн-синхронизация", "online");
  } catch (error) {
    state.onlineReady = false;
    status("Локально до Supabase", "local");
  }
  render();
}

async function syncToCloud() {
  saveLocal();
  const payload = {
    id: "reform",
    payload: {
      schemaVersion: APP_SCHEMA_VERSION,
      programsByUser: state.programsByUser,
      sessions: state.sessions,
      users: state.users,
      selectedDay: state.selectedDay,
      selectedUser: state.selectedUser,
      currentSessionId: state.currentSessionId
    },
    updated_at: new Date().toISOString()
  };
  try {
    await api("workout_state", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { Prefer: "resolution=merge-duplicates,return=representation" }
    });
    state.onlineReady = true;
    state.needsSave = false;
    status("Онлайн-синхронизация", "online");
  } catch {
    state.onlineReady = false;
    status("Сохранено локально", "local");
  }
}

function migrateCloudPayload(payload) {
  if (payload.schemaVersion !== APP_SCHEMA_VERSION) {
    return {
      schemaVersion: APP_SCHEMA_VERSION,
      programsByUser: structuredClone(DEFAULT_PROGRAMS_BY_USER),
      sessions: [],
      users: structuredClone(DEFAULT_USERS),
      selectedDay: "fullbody-1",
      selectedUser: "Dima",
      currentSessionId: "",
      needsSave: true
    };
  }
  return {
    programsByUser: payload.programsByUser || migrateProgramPayload(payload.program),
    sessions: payload.sessions || [],
    users: payload.users?.length ? payload.users : structuredClone(DEFAULT_USERS),
    selectedDay: payload.selectedDay || "fullbody-1",
    selectedUser: payload.selectedUser || "Dima",
    currentSessionId: payload.currentSessionId || "",
    needsSave: false
  };
}

function migrateProgramPayload(program) {
  if (!program?.length) return state.programsByUser;
  return {
    ...structuredClone(DEFAULT_PROGRAMS_BY_USER),
    Dima: structuredClone(program),
    Artem: structuredClone(program),
    Danil: structuredClone(program),
    Guest: structuredClone(program),
    Dasha: structuredClone(DEFAULT_DASHA_PROGRAM)
  };
}

function status(text, mode) {
  els.syncStatus.textContent = text;
  els.syncStatus.className = `sync-pill ${mode}`;
}

function sessionLabel(statusValue) {
  return {
    active: "активна",
    completed: "завершена",
    skipped: "пропущена"
  }[statusValue] || statusValue;
}

function currentProgram() {
  return state.programsByUser[state.selectedUser] || state.programsByUser.Dima || DEFAULT_PROGRAM;
}

function currentDay() {
  const program = currentProgram();
  return program.find(day => day.id === state.selectedDay) || program[0];
}

function currentSession() {
  return state.sessions.find(session => session.id === state.currentSessionId && session.status === "active");
}

function startSession() {
  if (currentSession()) {
    finishSession();
    return;
  }
  const day = currentDay();
  const session = {
    id: crypto.randomUUID(),
    dayId: day.id,
    dayName: day.name,
    user: state.selectedUser,
    date: new Date().toISOString(),
    status: "active",
    exercises: structuredClone(day.exercises)
  };
  state.sessions.unshift(session);
  state.currentSessionId = session.id;
  persist();
}

function finishSession() {
  const session = currentSession();
  if (!session) return;
  session.status = "completed";
  session.finishedAt = new Date().toISOString();
  state.currentSessionId = "";
  persist();
}

async function skipDay() {
  const confirmed = await confirmAction({
    title: "Пропустить день?",
    text: `Записать "${currentDay().name}" для ${state.selectedUser} как пропущенный день?`
  });
  if (!confirmed) return;
  const day = currentDay();
  state.sessions.unshift({
    id: crypto.randomUUID(),
    dayId: day.id,
    dayName: day.name,
    user: state.selectedUser,
    date: new Date().toISOString(),
    status: "skipped",
    exercises: []
  });
  state.currentSessionId = "";
  persist();
}

function persist() {
  saveLocal();
  render();
  syncToCloud();
}

function scheduleSyncToCloud(delay = 2200) {
  saveLocal();
  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    syncToCloud();
  }, delay);
}

function flushScheduledSync() {
  if (!syncTimer) return;
  window.clearTimeout(syncTimer);
  syncTimer = null;
  syncToCloud();
}

function persistWithTransition() {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      saveLocal();
      render();
    });
    syncToCloud();
    return;
  }
  persist();
}

function confirmAction({ title, text, okText = "Подтвердить" }) {
  return new Promise(resolve => {
    els.confirmTitle.textContent = title;
    els.confirmText.textContent = text;
    els.confirmOkBtn.textContent = okText;
    const cleanup = () => {
      els.confirmOkBtn.removeEventListener("click", onOk);
      els.confirmCancelBtn.removeEventListener("click", onCancel);
      els.confirmDialog.removeEventListener("cancel", onCancel);
    };
    const onOk = () => {
      cleanup();
      els.confirmDialog.close();
      resolve(true);
    };
    const onCancel = () => {
      cleanup();
      els.confirmDialog.close();
      resolve(false);
    };
    els.confirmOkBtn.addEventListener("click", onOk);
    els.confirmCancelBtn.addEventListener("click", onCancel);
    els.confirmDialog.addEventListener("cancel", onCancel);
    els.confirmDialog.showModal();
  });
}

function render() {
  updateAppChrome();
  renderUsers();
  renderDays();
  renderWorkout();
  renderHistory();
  renderProgressOptions();
  renderProgress();
  renderProgramEditor();
}

function updateAppChrome() {
  document.body.classList.toggle("session-active", Boolean(currentSession()));
}

function closeSwipeRows(exceptRow = null) {
  document.querySelectorAll(".set-row.swipe-delete").forEach(row => {
    if (row !== exceptRow) row.classList.remove("swipe-delete");
  });
}

function setupSessionObserver() {
  const panel = document.querySelector(".session-panel");
  if (!panel || typeof IntersectionObserver === "undefined") return;
  const observer = new IntersectionObserver(entries => {
    const entry = entries[0];
    document.body.classList.toggle("session-offscreen", !entry.isIntersecting);
  }, { threshold: 0.12 });
  observer.observe(panel);
}

function renderUsers() {
  els.userSelect.innerHTML = state.users.map(user => `<option value="${user}">${user}</option>`).join("");
  if (!state.users.includes(state.selectedUser)) state.selectedUser = state.users[0] || DEFAULT_USERS[0];
  els.userSelect.value = state.selectedUser;
  els.userNameInput.value = state.selectedUser;
  syncUserToUrl();
}

function renderDays() {
  const day = currentDay();
  els.daySwitch.innerHTML = currentProgram().map(programDay => {
    const active = programDay.id === state.selectedDay ? "active" : "";
    return `<button class="tab day-btn ${active}" data-day="${programDay.id}" type="button">${programDay.name}</button>`;
  }).join("");
}

function renderWorkout() {
  const session = currentSession();
  els.sessionState.textContent = session ? `${sessionLabel(session.status)} · ${session.user}` : "Не начата";
  els.startSessionBtn.textContent = session ? "Завершить тренировку" : "Начать тренировку";
  els.startSessionBtn.classList.toggle("primary", !session);
  els.startSessionBtn.classList.toggle("secondary", Boolean(session));
  const exercises = session?.exercises || currentDay().exercises;
  els.exerciseList.innerHTML = exercises.map((exercise, index) => exerciseCard(exercise, index, Boolean(session))).join("");
}

function exerciseCard(exercise, index, hasSession) {
  const nextPendingSetIndex = exercise.sets.findIndex(set => !set.done);
  const sets = exercise.sets.map((set, setIndex) => {
    const isNextPendingSet = hasSession && !set.done && setIndex === nextPendingSetIndex;
    const rowClass = [set.done ? "done" : "", isNextPendingSet ? "next" : ""].filter(Boolean).join(" ");
    const checkClass = ["check-btn", set.done ? "active" : "", isNextPendingSet ? "next" : ""].filter(Boolean).join(" ");
    return `
    <div class="set-row ${rowClass}" data-exercise="${exercise.id}" data-set="${set.id}">
      <div class="set-number">${setIndex + 1}</div>
      <input inputmode="decimal" aria-label="Вес" value="${escapeHtml(set.weight)}" data-field="weight" placeholder="кг">
      <input inputmode="numeric" aria-label="Повторы" value="${escapeHtml(set.reps)}" data-field="reps" placeholder="повт.">
      <button class="${checkClass}" data-action="toggle-set" type="button" aria-label="${set.done ? "Снять отметку" : "Отметить подход"}">${iconSvg("check")}</button>
      ${hasSession ? `<button class="row-delete danger" data-action="delete-set" type="button" aria-label="Удалить подход">${iconSvg("trash")}</button>` : ""}
      ${hasSession ? `<button class="set-delete" data-action="delete-set" type="button" aria-label="Удалить подход">${iconSvg("trash")}<span>Удалить</span></button>` : ""}
    </div>
  `;
  }).join("");

  return `
    <article class="exercise-card" data-exercise="${exercise.id}">
      <div class="exercise-head">
        <div class="exercise-title">
          <span class="machine-icon">${iconSvg(exercise.icon || ICON_BY_CATEGORY[exercise.category] || "machine", exercise.category)}</span>
          <div>
            <h3>${escapeHtml(exercise.name)}</h3>
            <p class="muted">${escapeHtml(exercise.machine || "Без заметки")}</p>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="icon-action" data-action="media" type="button" aria-label="Фото">${iconSvg("image")}</button>
          ${hasSession ? `
            <button class="icon-action" data-action="move-up" ${index === 0 ? "disabled" : ""} type="button" aria-label="Вверх">${iconSvg("up")}</button>
            <button class="icon-action" data-action="move-down" type="button" aria-label="Вниз">${iconSvg("down")}</button>
            <button class="icon-action" data-action="replace" type="button" aria-label="Заменить">${iconSvg("edit")}</button>
            <button class="icon-action danger danger-soft" data-action="skip-exercise" type="button" aria-label="Пропустить">${iconSvg("close")}</button>
          ` : ""}
        </div>
      </div>
      <div class="sets">${sets}</div>
      ${hasSession ? `<button class="add-set-btn" data-action="add-set" type="button">${iconSvg("plus")}<span>Добавить подход</span></button>` : ""}
    </article>
  `;
}

function renderHistory() {
  if (!state.sessions.length) {
    els.historyList.innerHTML = `<div class="empty">Общих тренировок пока нет.</div>`;
    return;
  }
  els.historyList.innerHTML = state.sessions.slice(0, 20).map(session => {
    const canCopy = session.status === "completed" && session.exercises.length;
    return `
      <div class="history-row" data-session="${session.id}">
        <div>
          <strong>${escapeHtml(session.dayName)}</strong>
          <p class="muted">${escapeHtml(sessionTimeText(session))} · ${escapeHtml(session.user)}</p>
        </div>
        <div class="history-actions">
          <span class="badge">${sessionLabel(session.status)}</span>
          ${canCopy ? `<button class="ghost" data-copy-session="${session.id}" type="button">Скопировать</button>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

function sessionTimeText(session) {
  const started = new Date(session.date).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  if (!session.finishedAt) return `старт ${started}`;
  const finished = new Date(session.finishedAt).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  return `${started} → ${finished}`;
}

function sessionVolume(session) {
  return session.exercises.reduce((sum, exercise) => {
    return sum + summarySets(exercise).reduce((setSum, set) => setSum + Number(set.weight || 0) * Number(set.reps || 0), 0);
  }, 0);
}

function summarySets(exercise) {
  const doneSets = exercise.sets.filter(set => set.done);
  return doneSets.length ? doneSets : exercise.sets.filter(set => set.weight || set.reps);
}

function formatSessionText(session) {
  const started = new Date(session.date).toLocaleString("ru-RU");
  const finished = session.finishedAt ? new Date(session.finishedAt).toLocaleString("ru-RU") : "";
  const lines = [
    `${session.user} — ${session.dayName}`,
    finished ? `${started} → ${finished}` : started,
    ""
  ];

  session.exercises.forEach(exercise => {
    const sets = summarySets(exercise);
    if (!sets.length) return;
    const setText = sets.map(set => {
      const weight = set.weight ? `${set.weight}кг` : "свой вес (bodyweight)";
      const reps = set.reps ? `x ${set.reps}` : "";
      return `${weight} ${reps}`.trim();
    }).join(", ");
    lines.push(`${exercise.name}: ${setText}`);
  });

  lines.push("");
  lines.push(`Объем (Volume): ${Math.round(sessionVolume(session))} кг`);
  return lines.join("\n");
}

async function copySession(sessionId) {
  const session = state.sessions.find(item => item.id === sessionId);
  if (!session) return;
  const text = formatSessionText(session);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  const button = document.querySelector(`[data-copy-session="${sessionId}"]`);
  if (button) {
    button.textContent = "Скопировано";
    setTimeout(() => {
      button.textContent = "Скопировать";
    }, 1400);
  }
}

function renderProgressOptions() {
  const names = [...new Set(currentProgram().flatMap(day => day.exercises.map(exercise => exercise.name)))];
  const selected = els.progressExercise.value || names[0] || "";
  els.progressExercise.innerHTML = names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  els.progressExercise.value = names.includes(selected) ? selected : names[0] || "";
}

function renderProgress() {
  const name = els.progressExercise.value;
  const points = [];
  state.sessions.slice().reverse().forEach(session => {
    session.exercises.forEach(exercise => {
      if (exercise.name !== name) return;
      const topWeight = Math.max(...exercise.sets.map(set => Number(set.weight || 0)));
      const volume = exercise.sets.reduce((sum, set) => sum + Number(set.weight || 0) * Number(set.reps || 0), 0);
      points.push({ label: new Date(session.date).toLocaleDateString("ru-RU"), topWeight, volume });
    });
  });
  drawChart(points);
  const best = Math.max(0, ...points.map(point => point.topWeight));
  const totalVolume = points.reduce((sum, point) => sum + point.volume, 0);
  els.statsGrid.innerHTML = [
    stat("Тренировки", points.length),
    stat("Лучший вес", `${best} кг`),
    stat("Общий объем", `${Math.round(totalVolume)} кг`)
  ].join("");
}

function stat(label, value) {
  return `<div class="stat"><p class="muted">${label}</p><h3>${value}</h3></div>`;
}

function drawChart(points) {
  const canvas = els.progressChart;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#171d22";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#303a40";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const y = 36 + i * 68;
    ctx.beginPath();
    ctx.moveTo(46, y);
    ctx.lineTo(canvas.width - 28, y);
    ctx.stroke();
  }
  if (!points.length) {
    ctx.fillStyle = "#9ca6a7";
    ctx.font = "24px sans-serif";
    ctx.fillText("Пока нет данных", 46, 190);
    return;
  }
  const max = Math.max(...points.map(point => point.topWeight), 1);
  const xStep = (canvas.width - 92) / Math.max(points.length - 1, 1);
  ctx.strokeStyle = "#e7ff55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = 46 + index * xStep;
    const y = 318 - (point.topWeight / max) * 260;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  points.forEach((point, index) => {
    const x = 46 + index * xStep;
    const y = 318 - (point.topWeight / max) * 260;
    ctx.fillStyle = "#e7ff55";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f2f0e8";
    ctx.font = "14px sans-serif";
    ctx.fillText(`${point.topWeight}kg`, x - 16, y - 14);
  });
}

function renderProgramEditor() {
  els.programEditor.innerHTML = currentProgram().map(day => `
    <div class="panel day-editor" data-program-day="${day.id}">
      <div class="panel-head day-editor-head">
        <input class="day-name-input" value="${escapeHtml(day.name)}" data-rename-day="${day.id}" aria-label="Training day name">
        <div class="day-editor-actions">
          <span class="badge">${day.exercises.length} упражнений</span>
          <button class="ghost danger subtle-icon-btn" data-delete-day="${day.id}" type="button" aria-label="Удалить день" title="Удалить день">${iconSvg("trash")}</button>
        </div>
      </div>
      <div class="day-switch">
        ${day.exercises.map(exercise => `
          <button class="ghost day-btn program-exercise-btn" data-edit-program="${day.id}" data-exercise="${exercise.id}" type="button">
            <span class="program-exercise-icon">${iconSvg(exercise.icon || ICON_BY_CATEGORY[exercise.category] || "machine")}</span>
            <span>${escapeHtml(exercise.name)}</span>
          </button>
        `).join("")}
      </div>
      <button class="add-set-btn program-add-btn" data-add-program-exercise="${day.id}" type="button">${iconSvg("plus")}<span>Добавить упражнение</span></button>
    </div>
  `).join("");
}

function openUserDialog() {
  els.userNameInput.value = state.selectedUser;
  els.userDialog.showModal();
}

function openMediaDialog(exercise) {
  if (!exercise) return;
  const query = cleanExerciseQuery(exercise.name);
  const imageUrl = `https://source.unsplash.com/900x600/?${encodeURIComponent(`${query},gym exercise`)}`;
  const imageSearch = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${query} exercise form`)}`;
  const videoSearch = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${query} exercise technique`)}`;
  els.mediaTitle.textContent = exercise.name;
  els.mediaImage.src = imageUrl;
  els.mediaImage.alt = exercise.name;
  els.mediaHint.textContent = "Превью может быть примерным. Для точной техники открой картинки или видео по названию упражнения.";
  els.mediaImageLink.href = imageSearch;
  els.mediaVideoLink.href = videoSearch;
  els.mediaDialog.showModal();
}

function cleanExerciseQuery(name) {
  const english = name.match(/\(([^)]+)\)/)?.[1];
  return english || name.replace(/\([^)]*\)/g, "").trim();
}

function activeExerciseList() {
  const session = currentSession();
  return session ? session.exercises : currentDay().exercises;
}

function mutateExercise(exerciseId, callback) {
  const list = activeExerciseList();
  const index = list.findIndex(exercise => exercise.id === exerciseId);
  if (index >= 0) callback(list, index);
  persist();
}

function updateSetField(exerciseId, setId, field, value) {
  const exercise = activeExerciseList().find(item => item.id === exerciseId);
  const set = exercise?.sets.find(item => item.id === setId);
  if (set) set[field] = value;
}

function openExerciseDialog(exercise = null, programDayId = null) {
  state.editingExerciseId = exercise?.id || null;
  state.editingProgramDayId = programDayId;
  els.dialogTitle.textContent = exercise ? "Редактировать упражнение" : "Добавить упражнение";
  els.exerciseName.value = exercise?.name || "";
  els.exerciseMachine.value = exercise?.machine || "";
  els.exerciseCategory.value = exercise?.category || "chest";
  els.exerciseIcon.value = exercise?.icon || ICON_BY_CATEGORY[exercise?.category || "chest"] || "machine";
  els.dialog.showModal();
}

function saveExerciseFromDialog() {
  const payload = {
    id: state.editingExerciseId || crypto.randomUUID(),
    name: els.exerciseName.value.trim(),
    machine: els.exerciseMachine.value.trim(),
    category: els.exerciseCategory.value,
    icon: els.exerciseIcon.value || ICON_BY_CATEGORY[els.exerciseCategory.value] || "machine",
    sets: [
      { id: crypto.randomUUID(), weight: "", reps: "", done: false },
      { id: crypto.randomUUID(), weight: "", reps: "", done: false },
      { id: crypto.randomUUID(), weight: "", reps: "", done: false }
    ]
  };
  if (!payload.name) return;
  if (state.editingProgramDayId && state.editingExerciseId) {
    const day = currentProgram().find(item => item.id === state.editingProgramDayId);
    const index = day.exercises.findIndex(exercise => exercise.id === state.editingExerciseId);
    payload.sets = day.exercises[index].sets;
    day.exercises[index] = payload;
    persist();
  } else if (state.editingProgramDayId) {
    const day = currentProgram().find(item => item.id === state.editingProgramDayId);
    day?.exercises.push(payload);
    persist();
  } else if (state.editingExerciseId) {
    mutateExercise(state.editingExerciseId, (list, index) => {
      payload.sets = list[index].sets;
      list[index] = payload;
    });
  } else {
    activeExerciseList().push(payload);
    persist();
  }
  state.editingProgramDayId = null;
  els.dialog.close();
}

function renameCurrentUser() {
  const nextName = els.userNameInput.value.trim();
  if (!nextName || nextName === state.selectedUser) {
    els.userDialog.close();
    return;
  }
  if (state.users.includes(nextName)) {
    state.selectedUser = nextName;
    els.userDialog.close();
    persist();
    return;
  }
  const oldName = state.selectedUser;
  state.users = state.users.map(user => user === oldName ? nextName : user);
  state.programsByUser[nextName] = state.programsByUser[oldName] || structuredClone(DEFAULT_PROGRAM);
  delete state.programsByUser[oldName];
  state.sessions.forEach(session => {
    if (session.user === oldName) session.user = nextName;
  });
  state.selectedUser = nextName;
  els.userDialog.close();
  persist();
}

async function deleteCurrentUser() {
  if (state.users.length <= 1) {
    await confirmAction({
      title: "Нельзя удалить",
      text: "Должен остаться хотя бы один пользователь.",
      okText: "Понятно"
    });
    return;
  }
  const confirmed = await confirmAction({
    title: `Удалить ${state.selectedUser}?`,
    text: "Пользователь и его программа исчезнут из списка. История тренировок останется.",
    okText: "Удалить"
  });
  if (!confirmed) return;
  const deletedUser = state.selectedUser;
  state.users = state.users.filter(user => user !== deletedUser);
  delete state.programsByUser[deletedUser];
  if (currentSession()?.user === deletedUser) state.currentSessionId = "";
  state.selectedUser = state.users[0];
  state.selectedDay = currentProgram()[0]?.id || "";
  els.userDialog.close();
  persist();
}

function addGuestUser() {
  const base = "Guest";
  let index = state.users.filter(user => user.startsWith(base)).length + 1;
  let name = `${base} ${index}`;
  while (state.users.includes(name)) {
    index += 1;
    name = `${base} ${index}`;
  }
  state.users.push(name);
  state.programsByUser[name] = structuredClone(DEFAULT_PROGRAM);
  state.selectedUser = name;
  state.selectedDay = state.programsByUser[name][0].id;
  persist();
}

function addTrainingDay() {
  const name = prompt("Название тренировочного дня", "Новый день (New day)")?.trim();
  if (!name) return;
  const id = `day-${crypto.randomUUID()}`;
  currentProgram().push({
    id,
    name,
    exercises: [
      item(`exercise-${crypto.randomUUID()}`, "Новое упражнение (New exercise)", "", [12, 12, 12], "Отредактируй меня (Edit me)", "legs")
    ]
  });
  state.selectedDay = id;
  persistWithTransition();
}

async function deleteTrainingDay(dayId) {
  const program = currentProgram();
  const day = program.find(item => item.id === dayId);
  if (!day) return;
  if (program.length <= 1) {
    await confirmAction({
      title: "Нельзя удалить",
      text: "В программе должен остаться хотя бы один тренировочный день.",
      okText: "Понятно"
    });
    return;
  }
  const confirmed = await confirmAction({
    title: "Удалить день?",
    text: `Удалить "${day.name}" из программы пользователя ${state.selectedUser}?`,
    okText: "Удалить"
  });
  if (!confirmed) return;
  const index = program.findIndex(item => item.id === dayId);
  program.splice(index, 1);
  if (state.selectedDay === dayId) state.selectedDay = program[0].id;
  persistWithTransition();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function iconSvg(name, label = "") {
  const title = label ? `<title>${escapeHtml(label)}</title>` : "";
  const icons = {
    barbell: `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="6" y1="8" x2="6" y2="16"></line><line x1="9" y1="9" x2="9" y2="15"></line><line x1="15" y1="9" x2="15" y2="15"></line><line x1="18" y1="8" x2="18" y2="16"></line>`,
    dumbbell: `<path d="M7 7l10 10"></path><path d="M5 9l4-4"></path><path d="M15 19l4-4"></path><path d="M3.5 10.5l7-7"></path><path d="M13.5 20.5l7-7"></path>`,
    cable: `<path d="M6 4h12"></path><path d="M8 4v6"></path><path d="M16 4v6"></path><path d="M9 10h6l-1 10h-4z"></path>`,
    machine: `<rect x="5" y="4" width="14" height="16" rx="2"></rect><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M9 20v-4"></path><path d="M15 20v-4"></path>`,
    legs: `<path d="M9 3v7l-3 10"></path><path d="M15 3v7l3 10"></path><path d="M7 20h4"></path><path d="M13 20h4"></path>`,
    glutes: `<path d="M12 20c-4 0-7-3-7-7 0-3 2-6 5-7"></path><path d="M12 20c4 0 7-3 7-7 0-3-2-6-5-7"></path><path d="M12 7v13"></path>`,
    core: `<path d="M9 3h6l2 5-1 12H8L7 8z"></path><path d="M9 9h6"></path><path d="M9 13h6"></path><path d="M10 17h4"></path>`,
    bodyweight: `<circle cx="12" cy="5" r="2"></circle><path d="M12 7v6"></path><path d="M7 10h10"></path><path d="M9 20l3-7 3 7"></path>`,
    image: `<rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="M7 17l4-4 3 3 2-2 2 3"></path>`,
    up: `<path d="M12 19V5"></path><path d="M6 11l6-6 6 6"></path>`,
    down: `<path d="M12 5v14"></path><path d="M18 13l-6 6-6-6"></path>`,
    edit: `<path d="M4 20h4l11-11-4-4L4 16z"></path><path d="M13 6l4 4"></path>`,
    close: `<path d="M6 6l12 12"></path><path d="M18 6L6 18"></path>`,
    trash: `<path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path>`,
    check: `<path d="M5 12l5 5L20 7"></path>`,
    plus: `<path d="M12 5v14"></path><path d="M5 12h14"></path>`
  };
  return `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="${label ? "false" : "true"}" focusable="false">${title}${icons[name] || icons.machine}</svg>`;
}

document.addEventListener("click", async event => {
  if (!event.target.closest(".set-row")) closeSwipeRows();
  const tab = event.target.closest(".tab[data-view]");
  if (tab) {
    document.querySelectorAll(".tab[data-view]").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.view}View`).classList.add("active");
    document.body.dataset.view = tab.dataset.view;
  }

  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    state.selectedDay = dayButton.dataset.day;
    state.currentSessionId = "";
    persist();
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const card = actionButton.closest("[data-exercise]");
    const exerciseId = card?.dataset.exercise;
    const action = actionButton.dataset.action;
    if (!exerciseId) return;
    if (action === "toggle-set") {
      const row = actionButton.closest("[data-set]");
      const setId = row.dataset.set;
      mutateExercise(exerciseId, list => {
        const exercise = list.find(item => item.id === exerciseId);
        const set = exercise.sets.find(item => item.id === setId);
        set.done = !set.done;
      });
    }
    if (action === "add-set") {
      const list = activeExerciseList();
      const exercise = list.find(item => item.id === exerciseId);
      const lastSet = exercise?.sets.at(-1);
      if (exercise) {
        exercise.sets.push({
          id: crypto.randomUUID(),
          weight: lastSet?.weight || "",
          reps: lastSet?.reps || "",
          done: false
        });
        persistWithTransition();
      }
    }
    if (action === "delete-set") {
      const row = actionButton.closest("[data-set]");
      const setId = row.dataset.set;
      const confirmed = await confirmAction({
        title: "Удалить подход?",
        text: "Эта строка удалится только из текущей активной тренировки.",
        okText: "Удалить"
      });
      if (!confirmed) return;
      mutateExercise(exerciseId, list => {
        const exercise = list.find(item => item.id === exerciseId);
        if (!exercise || exercise.sets.length <= 1) return;
        exercise.sets = exercise.sets.filter(set => set.id !== setId);
      });
    }
    if (action === "move-up") {
      const list = activeExerciseList();
      const index = list.findIndex(exercise => exercise.id === exerciseId);
      if (index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
      persistWithTransition();
    }
    if (action === "move-down") {
      const list = activeExerciseList();
      const index = list.findIndex(exercise => exercise.id === exerciseId);
      if (index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
      persistWithTransition();
    }
    if (action === "media") {
      openMediaDialog(activeExerciseList().find(exercise => exercise.id === exerciseId));
    }
    if (action === "skip-exercise") {
      const confirmed = await confirmAction({
        title: "Пропустить упражнение?",
        text: "Упражнение уберется только из активной тренировки. Шаблон программы не изменится.",
        okText: "Пропустить"
      });
      if (!confirmed) return;
      mutateExercise(exerciseId, (list, index) => list.splice(index, 1));
    }
    if (action === "replace") {
      openExerciseDialog(activeExerciseList().find(exercise => exercise.id === exerciseId));
    }
  }

  const programEdit = event.target.closest("[data-edit-program]");
  if (programEdit) {
    state.selectedDay = programEdit.dataset.editProgram;
    const exercise = currentDay().exercises.find(item => item.id === programEdit.dataset.exercise);
    openExerciseDialog(exercise, programEdit.dataset.editProgram);
  }

  const addProgramExercise = event.target.closest("[data-add-program-exercise]");
  if (addProgramExercise) {
    state.selectedDay = addProgramExercise.dataset.addProgramExercise;
    openExerciseDialog(null, addProgramExercise.dataset.addProgramExercise);
  }

  const deleteDay = event.target.closest("[data-delete-day]");
  if (deleteDay) {
    deleteTrainingDay(deleteDay.dataset.deleteDay);
  }

  const copyButton = event.target.closest("[data-copy-session]");
  if (copyButton) {
    copySession(copyButton.dataset.copySession);
  }
});

document.addEventListener("input", event => {
  const dayName = event.target.closest("[data-rename-day]");
  if (dayName) {
    const day = currentProgram().find(item => item.id === dayName.dataset.renameDay);
    if (day) {
      day.name = dayName.value;
      scheduleSyncToCloud();
      renderDays();
    }
    return;
  }

  const input = event.target.closest(".set-row input");
  if (!input) return;
  const row = input.closest("[data-exercise][data-set]");
  const exerciseId = row.dataset.exercise;
  const setId = row.dataset.set;
  updateSetField(exerciseId, setId, input.dataset.field, input.value);
  scheduleSyncToCloud();
});

document.addEventListener("change", event => {
  if (event.target.closest(".set-row input") || event.target.closest("[data-rename-day]")) {
    flushScheduledSync();
  }
});

document.addEventListener("focusout", event => {
  if (event.target.closest(".set-row input") || event.target.closest("[data-rename-day]")) {
    flushScheduledSync();
  }
});

document.addEventListener("pointerdown", event => {
  const row = event.target.closest(".set-row");
  if (!row || event.target.closest("input, button")) return;
  swipeState = {
    row,
    startX: event.clientX,
    startY: event.clientY
  };
});

document.addEventListener("pointerup", event => {
  if (!swipeState) return;
  const deltaX = event.clientX - swipeState.startX;
  const deltaY = Math.abs(event.clientY - swipeState.startY);
  if (deltaX < -42 && deltaY < 30) {
    closeSwipeRows(swipeState.row);
    swipeState.row.classList.add("swipe-delete");
  } else if (deltaX > 24) {
    swipeState.row.classList.remove("swipe-delete");
  }
  swipeState = null;
});

document.addEventListener("pointercancel", () => {
  swipeState = null;
});

els.userSelect.addEventListener("change", () => {
  state.selectedUser = els.userSelect.value;
  els.userNameInput.value = state.selectedUser;
  if (!currentProgram().some(day => day.id === state.selectedDay)) {
    state.selectedDay = currentProgram()[0]?.id || "";
  }
  persist();
});
els.editUserBtn.addEventListener("click", openUserDialog);
els.renameUserBtn.addEventListener("click", renameCurrentUser);
els.addGuestBtn.addEventListener("click", addGuestUser);
els.deleteUserBtn.addEventListener("click", deleteCurrentUser);
els.startSessionBtn.addEventListener("click", startSession);
els.skipDayBtn.addEventListener("click", skipDay);
els.refreshBtn.addEventListener("click", syncFromCloud);
els.progressExercise.addEventListener("change", renderProgress);
els.exerciseCategory.addEventListener("change", () => {
  els.exerciseIcon.value = ICON_BY_CATEGORY[els.exerciseCategory.value] || "machine";
});
els.addDayBtn.addEventListener("click", addTrainingDay);
els.saveExerciseBtn.addEventListener("click", saveExerciseFromDialog);
els.resetProgramBtn.addEventListener("click", async () => {
  const confirmed = await confirmAction({
    title: "Сбросить программу?",
    text: `Вернуть дефолтную программу для ${state.selectedUser}? Текущие правки программы будут заменены.`,
    okText: "Сбросить"
  });
  if (!confirmed) return;
  state.programsByUser[state.selectedUser] = structuredClone(DEFAULT_PROGRAMS_BY_USER[state.selectedUser] || DEFAULT_PROGRAM);
  state.currentSessionId = "";
  state.selectedDay = currentProgram()[0]?.id || "";
  persist();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    registration.update();

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }).catch(error => {
    console.warn("Service worker registration failed", error);
  });
}

document.body.dataset.view = "workout";
render();
syncFromCloud();
setupSessionObserver();
