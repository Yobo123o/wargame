# 🌍 Wargame

Persistent Asynchronous MMO War Strategy Game

---

## 🎯 Project Overview

**Wargame** is a web-based persistent multiplayer strategy game where players act as independent warlords contributing to a living, continuously evolving faction war.

Players produce military formations, deploy forces to battlefronts, coordinate through clans, and influence faction-level territorial control through asynchronous strategic gameplay.

Inspired by:

- PlanetSide 2
- Foxhole
- Grand Strategy and Operational-Level War Simulations

---

## 🧠 Core Design Philosophy

Wargame emphasizes:

- Strategic timing over reflex gameplay
- Social coordination over individual hero mechanics
- Persistent war storytelling
- Controlled randomness over deterministic outcomes
- Tactical escalation and battlefield objectives
- Risk vs reward decision making
- MMO-scale cooperative warfare

---

## 🌐 Game Structure

### Persistent War Simulation

- War progresses continuously in scheduled resolution cycles
- Multiple maps and battlefronts operate simultaneously
- Territory control shifts based on faction performance
- Map conquest resets battlefield deployments and assets

---

### Player Role — Warlords

Players act as independent **Warlords** who:

- Produce military formations
- Manage readiness and equipment durability
- Deploy units strategically
- Contribute to clan and faction war efforts
- Maintain and specialize veteran formations

---

## ⚔️ Major Game Systems

---

### ⏱ War Resolution Cycles

- Battles resolve at fixed intervals (target: ~10 minutes)
- Units deployed to battlefronts participate in combat simulations
- Results determine:
    - Casualties
    - Territorial changes
    - Salvage recovery
    - Unit experience gain

---

### 👤 Unit Lifecycle

Each military formation tracks:

- Durability (Equipment Condition)
- Readiness (Fatigue / Cohesion)
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

Represents equipment integrity and battlefield wear.

- Repaired via resource investment
- Heavy units require higher repair cost and time
- Durability impacts combat effectiveness

---

### ⏱ Readiness / Fatigue System

Represents human recovery and combat readiness.

- Time-based recovery only
- Cannot be accelerated using resources
- Low readiness reduces combat performance
- Players may deploy fatigued units at increased risk

---

### ♻ Salvage System

Destroyed units may return partial resources.

- Salvage is probabilistic
- Applied instantly after battle resolution
- Never exceeds rebuild efficiency
- Provides consolation for battlefield losses

---

### 🧠 Veterancy & Specialization

Units gain experience through:

- Combat participation
- Survival
- Performance relative to expectations

Veterancy provides:

- Minor stat bonuses
- Unlockable specialization traits
- Terrain and counter-unit effectiveness

Veterancy progression is capped to prevent snowballing.

---

### 📡 Intelligence System

Intel is faction-shared and uncertainty-based.

Provides:

- Enemy force strength ranges
- Composition hints
- Confidence level indicators

Intel:

- Improves decision quality
- Does NOT directly improve combat strength
- Decays over time

---

### 🌦 Environmental Effects

Dynamic environmental modifiers influence battles.

#### Global Effects
- Day / Night Cycles
- Weather Systems
- Seasonal Modifiers

#### Local Effects
- Fog
- Terrain Hazards
- Electronic Warfare Interference Zones

---

## 🛡 Clan System

Clans provide:

- Tactical coordination
- Cooperative resource pooling
- Access to deployable battlefield assets

Clans DO NOT provide permanent stat bonuses.

Clan contributions are:

- Fully voluntary
- Transparent
- Socially incentivized

---

### 🚀 Clan Battlefield Assets

Clan assets are:

- High-impact battlefield support platforms
- Deployable to active battlefronts
- Destroyable objectives
- Removed when destroyed or map is conquered

Assets never expire passively.

#### Asset Categories

##### Command Assets
Improve coordination and readiness preservation.

##### Logistics Assets
Provide repair and sustainment support.

##### Recon Assets
Improve intelligence accuracy.

##### Offensive Assets
Provide temporary combat escalation potential.

---

## 🧭 Strategic Warfare Model

```
Units → Player Strategy
Clan Assets → Tactical Battlefield Momentum
Faction Control → Strategic War Outcome
```

---

## ⚖ War Tempo & Strategic Risk

The game enforces pacing through:

- Unit fatigue systems
- Production time requirements
- Multi-front exposure risk
- Deployment opportunity cost

---

## 🎥 Spectator & Overview Mode

The game provides a live overview interface displaying:

- Map control status
- Active battlefronts
- Clan asset deployments
- War momentum trends

Designed for streaming and spectator engagement.

---

## 🏗 Technical Architecture

Wargame is built as a TypeScript monorepo using modern web technologies.

---

### 🧱 Repository Structure

```
apps/
  web/        → Next.js frontend
  worker/     → War tick resolver and background simulation
  docs/       → Documentation and design reference

packages/
  db/         → Database schema and ORM
  game-core/  → Shared simulation and combat logic
  types/      → Shared TypeScript type definitions
  ui/         → Shared UI component library
```

---

### 🖥 Frontend

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- ShadCN UI Components (planned)

---

### 🧠 Simulation / Backend

Background worker handles:

- War tick resolution
- Combat simulation
- Unit lifecycle updates
- Clan asset state management

---

### 🗄 Database

- PostgreSQL via Supabase

---

### 🔐 Authentication

- Supabase Auth

---

### 🔄 Realtime Systems

Used for:

- Battle updates
- Map state changes
- Clan asset deployment notifications

---

## 🚀 Development Setup

### Prerequisites

- Node.js 18+
- npm
- Git

---

### Install Dependencies

```
npm install
```

---

### Run Development Environment

```
npm run dev
```

---

### Run Worker Service

```
npm run start --workspace=@wargame/worker
```

---

## 🧪 Planned Development Phases

---

### Phase 1 — Core Simulation MVP

- Unit production system
- Deployment mechanics
- Combat resolution tick
- Basic map control
- Salvage and readiness mechanics

---

### Phase 2 — Clan Warfare Systems

- Clan resource contributions
- Clan battlefield asset deployment
- Clan coordination UI

---

### Phase 3 — Advanced Warfare Systems

- Environmental effects
- Expanded intelligence systems
- Veteran specialization mechanics

---

### Phase 4 — Social & Spectator Systems

- War overview streaming mode
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

## 👨‍💻 Author

Project created and maintained by the founding developer.

---