# My Habit Tracker

A simple single-page Habit Tracker web app that helps users build daily habits, track weekly progress, and maintain streaks.

---

## How to Run

### Option 1 (Easiest)
1. Download or clone this repository
2. Open the folder in VS Code
3. Open index.html in your browser

### Option 2 (Recommended)
1. Install Live Server extension in VS Code
2. Right-click index.html
3. Click "Open with Live Server"

---

## Features

- Add new habits
- Delete habits
- Weekly grid view (7 days)
- Click to mark/unmark completion
- Automatic streak counter
- Navigate between weeks
- Highlight current day
- Data saved using browser localStorage
- Empty state when no habits exist

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No frameworks used to keep the app lightweight and simple.

---

## How It Works

Each habit is stored as an object like this:

{
  name: "Read",
  days: {
    "2026-05-22": true
  }
}

Data is saved in localStorage, so it stays even after refreshing the page.

The weekly grid is generated dynamically based on the current date.

---

## Responsive Behavior

- Works on desktop and mobile
- Table adjusts to screen size
- Layout remains readable on small screens

---

## Known Limitations

- No full keyboard navigation
- Basic UI (no animations)
- No backend (data stored only in browser)

---

## Future Improvements

- Dark mode
- Edit/rename habits
- Better mobile design
- Animations
- Backend integration
