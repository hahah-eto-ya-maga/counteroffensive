# Игра Контрнаступ (ContrNastup)
Браузерный 2д шутер про танки.

## Требуемые программы
Docker и дополнение Docker Compose

## Запуск проекта
Все команды нужно запускать в терминале в корневой папке проекта и при запущенном Docker Desktop

### Сборка
```bash
docker compose build
```

### Запуск собранного проекта
```bash
docker compose up -d
```

### Перезапуск проекта
```bash
docker compose restart
```

### Остановка запущенного проекта
```bash
docker compose stop
```

## Использование проекта (информация по каждому контейнеру находится в папке documents. В скобочках файл с инструкцией)
Проект содержит 5 конейтеров:
1. database - База данных - MySQL ([DB.md](./documents/DB.md))
2. api - PHP server ([SERVER.md](./documents/SERVER.md), [API.md](./server/API.md))
3. client - React приложение ([CLIENT.md](./documents/CLIENT.md))
4. phpmyadmin - PMA - Клиент для работы с БД ([PMA.md](./documents/PMA.md))
5. web_server - Nginx ([WEBSERVER.md](./documents/WEBSERVER.md))