# MarketsNow

**(Please note this project is in progress and not complete)**

**MarketsNow** is a full-stack stock market tracking and alerting web application. Built with a **Next.js (TypeScript)** frontend and a **Java Spring Boot** backend, this project is organised using an **Nx monorepo** for efficient and simplified development.

## Key Features

- Live market data for US indices and stocks, top gainers/losers, most-traded stocks by volume
- Search functionality with detailed stock information pages
- User-managed watchlists
- Price alerts with email notifications via AWS SNS
- Real-time data via WebSockets
- Full TDD with unit, integration, and E2E testing using JUnit, Mockito, and Testcontainers (not yet implemented)
- CI/CD with GitHub Actions, deployed to AWS (not yet implemented)
- Monitoring with Prometheus (not yet implemented)
- Kafka event handling (not yet implemented)

## Tech Stack

- **Monorepo Management**: Nx
- **Frontend**: Next.js 15 (React, TypeScript), Tailwind CSS v4, Shadcn UI
- **Backend**: Spring Boot 3, Maven, JPA, MySQL (AWS RDS)
- **Authentication**: AWS Cognito with AWS Amplify
- **Messaging**: Apache Kafka, AWS SNS
- **External APIs**: Finnhub, Alpha Vantage, Polygon.io, Financial Modeling Prep
- **Testing**: Jest (Frontend), JUnit & Mockito (Backend)
- **DevOps**: GitHub Actions, Docker, AWS, Prometheus

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Java JDK](https://www.oracle.com/java/technologies/downloads/) (v17 or higher)
- [Maven](https://maven.apache.org/download.cgi) (v3.8 or higher)
- [MySQL](https://dev.mysql.com/downloads/) (local development) or AWS RDS account
- [Docker](https://www.docker.com/products/docker-desktop/) (optional, for containerization)
- [Git](https://git-scm.com/downloads)

### Required External Service Accounts

You'll need accounts (free tier is sufficient to start) with the following services:

- [AWS](https://aws.amazon.com/) (Cognito, SNS, RDS)
- [Finnhub](https://finnhub.io/)
- [Alpha Vantage](https://www.alphavantage.co/)
- [Polygon.io](https://polygon.io/)
- [Financial Modeling Prep](https://financialmodelingprep.com/)

### Installation

1. Install Nx CLI globally (recommended for easier workflow):

```bash
npm install -g nx
```

2. Clone the repository:

```bash
git clone https://github.com/sidendev/markets-now.git
cd markets-now
```

3. Install dependencies:

```bash
npm install
```

### Configuration

#### Backend Environment Setup

Create a file called `env.properties` in the springboot resources directory (where there are xxx's replace with your own values):

```
# Path: apps/springboot/src/main/resources/env.properties

DB_URL=jdbc:mysql://xxxxx.eu-west-2.rds.amazonaws.com:3306/marketsnow
DB_USERNAME=xxxxx
DB_PASSWORD=xxxxx
FMP_API_KEY=xxxxx
FINNHUB_API_KEY=xxxxx
AV_API_KEY=xxxxx
```

#### Frontend Environment Setup

Create a `.env.local` file in the frontend directory (where there are xxx's replace with your own values):

```
# Path: apps/frontend/.env.local

# AWS Configuration
NEXT_PUBLIC_AWS_REGION=xxxxx
NEXT_PUBLIC_AWS_USER_POOL_ID=xxxxx
NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID=xxxxx

# API Endpoints
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Running the Application

#### Backend (Spring Boot API)

I recommend running the java springboot backend using IntelliJ IDEA:

1. Open the `markets-now` project in IntelliJ IDEA
2. Navigate to the Spring Boot main class
3. Run the application (should start on port 8080)

Alternatively, you can run it via Nx CLI:

```bash
nx serve springboot
```

#### Frontend (Next.js)

I recommend using VS Code for the frontend development:

1. Wait until the backend is running and available (Can test using postman)
2. Run the frontend development server:

```bash
# From project root
npm run dev

# Or with Nx CLI
nx serve frontend
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Testing Workflow

- **Running Tests Commands**:
  - Backend: `nx test springboot`
  - Frontend: `nx test frontend`

## Troubleshooting

- Ensure all API keys are correctly set up in the environment files
- Verify the backend is running before starting the frontend
- Check for AWS cognito configuration if having authentication issues

---

Thanks for checking out the project.
