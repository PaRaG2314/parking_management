# 🚗 Parking Management System

A fullstack JavaScript web application for managing parking slots — featuring real-time slot tracking, vehicle entry/exit logging, and a clean client-server architecture.

---

## 📁 Project Structure

```
parking_management/
│
├── client/        # Frontend — HTML, CSS, JavaScript
└── server/        # Backend — Node.js server & API
```

---

## ✨ Features

- 🅿️ Real-time parking slot availability tracking
- 🚘 Vehicle entry and exit management
- 📋 Parking records and session logging
- 🖥️ Responsive frontend UI
- 🔗 RESTful API with client-server communication

---

## 🛠️ Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | HTML, CSS, JavaScript       |
| Backend   | Node.js, Express.js         |
| Database  | MongoDB / JSON / LocalStorage |
| API Style | REST                        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PaRaG2314/parking_management.git
   cd parking_management
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies** *(if applicable)*
   ```bash
   cd ../client
   npm install
   ```

### Running the App

1. **Start the server**
   ```bash
   cd server
   node index.js
   ```

2. **Open the client**

   Open `client/index.html` in your browser, or if using a dev server:
   ```bash
   cd client
   npm start
   ```

---

## 📌 Usage

- Open the app in your browser
- View available and occupied parking slots
- Register vehicle entry by entering vehicle details
- Log vehicle exit to free up the slot
- View parking history and session durations

---

## 📂 API Endpoints *(Server)*

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| GET    | `/slots`         | Get all parking slots        |
| POST   | `/entry`         | Register a vehicle entry     |
| PUT    | `/exit/:id`      | Log vehicle exit             |
| GET    | `/records`       | Get all parking records      |

---

## 👤 Author

**Parag Pratim Pan**  
GitHub: [@PaRaG2314](https://github.com/PaRaG2314)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
