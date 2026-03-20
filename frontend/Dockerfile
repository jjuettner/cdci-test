# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ─── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

# -s: SPA mode (fallback to index.html for unknown routes)
# -l: port to listen on
CMD ["serve", "-s", "dist", "-l", "3000"]