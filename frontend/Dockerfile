FROM node:20

# Cria o diretório da aplicação
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install
RUN npm install  @angular/cli -g

# Copia todo o código
COPY . .

# Expondo porta do Angular
EXPOSE 4200

# Comando para rodar o Angular com host 0.0.0.0 (necessário para Docker)
CMD ["npm", "start", "--", "--host", "0.0.0.0"]