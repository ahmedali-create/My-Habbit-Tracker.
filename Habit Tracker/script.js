let habits = JSON.parse(localStorage.getItem("habits")) || [];
let currentDate = new Date();

function save() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function getWeekDates(date) {
  let start = new Date(date);
  let day = start.getDay();
  start.setDate(start.getDate() - day);

  let week = [];
  for (let i = 0; i < 7; i++) {
    let d = new Date(start);
    d.setDate(start.getDate() + i);
    week.push(d.toISOString().split("T")[0]);
  }
  return week;
}

function render() {
  const body = document.getElementById("habitBody");
  const daysRow = document.getElementById("daysRow");
  const empty = document.getElementById("emptyState");

  body.innerHTML = "";
  daysRow.innerHTML = "<th>Habit</th>";

  let week = getWeekDates(currentDate);
  let today = new Date().toISOString().split("T")[0];

  week.forEach(date => {
    let th = document.createElement("th");
    th.innerText = date.slice(5);
    if (date === today) th.classList.add("today");
    daysRow.appendChild(th);
  });

  if (habits.length === 0) {
    empty.style.display = "block";
    return;
  } else {
    empty.style.display = "none";
  }

  habits.forEach((habit, index) => {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = `
      ${habit.name}
      <div class="streak">🔥 ${getStreak(habit)} days</div>
      <button onclick="deleteHabit(${index})">X</button>
    `;
    tr.appendChild(tdName);

    week.forEach(date => {
      let td = document.createElement("td");
      if (habit.days[date]) td.classList.add("checked");

      td.onclick = () => toggleHabit(index, date);
      tr.appendChild(td);
    });

    body.appendChild(tr);
  });
}

function addHabit() {
  let input = document.getElementById("habitInput");
  let name = input.value.trim();

  if (!name) return;

  habits.push({
    name,
    days: {}
  });

  input.value = "";
  save();
  render();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  save();
  render();
}

function toggleHabit(index, date) {
  let habit = habits[index];

  if (habit.days[date]) {
    delete habit.days[date];
  } else {
    habit.days[date] = true;
  }

  save();
  render();
}

function getStreak(habit) {
  let count = 0;
  let d = new Date();

  while (true) {
    let key = d.toISOString().split("T")[0];
    if (habit.days[key]) {
      count++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }

  return count;
}

function changeWeek(offset) {
  currentDate.setDate(currentDate.getDate() + offset * 7);
  render();
}

function goToCurrentWeek() {
  currentDate = new Date();
  render();
}

render();