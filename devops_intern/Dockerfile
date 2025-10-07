# ---- Stage 1: Build the Next.js app ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
# Copy all source code
COPY . .

# Build the Next.js application
RUN npm run build

# ---- Stage 2: Production image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Run the Next.js production server
CMD ["npm", "start"]

