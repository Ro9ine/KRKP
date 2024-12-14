# Используем официальный образ Node.js для сборки
FROM node:16 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только package.json и package-lock.json для кеширования зависимостей
COPY package.json package-lock.json ./

# Устанавливаем ВСЕ зависимости, включая devDependencies
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Убедимся, что react-scripts доступен
RUN chmod +x node_modules/.bin/react-scripts

# Собираем проект
RUN npm run build

# Используем легковесный сервер для запуска собранного фронтенда
FROM nginx:alpine

# Копируем собранные файлы из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html/

# Открываем порт
EXPOSE 3000

# Меняем порт NGINX на 3000
RUN sed -i 's/listen\s*80;/listen 3000;/' /etc/nginx/conf.d/default.conf

# Запускаем сервер NGINX
CMD ["nginx", "-g", "daemon off;"]
