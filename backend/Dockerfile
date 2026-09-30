# ========================================================
# HDC Fashion — Production-Ready Multi-Stage Dockerfile
# Base: Node 20 Alpine (Minimal Attack Surface & Lightweight)
# ========================================================

# --- Stage 1: Dependency Installation ---
FROM node:20-alpine AS dependencies
WORKDIR /app

# Install security updates
RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

# Copy package descriptors
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && npm cache clean --force

# --- Stage 2: Production Final Image ---
FROM node:20-alpine AS runner
WORKDIR /app

# Set Production Environment
ENV NODE_ENV=production \
    PORT=5000 \
    APP_NAME=HDC_Fashion_Backend

# Install curl for Docker healthcheck
RUN apk add --no-cache curl

# Copy dependencies from Stage 1
COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./

# Copy Application Source Code
COPY src ./src

# Create and switch to non-root user (Security Best Practice)
USER node

# Expose API Port
EXPOSE 5000

# Container Healthcheck (Docker & Kubernetes integration)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start the application
CMD ["node", "src/server.js"]
