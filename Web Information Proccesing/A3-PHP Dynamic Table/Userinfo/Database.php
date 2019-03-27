<?php include 'config.php';?>

<?php
    class Database {
        public $host = DB_HOST;
        public $user = DB_USER;
        public $pass = DB_PASS;
        public $name = DB_NAME;


            public $link;
            public $error;

            function __construct(){
                $this->connection();
            }

            
            //database conection.
            public function connection (){
                $this->link = new mysqli($this->host, $this->user,$this->pass,$this->name);

                // for errors
                if(!$this->link){
                    $this->error - "Connection Failed". $this->link->connect_error;
                    return false;
                }
            }

            //reading data from out Database

            public function read($query){
                $read = $this->link->query($query) or die($this->link->error.__LINE__);
                if($read->num_rows > 0){
                  return $read;  
                }
                else{
                    return false;
        
                }
            }



            ///Adding our data into the database.
            public function add($query){
                $add = $this->link->query($query) or die($this->link->error.__LINE__);
                if($add){
                    header("Location:index.php?msg=".urlencode('Data Succesfully Added'));
                    exit();
                }
                else{
                    echo $this->link->error;
                }
            }


            //Updating our data into database.
            public function update($query){

                $update = $this->link->query($query) or die($this->link->error.__LINE__);
                if($update){
                    header("Location:index.php?msg=".urlencode('Data Succesfully Updated'));
                    exit();
                }
                else{
                    echo $this->link->error;
                }
            }

            //Deleting data from our database.
            public function delete($query){
                $delete = $this->link->query($query) or die($this->link->error.__LINE__);
                if($delete){
                    header("Location:index.php?msg=".urlencode('Data Succesfully Delete'));
                    exit();
                }
                else{
                    echo $this->link->error;
                }
            }


        
    }