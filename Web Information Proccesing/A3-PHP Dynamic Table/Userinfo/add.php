<?php include 'header.php'?>
<?php include 'Database.php'?>

<?php
$db = new Database();

    if(isset($_POST['submit'])){
        $creator = $_POST['creator'];
        $title = $_POST['title'];
        $types = $_POST['types'];
        $identifier = $_POST['identifier'];
        $dates = $_POST['dates'];
        $languages = $_POST['languages'];
        $descriptions = $_POST['descriptions'];
        //validation
        if($creator == ""|| $title == ""|| $types == ""|| $identifier == ""|| $dates == ""|| $languages == ""|| $descriptions == ""){
            $error = "Field Must not be Empty";
      }
        else
        {

            $sql = "INSERT INTO userdata(creator,title,types,identifier,dates,languages,descriptions) VALUES ('$creator','$title',' $types','$identifier','$dates','$languages','$descriptions')";
            $add = $db->add($sql);
        }


    }        
            


?>

<?php
if(isset($error)){
    echo "<p>".$error."</p>";
}
?>


<form action="" method="post">
    <input class="input" type ="text" name="creator" placeholder="Creator"><br>
    <input class="input"type ="text" name="title" placeholder="Title"><br>
    <!-- <select name="types">
    <option value = "Fiction">Fiction</option>
    <option value = "Non-fiction">Non-Fiction</option>
    </select>
    <br> -->
    <input class="input"type ="text" name="types" placeholder="Genre"><br>
    <input class="input" type ="text" name="identifier" placeholder="Identifier"><br>
    <input class="input" type ="date" name="dates" placeholder="Date"><br>
    <input class="input" type ="text" name="languages" placeholder="Language"><br>
    <input  class="input" type ="text" name="descriptions" placeholder="Description"><br>
    <br><br>
    <input type="submit" name="submit" value="Add">
    <input type="reset" name ="reset" value="Cancel">
    
</form>

<h2 class="button"><a href="index.php">Go Back</a></h2>

<?php include 'footer.php'?>



