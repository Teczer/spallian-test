FROM node:18-alpine AS dev

ENV NODE_ENV dev

WORKDIR /app

COPY . /app

RUN npm install --global pnpm
RUN pnpm install

RUN pnpm build

EXPOSE 3000

CMD [ "serve", "-s", "build" ]