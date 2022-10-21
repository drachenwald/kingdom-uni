FROM node:16-alpine
VOLUME ["/build"]
WORKDIR /build
RUN apk add --no-cache --update git python3 make g++
CMD yarn start