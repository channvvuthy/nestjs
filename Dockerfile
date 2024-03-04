# Use the official Node.js 18 image as a base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port used by NestJS (replace 3000 with your desired port)
EXPOSE 3000

# Start the NestJS application (replace "npm run start:dev" with your start command)
CMD ["npm", "run", "start:dev"]
