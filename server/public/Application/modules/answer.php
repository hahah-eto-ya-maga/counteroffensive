<?php
class Answer{
    protected $CODES;
    public function __construct() {
        $this -> CODES = array(
            '400' => 'Bad Request',         // Указаны не все параметры
            '401' => 'Unauthorized',        // Неавторизованый запрос(неверный токен)
            '403' => 'Forbidden',           // Неверный логин и пароль
            '405' => 'Method Not Allowed',  // Метод не указан
            '501' => 'Not Implemented',     // Метод не реализован на сервере
            '503' => 'Service Unavailable', // Не удалось подключится к стороннему сервису
            '460' => 'Login Occupied',      // Логин занят
            '461' => 'User not Exist'       // Пользователя не существует
        );
    }

    public function responce($result = null){
        if ($result){
            if(count($result) == 2 && !$result[0]){
                $code = $result[1];
                return array(
                    'result' => 'error',
                    'error' => array(
                        'code' => $code,
                        'text' => $this -> CODES[$code]
                    )
                );
            }
        }
        return array(
            'result' => 'ok',
            'data' => $result
        );
    }
}