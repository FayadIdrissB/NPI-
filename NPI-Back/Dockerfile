FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY src ./src

# Compile le TypeScript dans /app/dist
RUN npm run build

# Étape 2 : exécution
FROM node:18-slim

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# On copie le résultat du build précédent
COPY --from=build /app/dist ./dist

# Lance le serveur
CMD ["node", "dist/index.js"]

EXPOSE 5005