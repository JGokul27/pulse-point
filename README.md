# Pulse Point - Doctor Appointment & Review System

## 🏥 Overview
Pulse Point is a **doctor appointment and review system** that allows patients to **book appointments, leave reviews, and rate doctors** based on their experiences. This full-stack application is built using **MERN (MongoDB, Express.js, React.js, Node.js)** with **JWT authentication and role-based access control**.

## 🚀 Live Demo
🔗 **[Live Site](https://pulse-point-nine.vercel.app)**

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS, React Router, React Icons
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Vercel (Frontend), Render (Backend)

---
## ⚙️ Features
✅ User Authentication (JWT - Patients & Doctors)  
✅ Doctor Listing & Profile Pages  
✅ Role-based Access Control (RBAC)  
✅ Patients can leave **ratings & reviews** for doctors  
✅ Appointment Booking System  
✅ Secure API with Express.js & MongoDB  
✅ Responsive UI with Tailwind CSS  
✅ Deployed on Vercel & Render  

---
## 📌 Installation Guide
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/pulse-point.git
cd pulse-point
```

### 2️⃣ Install Backend Dependencies
```sh
cd backend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `backend` folder and add:
```sh
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Backend Server
```sh
npm run dev
```

### 5️⃣ Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### 6️⃣ Set Up Frontend Environment Variables
Create a `.env` file in the `frontend` folder and add:
```sh
VITE_BASE_URL=http://localhost:5000/api/v1
```

### 7️⃣ Start the Frontend Server
```sh
npm run dev
```
Your app will be running at **http://localhost:5173** 🎉

---
## 🔗 API Endpoints
### **Authentication Routes** (`/api/v1/auth`)
- `POST /register` → Register a new user
- `POST /login` → Login user & get JWT token

### **Doctors Routes** (`/api/v1/doctors`)
- `GET /` → Get all doctors
- `GET /:id` → Get single doctor details
- `POST /:doctorId/reviews` → Add a review (Patient only)

### **User Routes** (`/api/v1/users`)
- `GET /profile/me` → Get user profile
- `PUT /profile/update` → Update profile details

---
## 🛠 Deployment
### Backend Deployment
- Deployed on **Render** → `https://your-backend.onrender.com`

### Frontend Deployment
- Deployed on **Vercel** → `https://pulse-point-nine.vercel.app`

---
## 💡 Contributing
Contributions are welcome! Follow these steps:
1. **Fork** the repository
2. **Clone** your forked repo
3. Create a **new branch** for your feature
4. Commit & push your changes
5. Open a **Pull Request** 🚀

---
## 📧 Contact
📩 **Email:** gokuljcse2021@gmail.com.com  
🐙 **GitHub:** [JGokul27](https://github.com/JGokul27)  
🔗 **Live Site:** [Pulse Point](https://pulse-point-nine.vercel.app)

---
### 🎯 Show Some Love 💙
If you like this project, don't forget to ⭐️ the repository!

---
#### 🔖 License
This project is **MIT Licensed**.

