FROM node:alpine

WORKDIR /user/app

COPY ./package.json /user/app/

RUN npm install

COPY ./ /user/app/

CMD [ "npm" , "start" ]