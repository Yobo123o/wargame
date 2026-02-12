# 🌍 Wargame

Persistent Asynchronous MMO War Strategy Game

---

## 🎯 Project Overview

**Wargame** is a web-based persistent multiplayer strategy game where players act as independent warlords contributing to a living, continuously evolving faction war.

Players produce military formations, deploy forces to battlefronts, coordinate through clans, and influence faction-level territorial control through asynchronous strategic gameplay.

Inspired by:

- PlanetSide 2
- Foxhole
- Operational-level and grand strategy war simulations

---

## 🧠 Core Design Philosophy

Wargame emphasizes:

- Strategic timing over reflex gameplay
- Social coordination over individual hero mechanics
- Persistent war storytelling
- Controlled randomness over deterministic outcomes
- Tactical escalation and battlefield objectives
- Risk vs reward decision making

---

## 🌐 Game Structure

### Persistent War Simulation

- War progresses continuously in scheduled resolution cycles
- Multiple maps and battlefronts operate simultaneously
- Territory control shifts based on faction performance

### Player Role

Players act as **Warlords** who:

- Produce military formations
- Manage readiness and equipment durability
- Deploy units strategically
- Contribute to clan and faction war efforts

---

## ⚔️ Major Game Systems

### ⏱ War Resolution Cycles

- Battles resolve at fixed intervals (target: ~10 minutes)
- Units deployed to battlefronts participate in combat simulations
- Results determine casualties, territorial control, and salvage

---

### 👤 Unit Lifecycle

Each unit formation tracks:

- Durability (equipment condition)
- Readiness (fatigue / cohesion)
- Veterancy / Experience
- Specialization Traits

#### Deployment

Units must be manually committed by players.

#### Combat Outcomes

Units may:

- Return damaged
- Return intact
- Be permanently destroyed

---

### 🔧 Durability System

Represents equipment integrity.

- Repaired via resource investment
- Heavy units require higher repair cost and time

---

### ⏱ Readiness / Fatigue System

Represents human recovery.

- Time-based recovery only
- Cannot be accelerated with resources
- Lower readiness reduces performance and increases casualties
- Players may deploy fatigued units at risk

---

### ♻ Salvage System

Destroyed units may return small amounts of resources.

- Salvage is probabilistic
- Applied instantly after battle resolution
- Never exceeds rebuild efficiency

---

### 🧠 Veterancy & Specialization

Units gain experience through:

- Participation
- Survival
- Performance

Veterancy provides:

- Minor stat bonuses
- Unlockable terrain or tactical specialization traits
- Capped progression to prevent snowballing

---

### 📡 Intelligence System

Intel is faction-shared and uncertainty-based.

Provides:

- Enemy force strength ranges
- Composition hints
- Confidence levels

Intel:

- Improves decision quality
- Does NOT directly improve combat strength

---

### 🌦 Environmental Effects

Dynamic environmental modifiers influence battle outcomes.

#### Global Effects

- Day/Night cycles
- Weather systems
- Seasonal modifiers

#### Local Effects

- Fog
- Terrain hazards
- Electronic interference zones

---

## 🛡 Clan System

Clans provide:

- Tactical coordination
- Voluntary cooperative resource pooling
- Deployable battlefield assets

Clans DO NOT provide permanent stat bonuses.

---

### 🚀 Clan Battlefield Assets

Clan assets are:

- Powerful battlefield support tools
- Deployable to battlefronts
- Destroyable or removed upon map conquest
- Major tactical escalation events

Examples:

- Command coordination platforms
- Logistics sustainment carriers
- Recon surveillance networks
- Offensive strike platforms

---

## 🏗 Technical Architecture

Wargame is built as a TypeScript monorepo using modern full-stack web technologies.

---

### 🧱 Repository Structure

```
apps/
  web/        → Next.js frontend
  worker/     → Tick resolver + background jobs

packages/
  db/         → Database schema + ORM
  game-core/  → Shared simulation logic
  types/      → Shared TypeScript types
```

---

### 🖥 Frontend

- Next.js (App Router)
- Tailwind CSS
- TypeScript

---

### 🧠 Simulation / Backend

Background worker handles:

- War tick resolution
- Combat simulation
- Unit lifecycle updates
- Clan asset state

---

### 🗄 Database

- PostgreSQL (via Supabase or compatible provider)

---

### 🔐 Authentication

- Supabase Auth (planned)

---

### 🔄 Realtime Systems

Used for:

- Battle updates
- Map state changes
- Clan asset deployment events

---

## 🚀 Getting Started (Development)

### Prerequisites

- Node.js 18+
- pnpm
- Git

---

### Install Dependencies

```
pnpm install
```

---

### Run Development Environment

```
pnpm dev
```

---

### Run Worker Service

```
pnpm --filter worker dev
```

---

## 🧪 Planned Development Phases

### Phase 1 — Core Simulation MVP

- Unit production
- Deployment system
- Combat resolution tick
- Basic map control
- Salvage and readiness systems

---

### Phase 2 — Clan Systems

- Clan resource contributions
- Clan asset deployment
- Clan coordination UI

---

### Phase 3 — Advanced Warfare Systems

- Environmental effects
- Intel system expansion
- Veteran specialization traits

---

### Phase 4 — Social & Streaming Systems

- Spectator war overview mode
- Clan rivalry tracking
- Battle narrative reporting

---

## 🤝 Contributing

Currently early-stage and experimental.

Contribution guidelines will be added as the project stabilizes.

---

## 📜 License

TBD

---

## 🧭 Project Status

Early Design & Infrastructure Phase

---