# syntax=docker/dockerfile:1.4
FROM node:18 AS base
USER root
RUN npm install -g serve
WORKDIR /project

# RUN wget -qO- https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for
RUN apt update -y && apt upgrade -y
# create new user (only root can do this) and assign owenership to newly created user
RUN groupadd -g 1001 appusr \
    && useradd -r -u 1001 -g appusr appusr \
    && mkdir /home/appusr/ \
    && chown -R appusr:appusr /home/appusr/\
    && chown -R appusr:appusr /project

# switch to new created user so that appuser will be responsible for all files and has access
USER appusr:appusr
COPY --chown=appusr:appusr ["package.json", "package-lock.json", "./"]

FROM base AS dev
RUN npm install
COPY --chown=appusr:appusr . .
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN npm install
COPY --chown=appusr:appusr . .
RUN npm run build
CMD ["serve", "-s", "dist"]

#ARG NODE_VERSION=18.18.2
#
#FROM node:${NODE_VERSION}-alpine
#
## Use production node environment by default.
#ENV NODE_ENV production
#
#
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
#EXPOSE 3000
#
#CMD npm run dev

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.

#RUN --mount=type=bind,source=package.json,target=package.json \
#    --mount=type=bind,source=package-lock.json,target=package-lock.json \
#    --mount=type=cache,target=/root/.npm \
#    npm ci --omit=dev

# Run the application as a non-root user.
#USER node

# Copy the rest of the source files into the image.
#COPY . .

# Expose the port that the application listens on.
#EXPOSE 3000

# Run the application.
#CMD npm run dev
