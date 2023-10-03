FROM node:latest

WORKDIR /code

COPY ./package.json ./

RUN npm install 

CMD if [ -e ./build/index.html ]; then echo "Build already created"; else npm run build; fi