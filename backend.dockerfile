# We don't want to start from scratch.
FROM node:14-alpine

# Create an application directory
RUN mkdir -p /app
RUN mkdir -p /app/server

# The /app directory should act as the main application directory
WORKDIR /app

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY package*.json ./

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY server /app/server/

# Start the app
CMD [ "npm", "run", "dev:server"]




