# ─── Stage 1: Build Vite frontend ────────────────────────────────────────────
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

COPY ../frontend/package*.json ./
RUN npm ci

COPY ../frontend .
RUN npm run build

# ─── Stage 2: Build backend deps ─────────────────────────────────────────────
FROM node:20-alpine AS backend-builder

WORKDIR /app/backend

COPY package*.json ./
RUN npm ci --only=production

# ─── Stage 3: Run ────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Copy backend
COPY --from=backend-builder /app/backend/node_modules ./node_modules
COPY . .

# Copy Vite build into a folder Express can serve
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

EXPOSE 5000

CMD ["node", "src/index.js"]