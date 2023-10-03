<?php
$link = mysqli_connect("database", "admin", "b446b342-608c-11ee-8c99-0242ac120002", "contrnastup", 3306);

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}
?>