<?php
require_once("modules/db.php");
require_once("../models/users.php");
date_default_timezone_set("Europe/Moscow");

class UserApplication{

    protected $user;

    function __construct(){
        $db = new db();
        $this -> user = new users($db->link);
    }
    

    function v4_UUID() {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
          // 32 bits for the time_low
          mt_rand(0, 0xffff), mt_rand(0, 0xffff),
          // 16 bits for the time_mid
          mt_rand(0, 0xffff),
          // 16 bits for the time_hi,
          mt_rand(0, 0x0fff) | 0x4000,
    
          // 8 bits and 16 bits for the clk_seq_hi_res,
          // 8 bits for the clk_seq_low,
          mt_rand(0, 0x3fff) | 0x8000,
          // 48 bits for the node
          mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
        );
      }


    function login($params){
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        $token = hash('sha256', $this->v4_UUID());
        $tokenCreate = date('Y-m-d H:i:s');
        if($login && $hash && $rnd){
            return $this -> user -> login($login, $hash, $rnd, $token, $tokenCreate);
        }
        else return array(false, 400);
    }


    function signin($params){
        $login = $params['login'];
        $password = $params['hash'];
        $token = hash('sha256', $this->v4_UUID());
        $tokenCreate = date('Y-m-d H:i:s');
        $timeCreate = $tokenCreate;
        if($login && $password){
            return $this -> user -> signin($login, $password, $token, $tokenCreate, $timeCreate);
        }
        else return array(false, 400);
    }


    function logout($params){
        $login = $params['login'];
        $token = $params['token'];
        if($login && $token){
            return $this -> user -> logout($login, $token);
        }
        return array(false, 400);
    }


    function tokenVerification($params){
        $login = $params['login'];
        $token = $params['token'];
        if($login && $token){
            return $this -> user -> tokenVerification($login, $token);
        }
        return array(false, 400);
    }


    function getAllInfo($params){
        $login = $params['login'];
        $token = $params['token'];
        if($login && $token){
            return $this -> user -> getAllInfo($login, $token);
        }
        return array(false, 400);
    }


    function updateName($params){
        $login = $params['login'];
        $token = $params['token'];
        $hash = $params['hash'];
        $newName = $params['newName'];
        if($login && $token && $newName){
            return $this -> user -> updateName($login, $hash, $token, $newName);
        }
        return array(false, 400);
    }


    function updatePassword($params){
        $login = $params['login'];
        $token = $params['token'];
        $newPassword = $params['newPassword'];
        if($login && $token && $newPassword){
            return $this -> user -> updatePassword($login, $token, $newPassword);
        }
        return array(false, 400);
    }
}