FROM node:14.18.1

ADD ./compose/reactjs/start.sh /
RUN sed -i 's/\r//' start.sh
RUN chmod +x start.sh

ADD . /app
WORKDIR /app

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
