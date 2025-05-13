# React Notes App

A modern and feature-rich note-taking web application built using **React**. This is a personal project crafted with attention to detail, designed to offer an intuitive and interactive experience for managing daily notes. From creating and editing notes to downloading them as text files, this app delivers a complete note management solution—all stored locally in your browser.

---

## Features

- **Create Notes**  
  Easily create rich-text notes with a title and description.

- **Edit Existing Notes**  
  Modify notes with real-time updates and seamless UI transitions.

- **Delete Notes**  
  Instantly remove any note with a single click.

- **Mark Notes**  
  Highlight important notes by marking/unmarking them for better visibility.

- **Dynamic Backgrounds**  
  Each note is displayed with a randomly generated background for a lively visual layout.

- **Local Storage Integration**  
  All notes are automatically saved in the browser using localStorage, ensuring persistence even after page reloads or browser restarts.

- **Download Notes as .txt Files**  
  Export individual notes as plain text files for offline use or backup.

- **Polished and Responsive UI**  
  Carefully styled interface with user-friendly controls and clear visual structure.

---

## Screenshots

### 📝 Notes Page

![Notes Page](https://ayaanfarrukh.github.io/React-Note-App/screenshot4.png)

### ➕ Create Note Page

![Create Note](https://ayaanfarrukh.github.io/React-Note-App/screenshot1.png)

### ⭐ Marked Notes Page

![Marked Notes](https://ayaanfarrukh.github.io/React-Note-App/screenshot5.png)

### ⭐ EDIT NOTES PAGE

![Marked Notes](https://ayaanfarrukh.github.io/React-Note-App/screenshot2.png)

### ⭐ VIEW NOTES PAGE

![Marked Notes](https://ayaanfarrukh.github.io/React-Note-App/screenshot3.png)

---

## Built With

- **React** – Front-end JavaScript library for building UI
- **JavaScript (ES6+)**
- **CSS** – Custom styling for components
- **React Router** – For navigation between views
- **localStorage API** – To store notes in the browser

---

## LocalStrogae Behaviour

- **Notes are saved under a localStorage key (e.g., userNotes).**
- **The app fetches notes from localStorage during initial render.**
- **Marked notes are preserved unless the user deletes them.**
