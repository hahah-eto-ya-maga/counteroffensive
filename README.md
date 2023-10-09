# Игра Контрнаступ (ContrNastup)
Браузерный 2д шутер про танки.

## Требуемые программы
Docker и дополнение Docker Compose

## Запуск проекта
Все команды нужно запускать в терминале в корневой папке проекта и при запущенном Docker Desktop

<<<<<<< HEAD
<<<<<<< HEAD
### Сборка
=======
<a name="build"></a>
### Сборка (Терминал)
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
=======
### Сборка
>>>>>>> parent of bc4391a ([FIX] Закончил составление README.md)
```bash
docker compose build
```

<<<<<<< HEAD
<<<<<<< HEAD
### Запуск собранного проекта
=======
<a name="up"></a>
### Запуск собранного проекта
+ Терминал
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
```bash
docker compose up -d
```
<<<<<<< HEAD
=======
![Пример запуска проекта](documents/images/readme/cmd-up-example.jpg)
+ Docker Desktop
![Пример запуска проекта в главном меню Docker Desktop](documents/images/readme/docker-desktop-up-main-menu-example.jpg)
>>>>>>> parent of f4c5c8a ([FIX] Добавил картинку лога Docker Desktop в README.md)

<<<<<<< HEAD
### Перезапуск проекта
=======
<a name="restart"></a>
### Перезапуск проекта
+ Терминал
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
```bash
docker compose restart
```
<<<<<<< HEAD
=======
![Пример перезапуска проекта](documents/images/readme/cmd-restart-example.jpg)
+ Docker Desktop
![Пример перезапуска проекта в главном меню Docker Desktop](documents/images/readme/docker-desktop-restart-main-menu-example.jpg)
>>>>>>> parent of f4c5c8a ([FIX] Добавил картинку лога Docker Desktop в README.md)

<<<<<<< HEAD
### Остановка запущенного проекта
=======
<a name="stop"></a>
### Остановка запущенного проекта
+ Терминал
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
```bash
docker compose stop
```
<<<<<<< HEAD
=======
![Пример остановки проекта](documents/images/readme/cmd-stop-example.jpg)
+ Docker Desktop
![Пример остановки проекта в главном меню Docker Desktop](documents/images/readme/docker-desktop-stop-main-menu-example.jpg)
>>>>>>> parent of f4c5c8a ([FIX] Добавил картинку лога Docker Desktop в README.md)

## Использование проекта (информация по каждому контейнеру находится в папке documents. В скобочках файл с инструкцией)
Проект содержит 5 конейтеров:
1. database - База данных - MySQL (DB.md)
2. api - PHP server (SERVER.md, API.md)
3. client - React приложение (CLIENT.md)
4. phpmyadmin - PMA - Клиент для работы с БД (PMA.md)
5. web_server - Nginx (WEBSERVER.md)
=======
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
<<<<<<< HEAD
1. database - База данных - MySQL ([DB.md](./documents/DB.md))
2. api - PHP server ([SERVER.md](./documents/SERVER.md), [API.md](./server/API.md))
3. client - React приложение ([CLIENT.md](./documents/CLIENT.md))
4. phpmyadmin - PMA - Клиент для работы с БД ([PMA.md](./documents/PMA.md))
<<<<<<< HEAD
5. web_server - Nginx ([WEBSERVER.md](./documents/WEBSERVER.md))

## Полезные ссылки внутри проекта:
1. Концепт проекта ([CONCEPT.md](./documents/CONCEPT.md))
2. Тезницеское задание ([TZ.md](./documents/TZ.md))
3. Чек-лист ([CHECK-LIST.md](./documents/CHECK-LIST.md))
>>>>>>> parent of bc4391a ([FIX] Закончил составление README.md)
=======
5. web_server - Nginx ([WEBSERVER.md](./documents/WEBSERVER.md))
>>>>>>> parent of 5e7afb0 ([ADD] Добавил SERVER.md)
=======
1. database - База данных - MySQL (DB.md)
2. api - PHP server (SERVER.md, API.md)
3. client - React приложение (CLIENT.md)
4. phpmyadmin - PMA - Клиент для работы с БД (PMA.md)
5. web_server - Nginx (WEBSERVER.md)
>>>>>>> parent of ab35341 ([FIX] Добавил ссылки в файле README.md)
