FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY app/package*.json ./

# Install the project dependencies
RUN npm install --force

# Copy the rest of the project files to the container
COPY app .

# Expose the default port for the React application
EXPOSE 3000

# Start the React development server
CMD [ "npm", "start" ]
