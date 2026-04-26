# 🚀 HelpZen — AI-Powered Customer Support Platform

**HelpZen** is a full-stack, production-ready **B2B SaaS customer support platform** built using a modern **Next.js monorepo architecture**. It enables businesses to deliver intelligent, real-time support experiences powered by AI, automation, and human collaboration.

This project is inspired by real-world SaaS systems and is designed to scale with teams, customers, and complex workflows.

---

## ✨ Core Features

### 🤖 AI-Powered Support

* Real-time AI chat using intelligent agents
* Automated responses using knowledge base (RAG + embeddings)
* Smart conversation handling with escalation to humans

### 💬 Multi-Channel Communication

* Chat widget for embedding in external websites
* Voice-based support integration
* Session-based conversation tracking

### 🧠 Knowledge Base

* Document upload & indexing
* Semantic search using embeddings
* Context-aware AI responses

### 👥 Team & Workspace Management

* Multi-tenant architecture (workspaces)
* Team roles & permissions
* Organization-level isolation

### 🔐 Authentication & Security

* Secure authentication system
* API key management
* Environment-based secret handling

### 💳 SaaS Billing & Subscriptions

* Subscription-based plans
* Usage tracking
* Scalable billing model

### 📊 Dashboard & Analytics

* Operator dashboard for managing conversations
* Real-time updates
* Conversation insights

### 🧩 Developer-Friendly Widget

* Easy-to-embed chat widget
* Customizable UI
* Script-based integration

---

## 🏗️ Monorepo Architecture

HelpZen uses a **Turborepo-style monorepo** powered by pnpm workspaces.

```
apps/
  web/        → Main SaaS dashboard (Next.js)
  widget/     → Embeddable chat widget
  admin/      → Admin panel (optional)

packages/
  ui/         → Shared UI components
  math/       → Shared utility logic
  db/         → Database schema & ORM
  config/     → Shared configs (eslint, tsconfig)

```

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React
* **Styling:** Tailwind CSS v4
* **UI Components:** shadcn/ui
* **Monorepo:** Turborepo + pnpm
* **Backend / Realtime:** Convex (or custom API)
* **Auth & Teams:** Clerk
* **AI Integration:** OpenAI / Anthropic / other LLMs
* **Voice AI:** VAPI
* **Error Tracking:** Sentry
* **Storage & Secrets:** AWS

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/helpzen.git
cd helpzen
```

---

### 2. Install dependencies

```bash
pnpm install
```

---

### 3. Run development server

```bash
pnpm dev
```

---

### 4. Run specific app

```bash
pnpm --filter=web dev
pnpm --filter=widget dev
```

---

## 📦 Workspace Usage

### Add internal package

```bash
pnpm add @workspace/math --filter=web
```

### Run build across all apps

```bash
pnpm build
```

---

## 🔑 Environment Setup

Create `.env` files in each app:

```
apps/web/.env
apps/widget/.env
```

Add required keys:

* AI provider keys
* Auth provider keys
* Database connection
* API endpoints

---

## 🧠 Key Concepts Implemented

* Multi-tenant SaaS architecture
* AI agent orchestration
* Real-time data sync
* Embeddable SDK design
* Monorepo dependency management
* Scalable frontend + backend separation

---

## 📌 Roadmap

* [ ] Advanced analytics dashboard
* [ ] Role-based access control (RBAC)
* [ ] Webhooks & integrations
* [ ] Plugin system for extensions
* [ ] Mobile app (React Native / Flutter)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

MIT License

---

## 💡 Author

Built by Manoj Santra
Software Developer | MERN & Full Stack Engineer

---

## 🚀 Vision

HelpZen aims to become a **modern AI-first customer support platform** that reduces manual workload, improves response time, and enhances customer satisfaction through intelligent automation.

---
