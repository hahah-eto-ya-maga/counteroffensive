# Игра Контрнаступ (ContrNastup)
Браузерный 2д шутер про танки.

## Требуемые программы
Docker и дополнение Docker Compose

## Запуск проекта
Все команды нужно запускать в терминале в корневой папке проекта и при запущенном Docker Desktop

<<<<<<< HEAD
### Сборка
=======
<a name="build"></a>
### Сборка (Терминал)
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
```bash
docker compose build
```

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