# PathFinder — Navigate Your Future, Your Way

PathFinder is a student‑focused web app that helps Hong Kong DSE students manage their academics, track their well‑being, and find community support — all in their preferred language.

## 🔍 What PathFinder Does

The app is built around two main pillars:

### 📚 My Studies
- **AI Subject Advisor** – tell the assistant your dream career and get personalised HKDSE subject recommendations.
- **Syllabus Hub** – explore subject syllabuses explained in simple English (or your native language), with key concepts broken down clearly.
- **Past Paper Translator** – instantly translate exam questions and command terms, removing language barriers during revision.

### 💚 My Wellbeing
- **Therapist Connector** – discover culturally aware professionals and book a low‑commitment first chat.
- **Mindful Journal** – write down your thoughts with an optional AI companion that offers gentle, non‑judgmental support.
- **Community Events** – find social events and meet people who truly understand your journey.

## 🛠️ Tech Stack

The project is built with modern tools to ensure a smooth, responsive, and accessible experience:

- **Vite** – fast development server and build tool
- **TypeScript** – type‑safe code
- **React 18** – component‑based UI
- **React Router DOM** – client‑side routing
- **Tailwind CSS + shadcn/ui** – consistent, customisable design
- **Framer Motion** – smooth animations
- **TanStack React Query** – efficient data fetching
- **Supabase** – backend and authentication
- **Lucide Icons** – clean icon set

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm or [bun](https://bun.sh/) (the repo contains a `bun.lockb` file)

### Clone & Install

```bash
git clone https://github.com/JSD-13/PathFinder.git
cd PathFinder
npm install
# or if you use bun:
bun install
```

### Environment Variables
Create a .env file in the root directory with your Supabase credentials:

```text
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
The app also expects a Supabase Edge Function (ai-advisor) to handle the AI chat features.

### Run the Development Server
```bash
npm run dev
# or
bun run dev
```
Open http://localhost:5173 to view the app.

### Build for Production
```bash
npm run build
npm run preview   # preview the production build locally
```

## 📦 Project Structure
```text
src/
├── pages/           # Main route pages (Index, Advisor, Studies, Journal, etc.)
├── components/      # Reusable UI components (FeatureCard, PageHeader, BottomNav, etc.)
├── hooks/           # Custom hooks (use-toast, etc.)
├── data/            # Static data (subjects, languages, therapists)
├── assets/          # Images and illustrations
├── App.tsx          # Main router and providers
└── main.tsx         # Application entry point
```

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature).

Open a Pull Request.

## 🙏 Acknowledgements
Lovable – initial project scaffolding

shadcn/ui – accessible component library

The open‑source community for all the amazing tools used in this project

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.

Made with ❤️ for HKDSE students, by students.
