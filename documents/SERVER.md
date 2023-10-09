<<<<<<< HEAD
=======
# Документ с информацией о работе с PHP сервером (API)
## Оглавление
+ [Docker Desktop](#docker-desktop)
+ [Запуск](#start)
+ [Подключение через браузер](#browser-connection)
+ [Разработка](#dev)
+ [Просмотр логов](#logs-view)
+ [Дополинтельные действия с контейнером](#other-moves)
	+ [Перезапуск](#restart)
	+ [Остановка](#stop)
<a name="docker-desktop"></a>
## Docker Desktop
Контейнер называется **api** (*counteroffensive-api*)
<a name="start"></a>
## Запуск
Этот контейнер запускается вместе со всеми контейнерами и не требует перезапуска для обновления кода
<a name="browser-connection"></a>
## Подлючение через браузер
+ [http://localhost/api/](http://localhost/api/) (Поключение с через Nginx)
+ [http://localhost:8080/](http://localhost:8080/)
![Пример подкключения к API через браузер](images/api/browser-api-connect-example.jpg)
<a name="dev"></a>
## Разработка
+ Вся разработка ведётся в папке **server**. Это общая папка с контейнером. 
+ Запускаемые скрипты находятся в папке **server/public/**
+ Модели данный из БД находятся в папке **server/models/**
+ Файл с переменными окружения и другими конфигурационными данными находится в папке **server/config/**
+ Все библиотеки находятся в папке **server/libs/**. Внутренние библиотеки находятся в папке **server/libs/inside/**. Внешние библиотеки находятся в папке **server/libs/outside/**
<a name="logs-view"></a>
## Просмотр логов
+ Через команду (Вывод последних 100 строк вывода (*--tail 100*) и нахождение в выводе (*-f*))
```bash
docker compose logs api --tail 100 -f
```
Пример вывода в терминал только что запущенного контейнера
![Пример вывода в терминал](images/api/cmd-logs-example.jpg)
Пример вывода в терминал с несколькими сделанными запросами
![Пример вывода в терминал](images/api/cmd-logs-example2.jpg)
+ Пример вывода в Docker Desktop 
![Пример вывода в Docker Desktop](images/api/docker-desktop-logs-example.jpg)
<a name="other-moves"></a>
## Дополнительные действия с контейнером
<a name="restart"></a>
+ Перезапуск
Через терминал
```bash
docker compose restart api
```
![Пример перезапуска контейнера через терминал](images/api/cmd-container-restart-example.jpg)
Через Docker Desktop (Выделенная кнопка)
![Пример перезапуска контейнера через Docker Desktop](images/api/docker-desktop-restart-container-example.jpg)
<a name="stop"></a>
+ Остановка
Через терминал
```bash
docker compose stop api
```
![Пример остановки контейнера через терминал](images/api/cmd-container-stop-example.jpg)
Через Docker Desktop (Выделенная кнопка)
<<<<<<< HEAD
<<<<<<< HEAD
![Пример остановки контейнера через Docker Desktop](images/server/docker-desktop-stop-container-example.jpg)

<a name="logs-view"></a>
## Просмотр логов
+ Через команду (Вывод последних 100 строк вывода (*--tail 100*) и нахождение в выводе (*-f*))
```bash
docker compose logs api --tail 100 -f
```
Пример вывода в терминал только что запущенного контейнера
![Пример вывода в терминал](images/server/cmd-logs-example.jpg)
Пример вывода в терминал с несколькими сделанными запросами
![Пример вывода в терминал](images/server/cmd-logs-example2.jpg)
+ Пример вывода в Docker Desktop 
![Пример вывода в Docker Desktop](images/server/docker-desktop-logs-example.jpg)
>>>>>>> parent of 1b8bfd5 ([ADD] Начал писать документацию к БД DB.md)
=======
![Пример остановки контейнера через Docker Desktop](images/server/docker-desktop-stop-container-example.jpg)
>>>>>>> parent of 17b72fc ([ADD] Написал документацию к клиенту CLIENT.md)
=======
![Пример остановки контейнера через Docker Desktop](images/api/docker-desktop-stop-container-example.jpg)
>>>>>>> parent of bc4391a ([FIX] Закончил составление README.md)
