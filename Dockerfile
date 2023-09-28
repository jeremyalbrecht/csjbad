FROM node:20 as build

ENV BACKEND_API_URL "https://api.augny-badminton.fr/graphql"
ARG BACKEND_API_URL
ENV BACKEND_URL "https://api.augny-badminton.fr"
ARG BACKEND_URL

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

FROM nginx:1.25
COPY --from=build /app/.output/public /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
