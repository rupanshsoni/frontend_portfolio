# 🚀 Rupansh Soni - Interactive 3D Portfolio (2025)

Welcome to my personal 3D frontend portfolio. This project is a testament to my passion for modern web development, creative coding, and crafting immersive user experiences. It blends standard UI with WebGL-powered 3D elements, custom GLSL shaders, fluid animations, and high-performance scrolling.

🔗 **Live Website**: [frontend-portfolio-mauve.vercel.app](https://frontend-portfolio-mauve.vercel.app/)

---

## 🌟 Key Features

- **Interactive 3D Avatar & Environments**: Built from the ground up using **Three.js**, featuring custom GLSL shaders for materials (Matcaps), dynamic lighting, and particle effects.
- **Fluid UI & Micro-animations**: Powered by **GSAP**, orchestrating complex timeline animations, page transitions, and hover effects that make the interface feel alive.
- **Smooth Scrolling**: Integrated **Lenis** to provide a buttery-smooth, momentum-based scrolling experience across all devices.
- **Immersive Audio**: Ambient soundscapes and UI sound effects handled via **Howler.js** to elevate the sensory experience.
- **Modern Architecture**: Developed with **Vue 3 (Composition API)**, strictly typed with **TypeScript**, and bundled blazingly fast using **Vite**.
- **Internationalization (i18n)**: Fully equipped to handle multiple languages out-of-the-box.
- **Performant & Responsive**: Highly optimized assets, deferred loading strategies, and responsive layouts that look great on any screen size.

---

## 🛠️ Tech Stack & Tooling

| Category | Technologies Used |
| :--- | :--- |
| **Core** | Vue 3, TypeScript, HTML5, SCSS |
| **3D & Graphics** | Three.js, WebGL, custom GLSL Shaders |
| **Animation & Motion** | GSAP (ScrollTrigger), Lenis Smooth Scroll |
| **Audio** | Howler.js |
| **Build Tool & Bundler** | Vite, vite-plugin-glsl, vue-tsc |
| **Code Quality** | Prettier, ESLint |

---

## 📁 Project Architecture

The codebase is organized modularly to separate concerns between the UI, the 3D rendering engine, and the data layers.

```text
├── public/                 # Static assets (models, textures, fonts)
├── sounds/                 # Audio files for Howler
├── src/
│   ├── animations/         # GSAP timelines and animation hooks
│   ├── assets/             # Global SCSS, mixins, and design tokens
│   ├── components/         # Reusable Vue UI components (Tags, Buttons, etc.)
│   ├── composables/        # Vue 3 Composition API utilities
│   ├── content/            # Case studies, project data, and localized content
│   ├── features/           # Distinct application features and sections
│   ├── i18n/               # Internationalization logic and dictionaries
│   ├── three/              # Core WebGL engine (Scenes, Objects, Shaders)
│   ├── types/              # Global TypeScript interfaces
│   ├── utils/              # Helper functions and Math utils
│   ├── App.vue             # Root Vue component
│   └── main.ts             # Application entry point
├── .env.example            # Environment variables blueprint
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Vite bundler configuration
```

---

## 🚀 Getting Started

To run this project locally, ensure you have Node.js (v18+) installed.

### 1. Clone the repository
```bash
git clone https://github.com/rupanshsoni/frontend_portfolio.git
cd frontend_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Copy the example environment file:
```bash
npm run env:copy-example
```

### 4. Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## 📦 Build Commands

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production into the `dist/` folder.
- `npm run preview`: Locally previews the production build.
- `npm run typecheck`: Runs `vue-tsc` to ensure type safety across the project.

---

## 🎨 Design Philosophy

This portfolio was designed to break the mold of traditional static resumes. By treating the browser as a creative canvas, I aimed to balance **aesthetic wow-factor** with **usability**. The custom GLSL shaders and GSAP animations are not just decorative—they guide the user's focus and create a memorable narrative journey through my work.

---

## 👨‍💻 About Me

I'm **Rupansh Soni**, a passionate Frontend Developer obsessed with pushing the boundaries of what's possible on the web. I specialize in bridging the gap between design and engineering, crafting pixel-perfect UIs that are as performant as they are beautiful.

📫 **Let's Connect:**
- **GitHub**: [@rupanshsoni](https://github.com/rupanshsoni)

---
*Crafted with ☕ and ❤️ by Rupansh Soni.*