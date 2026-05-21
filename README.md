# Delhivery Replica

A high-fidelity **logistics dashboard and tracking application** inspired by Delhivery — real-time
tracking visualization, shipment management, cost estimation, and an AI-powered logistics assistant.

## Features

- Real-time shipment tracking visualization (with geolocation permission)
- Shipment management and status updates
- Cost estimation
- AI-powered logistics assistant (Gemini)
- Charts and analytics (Recharts)

## Stack

- React + TypeScript + Vite
- `@google/genai` (Gemini SDK) — the AI assistant
- Recharts — charts
- `lucide-react` — icons

## Run locally

```bash
npm install
cp .env.example .env.local       # add your GEMINI_API_KEY
npm run dev
```

Grant **geolocation** permission when prompted (needed for the tracking map).

## Project layout

```
.
├── index.html
├── App.tsx
├── index.tsx
├── components/
├── types.ts
├── metadata.json
└── vite.config.ts
```
