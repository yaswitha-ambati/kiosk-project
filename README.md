# kiosk-project

---

# 📄 Product Requirements Document (PRD)  
**Product Name**: Kiosk AI
**Version**: 1.0  
**Date**: October 3rd 2025  
**Author**: Product, Devops & Engineering Team  

---

## 1. 🎯 Vision  
Enable seamless, secure, and scalable digital interactions across **web, mobile, chat, and physical kiosks**—powered by a resilient microservices backend with real-time analytics, automation, and enterprise-grade observability.

---

## 2. 🧩 Scope  

### ✅ In Scope (v1.0)
- **User Channels**:
  - Web application (React)
  - Mobile app (React Native or Flutter)
  - Chatbot integrations (Slack, Microsoft Teams, WhatsApp)
  - Self-service kiosk & voice terminal support
- **Core Backend Services**:
  - Secure authentication (JWT with ES256)
  - RESTful API gateway (Nginx/API Gateway)
  - Application service (business logic)
  - PostgreSQL for transactional data
  - Redis for caching & session management
  - Asynchronous task queue (RabbitMQ or Kafka)
  - Notification service (email, SMS, push)
  - Payment processing integration
  - ML inference service (e.g., recommendations, fraud detection)
  - Centralized logging (ELK stack)
- **Worker Layer**:
  - Background task processing (Celery/RQ)
  - Inventory management service
- **Analytics**:
  - Event streaming (Kafka/RabbitMQ)
  - OLAP database (ClickHouse or TimescaleDB)
  - BI dashboards (Grafana/Metabase)
- **Infrastructure**:
  - Containerization (Docker)
  - Orchestration (Kubernetes)
  - Monitoring (Prometheus + Grafana)
  - CI/CD pipeline (GitHub Actions, GitLab CI, or similar)

### ❌ Out of Scope (v1.0)
- User registration & onboarding flows (assume pre-provisioned users)
- Multi-tenancy
- Advanced ML training pipelines (only inference)
- Mobile app store deployment
- Voice NLP engine (assume 3rd-party integration)

---

## 3. 👥 User Roles & Personas

| Role | Description | Channels Used |
|------|-------------|---------------|
| **End User** | Customer or employee interacting with the system | Web, Mobile, Chatbot, Kiosk |
| **Admin** | Internal operator managing inventory, users, or content | Web (admin portal) |
| **Data Analyst** | Views dashboards and exports reports | BI Tools (Grafana/Metabase) |
| **DevOps Engineer** | Manages deployments, monitoring, and infra | CLI, Kubernetes, CI/CD |

---

## 4. 🧱 Core Features

### 4.1 Unified Access Layer
- All user channels communicate via **HTTPS** to a central **API Gateway**.
- Gateway routes requests to appropriate services and enforces rate limiting.

### 4.2 Secure Authentication
- Users authenticate via OAuth2/password → receive **JWT signed with ES256**.
- Tokens validated by Application Service and Workers.
- Session data optionally cached in Redis.

### 4.3 Core Application Service
- Handles user profile, transactions, and business workflows.
- Reads/writes to **PostgreSQL**.
- Publishes events to **Queue** for async processing.

### 4.4 Async Task Processing
- Long-running tasks (e.g., payment confirmation, inventory sync) handled by **Workers**.
- Workers consume from **RabbitMQ/Kafka** and interact with:
  - Inventory Service
  - Notification Service
  - ML Service (e.g., “score this transaction”)

### 4.5 Notifications
- Sends emails, SMS, or in-app alerts via **Notification Service**.
- Triggered by Application Service or Workers.

### 4.6 Payments
- **Payment Service** integrates with Stripe, PayPal, or bank APIs.
- Idempotent and PCI-compliant (externalized from core app).

### 4.7 Real-Time Analytics
- User actions published to **Event Stream**.
- Stream ingested into **ClickHouse/TimescaleDB**.
- Analysts query data via **Grafana/Metabase**.

### 4.8 Observability & Infra
- All services emit structured logs → **ELK Stack**.
- Metrics scraped by **Prometheus**, visualized in **Grafana**.
- Entire platform deployed via **Docker on Kubernetes**.
- CI/CD pipeline automates testing and deployment.

---

## 5. ⚙️ Non-Functional Requirements (NFRs)

| Category | Requirement |
|--------|-------------|
| **Security** | JWT ES256, HTTPS everywhere, secrets via K8s/Vault, no hardcoded credentials |
| **Availability** | 99.9% uptime (SLA); services designed for graceful degradation |
| **Scalability** | Stateless services; horizontal scaling via K8s HPA |
| **Latency** | <500ms p95 for user-facing APIs; async for heavy ops |
| **Observability** | Logs, metrics, and traces for all services |
| **Deployability** | Zero-downtime deploys via K8s rolling updates |
| **Compliance** | GDPR-ready (data anonymization in logs/analytics) |

---

## 6. 🗺️ Technical Boundaries (Per Your Architecture)

- **Frontend**: Decoupled from backend; only communicates via API Gateway.
- **Services**: Loosely coupled; communicate via REST (sync) or Queue/Events (async).
- **Data**: 
  - **PostgreSQL**: Source of truth for user data, orders, etc.
  - **Redis**: Ephemeral cache only (never primary storage).
  - **ClickHouse/TimescaleDB**: Read-only for analytics.
- **Infra**: 
  - No service talks directly to infra—Docker/K8s abstracts it.
  - CI/CD owns build/test/deploy; Monitoring owns health visibility.

---

## 7. 📅 Release Strategy

- **Phase 1 (MVP)**: Web + Auth + App Service + PostgreSQL + Logging  
- **Phase 2**: Add Mobile, Notifications, Workers, Inventory  
- **Phase 3**: Integrate Payments, ML, Chatbots, Kiosks  
- **Phase 4**: Full Analytics Pipeline + BI Dashboards  

Each service released independently via CI/CD.

---

## 8. 📌 Success Metrics

- User login success rate ≥ 99.5%  
- API error rate < 0.1%  
- 95% of async tasks processed within 5 seconds  
- Mean time to recovery (MTTR) < 5 minutes  
- Analysts can build new dashboards in <1 hour  

---
