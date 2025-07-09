# 🚀 Employee Management System (React + Firebase)

A fully functional Employee Management web application built using **React.js**, **Firebase Firestore**, **Redux Toolkit**, **Bootstrap 5**, and **Thunk**. The system supports CRUD operations, dynamic routing, and state management — packed in a modern and smooth UI.

## 🔗 Live Demo

🌐 [Click here to view live app](employee-system-firebase.vercel.app)  
*(Replace with your deployed link)*

---


## ⚙️ Features

✅ Create, Read, Update, and Delete Employees  
✅ Firebase Firestore Integration  
✅ Redux Toolkit + Thunk for state management  
✅ Bootstrap 5 responsive layout  
✅ Form validation + clean UI/UX  
✅ Smooth gradient background & styled buttons  
✅ Routing with React Router DOM

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| React.js | Frontend UI |
| Firebase Firestore | Realtime Database |
| Redux Toolkit | Global State |
| Redux Thunk | Async logic (CRUD ops) |
| React-Bootstrap | Responsive Components |
| React Router DOM | Page Navigation |
| Axios | (Optional future HTTP requests) |

---

## 🗂️ Folder Structure

src/
├── app/
│ ├── store.js # Redux Store
│ └── firebase.js # Firebase config
│
├── components/
│ └── Navigation.jsx # Top navigation bar
│
├── features/
│ └── employees/
│ ├── employeeSlice.js
│ ├── EmployeeForm.jsx
│ ├── EmployeeTable.jsx
│ └── *.css # Custom component styles
│
├── App.jsx
├── main.jsx
└── index.css


▶️ Run Locally

# Clone the project
git clone https://github.com/Bhargavbhimani229/Employee-System-Firebase
cd employee-management-firebase

# Install dependencies
npm install

# Start development server
npm run dev


💡 Future Enhancements
🔍 Employee Search + Filter

📊 Dashboard with stats (total salary, total employees)

🌐 Deployment to Vercel / Netlify

🧾 Export to Excel / PDF

🔐 User Authentication