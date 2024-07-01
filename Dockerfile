# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the SvelteKit application
RUN npm run build

# Stage 2: Create a lean runtime image
FROM node:20-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy build artifacts from the build stage
COPY --from=build /app .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]
