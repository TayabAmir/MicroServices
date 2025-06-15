# Specifying the Base image
FROM node:21-alpine
# Install Dependencies
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
# Default Command 
CMD ["npm", "start"]