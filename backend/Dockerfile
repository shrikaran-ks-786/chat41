# Use the official Node.js image as a base
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

ENV GROQ_API_KEY=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

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
