# TaskBuddy

TaskBuddy is a simple yet effective **task management app** that includes both a **To-Do List** and a **Kanban Board**. It helps you organize your tasks efficiently and track progress seamlessly.

## Features

- 📝 Create, edit, and delete tasks
- 📋 Switch between **List View** and **Kanban Board**
- 🔥 Drag and drop tasks across different statuses
- 🔒 Secure authentication with Firebase
- 🌐 Fully responsive UI

---

## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/taskbuddy.git
cd todo
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Firebase**
Create a **.env** file in the root directory and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> ⚠️ **Important:** Don't forget to add `.env` to `.gitignore` to keep your credentials safe.

### **4. Run the App**
```bash
npm run dev
```

The app will start at **http://localhost:5173/** (default Vite port).

---

## 📦 Technologies Used
- **React.js** - Frontend
- **Firebase** - Authentication & Database
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React DnD** - Drag-and-drop functionality

---


## 💡 Acknowledgments
Thanks to all the open-source projects that inspired this app!

---

🎯 **TaskBuddy - Stay organized and get things done!** 🚀

