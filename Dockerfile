FROM bitnami/node:20 AS build
WORKDIR /app

ARG API

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN API=https://api-hr.cssninja.io/ pnpm build


FROM bitnami/nginx:1.25 AS prod
WORKDIR /app

COPY --from=build /app/dist .
COPY ./nginx/alpinejs.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf