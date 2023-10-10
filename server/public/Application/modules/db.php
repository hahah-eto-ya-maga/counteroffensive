<?php
require_once("answer.php");
class Db{
    public $link;
    protected $answer;

    function __construct(){
        $this->answer = new Answer();

        $this -> link = new mysqli("database", "admin", "b446b342-608c-11ee-8c99-0242ac120002", "contrnastup", 3306);
        if($this->link->connect_error){
            die(json_encode($this->answer->responce(array(false, 503))));// Ошибка подключения к базе данных
        }
    }

}