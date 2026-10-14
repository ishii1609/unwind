# 🌿 Unwind

**Unwind** is a calm, full-stack wellness web app for guided meditation, sleep tracking and journaling. The whole experience is designed to feel relaxing from the moment you open it: soft colours, nature imagery, slow animations and a distraction-free layout.

> Live demo: https://unwind-frontend.vercel.app/

---

## ✨ Features

### 🧘 Meditation
- Stream meditation music tracks fetched from the backend
- Two breathing modes:
  - **Silent guided breathing**
  - **Music + breathing guide** together
- Animated inhale / hold / exhale circle to follow along

### 📓 Journal
- Pick a mood with an emoji, add a title and write your entry
- Private, per-user entries (JWT-protected)
- View past entries and delete them

### 🌙 Sleep Tracker
- Log sleep time and wake time (`HH:MM`)
- Sleep duration is calculated automatically
- Rate your sleep quality
- Dark, night-themed UI

### 🏠 Dashboard
- Simple card-based hub linking to Meditation, Journal and Sleep

### 🔐 Authentication
- Signup / Login with hashed passwords (bcrypt) and JWT
- Protected routes, and the auth middleware also confirms the user still exists in the database, so deleted accounts can't keep using old tokens

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite), React Router, Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Auth | JWT, bcrypt |
| File uploads | Multer + ImageKit (audio storage) |

---

## 📁 Project Structure

```
unwind/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── pages/          # Login, Signup, Dashboard, Meditation, Journal, Sleep
│   │   ├── components/
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Express backend
│   ├── config/             # DB + ImageKit setup
│   ├── models/             # User, Meditation, Journal, Sleep
│   ├── controllers/
│   ├── routes/
│   ├── middleware/         # auth middleware, upload (Multer)
│   ├── server.js
│   └── package.json
│
└── README.md
```

> Adjust folder names above if your structure differs.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A MongoDB database (local or MongoDB Atlas)
- An [ImageKit](https://imagekit.io) account (for audio uploads)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/unwind.git
cd unwind
```

### 2. Backend setup
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

Start the server:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd client
npm install
npm run dev
```

The app will run at `http://localhost:5173`.

---

## 🔌 API Overview

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Create an account | No |
| POST | `/api/auth/login` | Login | No |
| GET | `/api/meditation` | Get all meditation tracks | Yes |
| POST | `/api/meditation` | Upload a track (audio file) | Yes |
| GET | `/api/journal` | Get user's journal entries | Yes |
| POST | `/api/journal` | Create an entry | Yes |
| DELETE | `/api/journal/:id` | Delete an entry | Yes |
| GET | `/api/sleep` | Get sleep logs | Yes |
| POST | `/api/sleep` | Add a sleep log | Yes |

> Update routes to match your actual endpoints.

---

## 📸 Screenshots
<img width="1105" height="882" alt="Screenshot 2026-08-23 153037" src="https://github.com/user-attachments/assets/15b908bb-5895-418f-8288-8054edcc087e" />
<img width="1298" height="885" alt="Screenshot 2026-08-23 141351" src="https://github.com/user-attachments/assets/ce7fdd17-d52a-4d71-9b8d-33ac033139ed" />
<img width="1325" height="903" alt="Screenshot 2026-08-23 142513" src="https://github.com/user-attachments/assets/e004f9e3-0e0d-4073-a890-84579111cd8d" />



---

## 🔮 Future Improvements
- Admin panel for uploading meditation tracks
- Mood and sleep trend charts
- Meditation session history and streaks
- Email verification
- Period / cycle tracker

---

## 👩‍💻 Author

**Isha Vohra**


---

## 📄 License

This project is licensed under the MIT License.
