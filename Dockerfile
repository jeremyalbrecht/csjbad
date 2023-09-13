FROM node:20 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

FROM node:20
COPY --from=build /app/.output/public /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
