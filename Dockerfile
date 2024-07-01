# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm i --prod
RUN pnpm add vite

# Copy the rest of the application code
COPY . .

# Build the SvelteKit application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["pnpm", "start"]
