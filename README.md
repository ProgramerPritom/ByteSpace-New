# 🚀 ByteSpace New - Modern Learning Platform

A responsive, pixel-perfect web application built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, based on the Figma design assessment for the **Jr. Software Engineer (Frontend)** position.

---

## 🔗 Project Links
- **Live Demo (Vercel):** [https://bytespacenew.vercel.app/](https://bytespacenew.vercel.app/)
- **GitHub Repository:** [https://github.com/ProgramerPritom/ByteSpace-New](https://github.com/ProgramerPritom/ByteSpace-New)
- **Figma Design:** [ByteSpace New Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🌟 What Was Built

### 1. Landing Page (Required)
- **Pixel-Perfect Alignment:** Faithfully converted all Figma design elements, typography, colors, and layout spacing.
- **Hero Section:** High-impact hero with custom 3D geometric ornaments, badges, and learning progress cards.
- **Course Showcase & Filters:** Category browsing, rating badges, lesson count tags, and instructor info.
- **Growth & Features Section:** Interactive layout highlighting core platform value propositions.
- **Social Proof & Testimonials:** Student reviews with star ratings and trusted partner logo ticker.
- **Call to Action (CTA):** High-converting bottom CTA banner with floating 3D decorative shapes.
- **Responsive Layout:** Optimized across Mobile, Tablet, and Desktop screen widths.

### 2. Login & Signup Pages (Bonus / Extra Credit)
- **Shared Authentication Layout:** Created a reusable `AuthPageLayout` structure with branded backdrop grids and logo header.
- **Visual Cluster (`AuthVisualCluster`):** Reusable 3D ornament cluster with multi-layered course cards, floating stats, and student ratings.
- **Form UI:** Clean, accessible input fields, social auth buttons, and smooth navigation between Sign In and Sign Up.

### 3. Extra Pages & Enhancements
- **Course Details Page:** Comprehensive course breakdown with syllabus, video preview card, and instructor info.
- **Creator Profile Page:** Detailed instructor profile, stats, and published course catalogs.
- **Search & Filter Page:** Course search layout with interactive filter panels.
- **404 Custom Error Page:** Engaging not-found illustration and quick navigation links.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust type safety
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with Figma color palette and typography tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **Architecture Highlights:**
  - **Component-Driven Design:** Structured under `src/components/` with reusable modular components (Navbar, Footer, Auth cluster, Cards).
  - **Clean Code & Modularity:** Reusable components with well-defined TypeScript interfaces and minimal code duplication.
  - **Optimized Assets:** High-resolution assets formatted and loaded efficiently with zero console errors.

---

## 📁 Project Directory Structure

```text
ByteSpace-New/
├── public/                  # Static assets (3D ornaments, icons, course images)
│   ├── courses/
│   ├── hero/
│   └── icons/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/          # Auth route group (login, register)
│   │   ├── course-details/
│   │   ├── creator-profile/
│   │   ├── search/
│   │   ├── layout.tsx
│   │   ├── page.tsx        
│   │   └── not-found.tsx
│   └── components/          
│       ├── auth/            
│       ├── courses-section.tsx
│       ├── cta-section.tsx
│       ├── hero.tsx
│       ├── navbar.tsx
│       └── footer.tsx
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.18 or higher recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ProgramerPritom/ByteSpace-New.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ByteSpace-New
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 📌 Notes for the Reviewer

- **Reusable Component Architecture:** Core elements like `Navbar`, `Footer`, `AuthPageLayout`, and `AuthVisualCluster` are built to be easily reused and extended across multiple pages.
- **Git Workflow:** Developed following proper branching practices (`feature` branches) and pull requests for clean version control history.
- **Asset Integrity:** All 3D ornaments, course graphics, and SVGs are mapped correctly with proper fallback handling and zero broken paths.
- **Responsive Experience:** Tested across mobile (<640px), tablet (640px-1024px), and desktop (>1024px) viewports to match Figma specs.
