# React + Vite
# 📚 LearnSphere

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A modern, responsive online learning platform built with React.js and Tailwind CSS

Currently, two official plugins are available:
## ✨ Features

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
- Responsive Navigation - Mobile-first navbar with icons
- Hero Section - Welcome banner with CTA button
- Learning Statistics - Track progress with stats cards
- Course Search - Real-time search filtering
- Category Filters - Filter by Development, Cloud, Design, DevOps
- Course Cards - Display courses with images, progress, and status
- My Learning Page - Track all courses with tabs
- Authentication Pages - Login and Register
- User Profile - Complete profile with learning preferences

## React Compiler
## 🛠️ Tech Stack

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Google Fonts (Poppins & Inter)

## Expanding the ESLint configuration
## 📂 Project Structure

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── StatsCard.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── CourseCard.jsx
│   ├── CourseGrid.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── MyLearning.jsx
│   ├── Profile.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── data/
│   └── courses.js
├── App.jsx
├── main.jsx
└── index.css

## 🚀 Getting Started

Clone repository:
git clone https://github.com/Shruti123-coder1/learnsphere.git

Install dependencies:
npm install

Start development server:
npm run dev

## 📱 Responsive

Mobile (< 640px)    - 1 column
Tablet (640-1024px) - 2 columns
Desktop (> 1024px)  - 4 columns

## 🎨 Color Palette

Primary:  #2563eb (Blue)
Success:  #10b981 (Green)
Warning:  #f59e0b (Yellow)

## 🔧 Available Scripts

npm run dev      - Start development
npm run build    - Build for production
npm run preview  - Preview build

## 👩‍💻 Author

Shruti123-coder1
GitHub: https://github.com/Shruti123-coder1

## 📄 License

MIT

---

🎓 LearnSphere - Learn Smarter, Not Harder
