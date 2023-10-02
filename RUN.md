## Требуемые программы
[Docker](https://docs.docker.com/engine/install/) и дополнение [Docker Compose](https://docs.docker.com/compose/install/linux/)
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
## Использование проекта
Проект содержит 4 приложения:
1. Основной [сайт-лобби](http://localhost) (http://localhost)
2. [АПИ](http://localhost/api/doc/) (http://localhost/api/doc/)