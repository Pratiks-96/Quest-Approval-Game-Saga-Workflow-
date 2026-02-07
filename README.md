# Quest-Approval-Game-Saga-Workflow-
# Quest Approval Game with Saga Workflow

This is a **microservices-based demo app** that simulates a “request → approval → notification” workflow, like a leave approval system, gamified as a small quest game.  
It demonstrates **Saga pattern orchestration**, containerization with Docker, and deployment using **Helm + Argo CD**, with CI/CD powered by **GitHub Actions**.

---

## Services

- **leave-service** – Handles leave/quest requests.
- **approval-service** – Handles approvals/rejections.
- **notification-service** – Sends notifications when a request is approved or rejected.
- **workflow-service** – Orchestrates the saga workflow between the services.
- **frontend** – Simple UI to trigger quests and approvals.

---

## Tech Stack

- Node.js + Express
- Docker & Docker Hub
- Helm + Argo CD for deployment to Kubernetes
- Minikube for local Kubernetes testing
- GitHub Actions for CI/CD (build, push, deploy with manual approvals)

---

## Project Structure

Quest-Approval-Game-Saga-Workflow-/
├── leave-service/
├── approval-service/
├── notification-service/
├── workflow-service/
└── frontend/

CI/CD with GitHub Actions

Build & Push Docker Images
GitHub Actions automatically builds all service images and pushes them to Docker Hub.
Deploy to Kubernetes with Helm + Argo CD

Helm charts are used to deploy each service to Minikube.

Argo CD watches the repository and automatically syncs deployments after approval.
