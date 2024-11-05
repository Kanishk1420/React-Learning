
FROM node:18-alpine

# Setting up the work directory
WORKDIR /react1

# Installing dependencies
COPY ./package*.json /react1

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]