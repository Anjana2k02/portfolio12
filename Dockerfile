# Build the Vite app, then serve the static files with Nginx.
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_BASE_PATH=/
ARG VITE_AUTHOR_NAME="Anjana Indunil"
ARG VITE_CONTACT_EMAIL="anjanaindu3699@gmail.com"
ARG VITE_CONTACT_PHONE="+91-9876543210"

ENV VITE_BASE_PATH=$VITE_BASE_PATH
ENV VITE_AUTHOR_NAME=$VITE_AUTHOR_NAME
ENV VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL
ENV VITE_CONTACT_PHONE=$VITE_CONTACT_PHONE

RUN npm run build

FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
