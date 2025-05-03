# MarketsNow

**(Please note this project is in progress and not complete)**

**MarketsNow** is a full-stack stock market tracking and alerting web application. Built with a **Next.js (TypeScript)** frontend and a **Java Spring Boot** backend, this project is organised using an **Nx monorepo** for efficient and simplified development.

## Key Features

- Live market data for US indices and stocks, top gainers/losers, and most-traded stocks by volume
- Search functionality with detailed stock information pages
- User-managed watchlists
- Price alerts with email notifications via AWS SNS
- Real-time data via WebSockets
- Full TDD with unit, integration, and E2E testing using JUnit, Mockito, and Testcontainers
- CI/CD with GitHub Actions, deployed to AWS
- Monitoring with Prometheus
- Kafka event handling 

## Tech Stack

- **Monorepo Management**: Nx
- **Frontend**: Next.js 15 (React, TypeScript)
- **Backend**: Spring Boot 3, Maven, JPA, MySQL (AWS RDS)
- **Messaging**: Apache Kafka, AWS SNS
- **Authentication**: AWS Cognito (planned)
- **DevOps**: GitHub Actions, Docker, AWS, Prometheus

> This project is being built using TDD principles and will showcase production-ready architecture.

---

Thanks for checking out the project.
