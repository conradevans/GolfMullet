# GolfMullet frontend

This directory contains the Create React App frontend for GolfMullet. See the [root README](../README.md) for the full architecture, backend setup, environment variables, deployment settings, and security notes.

## Local development

Node.js 20 LTS and npm are recommended.

```bash
npm ci
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

The frontend currently sends API requests to the deployed Render backend at [golfmullet-backend.onrender.com](https://golfmullet-backend.onrender.com). Running the backend locally does not automatically change that target.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the local development server |
| `npm run build` | Creates the production bundle in `build/` |
| `npm test` | Starts the test runner in watch mode |
| `npm run eject` | Permanently ejects the Create React App configuration |

## Deployment

Vercel deploys this directory as the project root using `npm run build` and serves the `build/` output. The current deployment is [golfmullet-frontend.vercel.app](https://golfmullet-frontend.vercel.app).
