<?php
    require_once('Application/modules/answer.php');
    require_once('Application/userApplication.php');

    $login = isset($_POST["login"]) ? $_POST["login"] : '';
    $hash = isset($_POST["hash"]) ? $_POST["hash"] : '';
    $token = isset($_POST["token"]) ? $_POST["token"] : '';
    $function = isset($_POST["function"]) ? $_POST["function"] : false;
    $rnd = isset($_POST["rnd"]) ? $_POST["rnd"] : '';
    $newName = isset($_POST["newName"]) ? $_POST["newName"] : '';
    $newPassword = isset($_POST["newPassword"]) ? $_POST["newPassword"] : '';


    $answer = new Answer();

    $params = array(
        'login' => $login,
        'hash' => $hash,
        'token' => $token,
        'rnd' => $rnd,
        'function' => $function,
        'newName' => $newName,
        'newPassword' => $newPassword
    );

    function request($params){  
        $func = $params['function'];
        if($func){
            $uApp = new userApplication();
            switch($func){
                case 'signin': return $uApp->signin($params);
                case 'login': return $uApp->login($params);
                case 'logout': return $uApp->logout($params);
                case 'tokenVerification': return $uApp->tokenVerification($params);
                case 'getAllInfo': return $uApp->getAllInfo($params);
                case 'updateName': return $uApp->updateName($params);
                case 'updatePassword': return $uApp->updatePassword($params);

            }
            return array(false, 501);
        }
        return array(false, 405);
    }

    echo json_encode($answer -> responce(request($params)));