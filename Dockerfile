FROM node:lts-alpine

# set working directory as /app
WORKDIR /app

# install simple http server for serving static content
RUN npm install -g http-server

# copy project files and folders to the current working directory
COPY . .

RUN yarn install

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]
