# Enrique Paullada — AI Solutions Engineer
### Production-First Technical Standards

In late 2025, AI-assisted coding is the industry baseline. Apps are developed in days, but **"AI-Slop"** is reaching an all-time high. 

Avoiding AI is an unnecessary waste of competitive power. However, shipping raw AI output is a liability. This repository serves as a standard for **Modern AI Orchestration**: leveraging LLMs for high-velocity development, then applying a rigorous "Deep Cleaning" phase to ensure consistency, security, and scalability.

## 🎯 The Mission
To demonstrate how a "0→1" AI-generated prototype is hardened into a high-performance, secure **Engineered System**. This project specifically refactored legacy Vite 4 patterns and "Boolean Soup" logic into a late-2025 enterprise-ready stack.

## 🛠️ The late-2025 Tech Stack
*   **Runtime:** [Node.js 24 (LTS)](https://nodejs.org/) — Leveraging the latest V8 engine optimizations.
*   **Frontend:** [React 19](https://react.dev/) — Implementing native metadata hoisting and action-driven UI patterns.
*   **Build Tool:** [Vite 7](https://vitejs.dev/) — Rust-based minification and near-instant Hot Module Replacement (HMR).
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) — A "CSS-first" engine that eliminates legacy configuration bloat.
*   **Infrastructure:** [Vercel Serverless Functions](https://vercel.com/docs/functions) — Powering secure backend logic.
*   **Orchestration:** [n8n](https://n8n.io/) — Distributed intelligence engine for multi-agent workflows.

## 🏗️ Architectural Highlights

### 1. The Proxy Pattern (Security & Observability)
Standard Single Page Apps (SPAs) often leak internal orchestration endpoints in the browser console. This project implements a **Serverless Proxy Pattern**:
*   **Implementation:** All external triggers (like contact forms) route through a secure `/api/contact.js` perimeter.
*   **Impact:** Webhook URLs remain private, credentials never reach the client-side bundle, and the system is ready for server-side rate limiting and structured logging.

### 2. State-Machine Driven UI
Refactored the contact form logic from traditional "Boolean Soup" (`isLoading`, `isError`) into a **Finite State Machine (FSM)**.
*   **The Result:** The UI follows a deterministic `idle -> loading -> success|error` flow. This eliminates "impossible states," prevents double-submission bugs, and makes the UI highly predictable for the end user.

### 3. Native React 19 Metadata
Eliminated legacy dependencies like `react-helmet`. By leveraging React 19’s native support for hoisting `<title>` and `<meta>` tags, the project enjoys a reduced bundle size and superior SEO performance without third-party overhead.

## 🚀 Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/EnriquePaullada/EPWebsite.git
    ```
2.  **Environment Setup:**
    Ensure you are on **Node 24+**. Create a `.env.local` file in the root directory:
    ```env
    N8N_WEBHOOK_URL=your_private_n8n_endpoint
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the full-stack environment:**
    ```bash
    vercel dev
    ```
    *Note: Using `vercel dev` is required to run the local Serverless Proxy in the `/api` folder.*

---
Managed by Enrique Paullada. [Let's build the future of AI.](https://enriquepaullada.com)