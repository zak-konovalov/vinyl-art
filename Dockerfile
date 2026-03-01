# Используем Node 20 (стабильная версия)
FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем проект
COPY . .

# Собираем production
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запуск
CMD ["npm", "start"]