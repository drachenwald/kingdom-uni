FROM node:16-alpine
VOLUME ["/build"]
WORKDIR /build
RUN apk add --no-cache --update git
CMD yarn start