# 📝 Todo App (React)

A simple, responsive To‑Do List application built with React. This project allows users to add, edit, delete, and filter tasks, with persistent storage using localStorage. It's great for learning basic React concepts like components, state management, props, and conditional rendering.

🔗 **Live Demo:** [kingkhansk.github.io/todo-app-react](https://kingkhansk.github.io/todo-app-react)

---

## 🚀 Features

- ✅ Add new tasks  
- ✏️ Edit existing tasks  
- 🗑 Delete tasks  
- ✔️ Mark tasks as completed  
- 🔍 Filter tasks (All, Active, Completed)  
- 💾 LocalStorage data persistence  
- 📱 Responsive design  

---

## 📂 Project Structure

```
todo-app-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── package.json
├── .gitignore
└── README.md
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kingkhansk/todo-app-react.git
cd todo-app-react

# Install dependencies
npm install
# or
yarn
```

### Running Locally

```bash
npm start
# or
yarn start
```

The app will run on [http://localhost:3000](http://localhost:3000)

---

## 🛠 Usage

1. **Add Tasks** – Enter a task and press "Add".
2. **Complete Tasks** – Click the checkbox next to a task.
3. **Edit Tasks** – Click the edit icon to change a task's text.
4. **Delete Tasks** – Click the trash icon to remove a task.
5. **Filter Tasks** – Use filter buttons to view All / Active / Completed.

All changes are saved automatically to your browser’s localStorage.

---

## 🎨 Styling

The app uses basic CSS for styling (`App.css`). You can customize the layout, color scheme, or add UI frameworks such as:

- Tailwind CSS
- Bootstrap
- Material UI

---

## 🧩 Future Enhancements

- Drag and drop to reorder tasks
- Due dates or reminders
- Dark mode toggle
- User authentication
- Cloud sync (e.g., Firebase)

---

## 📜 Available Scripts

| Command           | Description                         |
|------------------|-------------------------------------|
| `npm start`      | Starts the dev server               |
| `npm run build`  | Builds the app for production       |
| `npm test`       | Runs tests (if configured)          |
| `npm run lint`   | Runs linter (if configured)         |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Make changes and commit (`git commit -m 'Add new feature'`)  
4. Push to your fork (`git push origin feature-name`)  
5. Submit a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📫 Contact

Created by [kingkhansk](https://github.com/kingkhansk)  
Feel free to reach out or open issues to improve this project.

---

**Thanks for visiting this project! 🌟**
