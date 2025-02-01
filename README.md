# NotesVault - Secure & Self-Destructing Notes App

## 🚀 Overview
NotesVault is a secure and privacy-focused note-taking app built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to create **self-destructing** or **password-protected** notes that can be securely shared and automatically erased after a set time or view count.

## 🔑 Features
- **📝 Create Secure Notes** - Store sensitive information with encryption.
- **⏳ Self-Destructing Notes** - Auto-delete after a set time or number of views.
- **🔐 Password Protection** - Users can set a password to restrict access.
- **🔗 Shareable Links** - Generate temporary, expiring note links.
- **📜 One-Time View** - Option to delete a note after it’s read once.
- **🛡 Clipboard & Screenshot Protection** - Prevent copying or screenshots.
- **📲 Mobile-Friendly & PWA Support** - Accessible on all devices.

## 🏗 Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (with TTL Index for auto-deletion)
- **Security:** bcrypt.js (password hashing), CryptoJS (encryption)
- **Deployment:** Frontend on Vercel, Backend on Render, Database on MongoDB Atlas

## 📌 Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/notesvault.git
   cd notesvault
   ```

2. **Install Dependencies:**
   ```sh
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend/` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the Development Server:**
   ```sh
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd ../frontend
   npm run dev
   ```

5. **Access the App:**
   Open `http://localhost:5173` in your browser.

## 🚀 Deployment
- **Frontend:** Deployed on **Vercel**
- **Backend:** Hosted on **Render/Railway**
- **Database:** MongoDB Atlas (Cloud-based database)

## 🔮 Future Enhancements
- **End-to-End Encryption for Notes**
- **Two-Factor Authentication (2FA) for Protected Notes**
- **Blockchain-Based Note Storage**
- **PWA Support for Offline Access**
- **AI-Powered Note Summarization**

## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome! 🎉

---

### 💡 Have an Idea for Improvement?
Let us know! Open an issue or suggest a new feature. 🚀

