FROM node:20 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
COPY --from=build /app/.output /app/.output
ENV NITRO_PORT=80
EXPOSE 80
CMD [ "node", ".output/server/index.mjs" ]
