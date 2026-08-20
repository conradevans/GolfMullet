# GolfMullet

GolfMullet is a full-stack golf apparel storefront. Shoppers can browse products and view product details, while authenticated users can manage their account, favorites, and shopping cart.

## Architecture

| Layer | Directory | Technology | Responsibility |
| --- | --- | --- | --- |
| Web app | `frontend/` | React 19, Create React App, React Router, Fetch API | Product browsing, authentication, favorites, and cart UI |
| API | `backend/` | Node.js, Express 5, Mongoose, JWT, bcrypt | Products, users, authentication, favorites, and cart endpoints |
| Database | Hosted MongoDB | MongoDB | Product and user data |

The frontend and backend are deployed independently from the same repository. There is no root-level package script, so install dependencies and run commands from the relevant directory.

## Repository layout

```text
GolfMullet/
├── frontend/          React web application
│   ├── public/
│   └── src/
└── backend/           Express API
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

## Prerequisites

- Node.js 20 LTS
- npm
- Access to a MongoDB database

The backend declares support for Node.js versions `>=20 <23`.

## Local setup

Clone the repository:

```bash
git clone https://github.com/conradevans/GolfMullet.git
cd GolfMullet
```

### Backend

Install the locked dependencies:

```bash
cd backend
npm ci
```

Create `backend/.env` and provide the required environment variables listed below. Then start the development server:

```bash
npm run dev
```

The API uses port `5050` by default when `PORT` is not supplied.

### Frontend

In a separate terminal, install the locked dependencies and start the React development server:

```bash
cd frontend
npm ci
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

The frontend currently targets the deployed Render API at [golfmullet-backend.onrender.com](https://golfmullet-backend.onrender.com), including during local frontend development. Starting the local backend does not redirect frontend requests to it; changing that behavior requires centralizing the API base URL in frontend configuration.

## Environment variables

Backend variables belong in `backend/.env` for local development and in the Render service settings for production. Values are intentionally omitted.

| Name | Required | Purpose |
| --- | --- | --- |
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | Signs and verifies authentication tokens |
| `PORT` | No | Overrides the default API port; Render supplies this in production |

The frontend does not currently use environment variables for its API URL.

## Scripts

### Frontend

Run these commands from `frontend/`.

| Command | Description |
| --- | --- |
| `npm start` | Starts the local React development server |
| `npm run build` | Creates an optimized production build in `frontend/build/` |
| `npm test` | Starts the frontend test runner in watch mode |
| `npm run eject` | Permanently ejects the Create React App configuration |

### Backend

Run these commands from `backend/`.

| Command | Description |
| --- | --- |
| `npm start` | Starts the API with Node.js |
| `npm run dev` | Starts the API with Node.js watch mode |

The backend does not currently define automated test or lint scripts.

## API

- Production base URL: [https://golfmullet-backend.onrender.com](https://golfmullet-backend.onrender.com)
- Health check: [https://golfmullet-backend.onrender.com/api/health](https://golfmullet-backend.onrender.com/api/health)
- Product endpoints begin at `/api/products`.
- Authentication endpoints begin at `/api/auth`.
- User, favorite, and cart endpoints begin at `/api/users`.

Protected user endpoints expect a JWT in an `Authorization: Bearer <token>` request header.

## Deployment

Both services deploy from the [`main` branch of `conradevans/GolfMullet`](https://github.com/conradevans/GolfMullet/tree/main).

### Frontend — Vercel

| Setting | Value |
| --- | --- |
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Output Directory | `build` |
| Current URL | [https://golfmullet-frontend.vercel.app](https://golfmullet-frontend.vercel.app) |

### Backend — Render

| Setting | Value |
| --- | --- |
| Root Directory | `backend` |
| Build Command | `npm ci` |
| Start Command | `npm start` |
| Current URL | [https://golfmullet-backend.onrender.com](https://golfmullet-backend.onrender.com) |
| Health Check | [https://golfmullet-backend.onrender.com/api/health](https://golfmullet-backend.onrender.com/api/health) |

## Security notes

- Never commit `.env` files, database credentials, JWT secrets, or access tokens. The repository ignores local environment files.
- Keep `MONGO_URI` and `JWT_SECRET` in server-side environment settings and never log their values.
- Use a least-privilege MongoDB user and rotate credentials immediately if they are exposed.
- Keep the backend CORS allowlist synchronized with the actual local and production frontend origins.
- The frontend currently stores its JWT in `localStorage`. Treat cross-site scripting prevention as security-critical and consider a hardened cookie-based session design for future authentication work.
- Do not place secrets in frontend source code or client-visible environment variables.
