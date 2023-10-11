<?php
    class Users{

        protected $db;

        public function __construct($db){
            $this->db = $db;
        }


        // Функция входа в аккаунт. Возвращает токен и логин
        function login($login, $hash, $rnd, $token, $tokenCreate){
            $query = "SELECT login FROM users WHERE login = ?;";
            $result = $this->db->execute_query($query, array($login)); // Выбирает логин по $login
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['login'] : '';
            
            if($checkLogin != ''){// Проверка существования логина
                $query = "SELECT password FROM users WHERE login = ?;"; //Выбирает хэшсумму по $login
                $result = $this->db->execute_query($query, array($login));
                $arr = $result -> fetch_assoc();
                $hashPassword = $arr ? $arr['password'] : '';
                $hashS = hash('sha256', $hashPassword.$rnd); // Хэш штрих. Строка сгенерированая с помощью хранящейсяв базе хэш-суммы
                
                if($hashS == $hash){
                    $query = "UPDATE users SET tokenCreate = ?, token = ? WHERE login = ?";
                    $this->db->execute_query($query, array($tokenCreate, $token, $login)); //Запрос на обновление данных в таблице
                    return array($login, $token);
                }

                return array(false, 403);//Неверный пароль или логин
            }
            
            else return array(false, 461);// неверный логин пользователя 

        }


        // Функция регистрации. Возвращает токен и логин
        function signin($login, $hash, $token, $tokenCreate, $timeCreate){
            // $hash = h(login.password); Хэш от пароля переходящий от клиента
            $query = "SELECT COUNT(*) FROM users WHERE login = ?;"; // Проверка существования пользователя с таким же логином
            $result = $this->db->execute_query($query, array($login));
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['COUNT(*)'] : 1; // Запрос возвращает количество пользователей с таким же логином, как задал пользователь

            if($checkLogin > 0){
                return array(false, 460); //Такой аккаунт уже существует
            }

            $query = "INSERT INTO users (login, password, token, tokenCreate, timeCreate) VALUES(?, ?, ?, ?, ?)"; // Запрос вставляет в базу данных полученные данные
            $this->db->execute_query($query, array($login, $hash, $token, $tokenCreate, $timeCreate));

            return array($login, $token);
        }

        // Функция выхода из аккаунта. В случае успешного срабатывания возвращает true, иначе код ошибки.
        function logout($login, $token){
            $query = "SELECT login FROM users WHERE login = ? ";
            $result = $this->db->execute_query($query,array($login));
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['login'] : '';
            
            if($checkLogin != ''){ // Проверка существования пользователя
                
                $query = "SELECT token FROM users WHERE login=?";
                $result = $this->db->execute_query($query, array($login));
                $arr = $result->fetch_assoc();
                $checkToken = $arr ? $arr['token'] : ''; // Проверка существования токена 
                
                if($checkToken != '' && $checkToken == $token){
                    $query = "UPDATE users SET token=0 where login=?";
                    $this->db->execute_query($query, array($login));
                    return array(true);//придумать какой то формат данных для отдачи обратно
                }

                else return array(false, 401);//неверный токен для этого пользователя
            }

            else return array(false, 461);// неверный логин пользователя 
        }

        // Функция потверждения актуального токена
        function tokenVerification($login, $token){
            $query = "SELECT login FROM users WHERE login=?";
            $result = $this->db->execute_query($query,array($login));
            $checkLogin = $result->fetch_assoc()['login'];
            
            if($checkLogin != ''){ // Проверка существования пользователя
                $query = "SELECT token FROM users WHERE login=?";
                $result = $this->db->execute_query($query, array($login));
                $arr = $result->fetch_assoc();
                $checkToken = $arr ? $arr['token'] : '';
                
                if($checkToken != '' && $checkToken == $token){ // Проврека существования токена 
                    return array(true); //придумать какой то формат данных для отдачи обратно
                }

                else return array(false, 401); //неверный токен для этого пользователя
            }
            
            else return array(false, 461); //такого пользователя не существует
        }

        // Функция изменения имени
        function updateName($login, $hash, $token, $newName){
            $query = "SELECT login FROM users WHERE login=?";
            $result = $this->db->execute_query($query,array($login));
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['login'] : '';
            
            if($checkLogin != ''){ // Проверка существования пользователя
                $query = "SELECT token FROM users WHERE login=?";
                $result = $this->db->execute_query($query,array($login));
                $arr = $result->fetch_assoc();
                $checkToken = $arr ? $arr['token'] : '';
                
                if($checkToken != '' && $checkToken == $token){ // Проврека верности токена 
                    $query = "SELECT COUNT(*) FROM users WHERE login = ?;"; // Проверка существования пользователя с таким же логином
                    $result = $this->db->execute_query($query, array($login));
                    $arr = $result -> fetch_assoc();
                    $checkLogin = $arr ? $arr['COUNT(*)'] : 1; // Запрос возвращает количество пользователей с таким же логином, как задал пользователь

                    if($checkLogin > 0){
                        return array(false, 460); //Такой аккаунт уже существует
                    }
                    
                    $query = "UPDATE users SET login=?, password=? where login=?";
                    $this->db->execute_query($query, array($newName, $hash, $login)); //Запрос замены имени
                    return array(true);
                }

                else return array(false, 401);//неверный токен для этого пользователя
            }

            else return array(false, 461);//такого пользователя не существует
        }


        // Функция изменения пароля
        function updatePassword($login, $token, $newPassword){ // Новый пароль отправляется в виде h($login.$password)
            $query = "SELECT login FROM users WHERE login=?";
            $result = $this->db->execute_query($query, array($login));
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['login'] : '';
            
            if($checkLogin != ''){ // Проверка существования пользователя
                $query = "SELECT token FROM users WHERE login=?";
                $result = $this->db->execute_query($query,array($login));
                $arr = $result->fetch_assoc();
                $checkToken = $arr ? $arr['token'] : '';
                
                if($checkToken != '' && $checkToken == $token){ // Проврека существования токена 
                    $query = "UPDATE users SET password=? where login=?";
                    $this->db->execute_query($query, array($newPassword, $login)); //Запрос замены имени
                    return array(true);
                }

                else return array(false, 401);//неверный токен для этого пользователя
            }

            else return array(false, 461);//такого пользователя не существует
        }


        // Метод получения информации
        function getAllInfo($login, $token){
            $query = "SELECT login FROM users WHERE login=?";
            $result = $this->db->execute_query($query, array($login));
            $arr = $result -> fetch_assoc();
            $checkLogin = $arr ? $arr['login'] : '';
            
            if($checkLogin != ''){ // Проверка существования пользователя
                $query = "SELECT token FROM users WHERE login=?";
                $result = $this->db->execute_query($query, array($login));
                $arr = $result->fetch_assoc();
                $checkToken = $arr ? $arr['token'] : '';
                
                if($checkToken != '' && $checkToken == $token){ // Проврека существования токена 
                    $query = "SELECT gameCount, scoreCount, timeCreate FROM users WHERE login = ?;";
                    $result = $this->db->execute_query($query, array($login));
                    $arr = $result -> fetch_assoc(); // Запрос для получения основных данных о пользователе
                    
                    if($arr){
                        $gameCount = $arr['gameCount'];
                        $scoreCount = $arr['scoreCount'];
                        $timeCreate = $arr['timeCreate'];
                    }

                    return array(
                        $gameCount,
                        $scoreCount,
                        $timeCreate
                    );
                }

                else return array(false, 401);//неверный токен для этого пользователя
            }

            else return array(false, 461);//такого пользователя не существует
        }
    
    }