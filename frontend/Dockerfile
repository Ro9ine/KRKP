# Используем официальный образ Node.js
FROM node:16 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем дополнительные зависимости (например, @mui/icons-material)
RUN npm install @mui/icons-material@5.14.0

# Копируем все файлы проекта в контейнер
COPY . .

# Убедимся, что react-scripts исполняемый
RUN chmod +x node_modules/.bin/react-scripts

# Собираем проект
RUN npm run build

# Используем легковесный сервер для запуска собранного фронтенда
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт
EXPOSE 3000

# Меняем порт NGINX на 3000
RUN sed -i 's/listen\s*80;/listen 3000;/' /etc/nginx/conf.d/default.conf

# Запускаем сервер NGINX
CMD ["nginx", "-g", "daemon off;"]
